require("dotenv").config()

const shell = require("shelljs");
const ora = require("ora");
const nodeSsh = require("node-ssh");
const ssh = new nodeSsh();

if (process.env.DEPLOY_HOST == null) {
  throw new Error("You need to create a .env file with the following variables: DEPLOY_HOST, DEPLOY_USERNAME, DEPLOY_PW and DEPLOY_HOMEDIR");
}

async function deploy() {
  try {
    const spinner = ora('Checking for local modifications').start();

    if (shell.exec("git status | grep 'nothing to commit'").code !== 0) {
      console.error("Check your local repo for modifications!");
      process.exit(1);
    }

    spinner.text = "Connecting...";

    await ssh.connect({
      host: process.env.DEPLOY_HOST,
      username: process.env.DEPLOY_USERNAME,
      password: process.env.DEPLOY_PW,
    });

    spinner.text = "Updating repo...";

    await executeCommand("git checkout .");
    await executeCommand("git status | grep 'nothing to commit'");
    await executeCommand("git pull --rebase");

    spinner.text = "Installing npm dependencies...";
    await executeCommand("npm ci"); // don't use --production because we need dev dependencies fo build
    await executeCommand("git checkout package-lock.json");

    spinner.text = "Rebuilding app...";
    await executeCommand("npm run build");

    spinner.text = "Migrating db...";
    await executeCommand("NODE_ENV=production npm run db:migrate");

    spinner.text = "Generating and inserting seed data db...";
    await executeCommand("NODE_ENV=production npm run db:seed");
    
    spinner.text = "Restarting app...";
    try {
      await executeCommand("~/bin/pm2 restart ecosystem.config.js --env production");
      await executeCommand("~/bin/pm2 show cup | grep online");
    } catch (error) {
      console.error(error);

      let result = await executeCommand("pm2 list cup");
      console.error(result);
      process.exit(1);
    }

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

async function executeCommand(command, homeDir = process.env.DEPLOY_HOMEDIR) {
  console.info("> " + command);
  let result = await ssh.execCommand(command, { cwd: homeDir });

  if (result.code !== 0) {
    throw new Error(`Invalid result code for command "${command}": ${result.code}
    
    ${result.stderr}`)
  } else {
    return result;
  }
}

deploy();