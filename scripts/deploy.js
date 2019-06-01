require("dotenv").config()
let nodeSsh = require("node-ssh");
let ssh = new nodeSsh();

if (process.env.DEPLOY_HOST == null) {
  throw new Error("You need to create a .env file with the following variables: DEPLOY_HOST, DEPLOY_USERNAME, DEPLOY_PW and DEPLOY_HOMEDIR");
}

async function deploy() {
  try {
    console.log("Connecting\n");

    await ssh.connect({
      host: process.env.DEPLOY_HOST,
      username: process.env.DEPLOY_USERNAME,
      password: process.env.DEPLOY_PW,
    });

    console.log("\nUpdating repo\n");

    await executeCommand("git status | grep 'nothing to commit'");
    await executeCommand("git checkout .");
    await executeCommand("git pull --rebase");

    console.log("\nInstalling npm dependencies\n");
    await executeCommand("npm install");

    console.log("\nMigrating db\n");
    await executeCommand("npm run db:migrate");

    console.log("\nRebuilding app\n");
    // await executeCommand("npm run build");
    await executeCommand("pm2 restart cup");
    
    console.log("\nMake sure the app is running\n");
    try {
      await executeCommand("pm2 show cup | grep online");
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
  console.log("> " + command);
  let result = await ssh.execCommand(command, { cwd: homeDir });

  if (result.code !== 0) {
    throw new Error(`Invalid result code for command "${command}": ${result.code}
    
    ${result.stderr}`)
  } else {
    return result;
  }
}

deploy();