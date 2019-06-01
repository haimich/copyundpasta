require("dotenv").config()
let nodeSsh = require("node-ssh");
let ssh = new nodeSsh();

if (process.env.DEPLOY_HOST == null) {
  throw new Error("You need to create a .env file with the following variables: DEPLOY_HOST, DEPLOY_USERNAME, DEPLOY_PW and DEPLOY_HOMEDIR");
}

async function deploy() {
  try {
    console.log("Connecting");

    await ssh.connect({
      host: process.env.DEPLOY_HOST,
      username: process.env.DEPLOY_USERNAME,
      password: process.env.DEPLOY_PW,
    });

    await executeCommand("git status | grep 'nothing to commit'");
    await executeCommand("git checkout .");
    await executeCommand("git pull --rebase");

    // console.log("Uploading file");
    // await ssh.putFile("README.md", "/home/haimich/README.md");

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
    console.error(`Invalid result code for command "${command}": ${result.code}`);
    console.error(result.stderr);
    process.exit(1);
  }
}

deploy();