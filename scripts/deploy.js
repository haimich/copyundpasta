require("dotenv").config()

const consola = require("consola");
const shell = require("shelljs");
const nodeSsh = require("node-ssh");
const ssh = new nodeSsh();

if (process.env.DEPLOY_HOST == null) {
  throw new Error("You need to create a .env file with the following variables: DEPLOY_HOST, DEPLOY_USERNAME, DEPLOY_PW and DEPLOY_HOMEDIR");
}

async function deploy() {
  try {
    consola.success("Checking for local modifications");
    if (shell.exec("git status | grep 'nothing to commit'").code !== 0) {
      consola.error("Check your local repo for modifications!");
      process.exit(1);
    }

    consola.success("Connecting...");

    await ssh.connect({
      host: process.env.DEPLOY_HOST,
      username: process.env.DEPLOY_USERNAME,
      password: process.env.DEPLOY_PW,
    });

    consola.success("\nUpdating repo...\n");

    await executeCommand("git checkout .");
    await executeCommand("git status | grep 'nothing to commit'");
    await executeCommand("git pull --rebase");

    consola.success("\nInstalling npm dependencies...\n");
    await executeCommand("npm install"); // don't use --production because we need dev dependencies fo build
    await executeCommand("git checkout package-lock.json");

    consola.success("\nRebuilding app...\n");
    await executeCommand("npm run build");

    consola.success("\nMigrating db...\n");
    await executeCommand("NODE_ENV=production npm run db:migrate");

    consola.success("\Generating and inserting seed data db...\n");
    await executeCommand("NODE_ENV=production npm run db:seed");
    
    consola.success("\nRestarting app...\n");
    try {
      await executeCommand("~/bin/pm2 restart ecosystem.config.js --env production");
      await executeCommand("~/bin/pm2 show cup | grep online");
    } catch (error) {
      consola.error(error);

      let result = await executeCommand("pm2 list cup");
      consola.error(result);
      process.exit(1);
    }

    process.exit(0);
  } catch (error) {
    consola.error(error);
    process.exit(1);
  }
}

async function executeCommand(command, homeDir = process.env.DEPLOY_HOMEDIR) {
  consola.success("> " + command);
  let result = await ssh.execCommand(command, { cwd: homeDir });

  if (result.code !== 0) {
    throw new Error(`Invalid result code for command "${command}": ${result.code}
    
    ${result.stderr}`)
  } else {
    return result;
  }
}

deploy();