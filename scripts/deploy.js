let nodeSsh = require('node-ssh');
let ssh = new nodeSsh();

const HOME_DIR = "/home/haimich/copyundpasta.de";

async function deploy() {
  try {
    console.log("Connecting");

    await ssh.connect({

    });

    console.log("git pull");

    await executeCommand("git checkout .");
    await executeCommand("git pull --rebase");

    console.log("Uploading file");

    await ssh.putFile("/Users/CrisMich/Desktop/dev/copyundpasta/README.md", "/home/haimich/README.md");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

async function executeCommand(command, homeDir = HOME_DIR) {
  let result = await ssh.execCommand(command, { cwd: homeDir });

  if (result.code !== 0) {
    console.error(`Invalid result code for command ${command}: ${result.code}`);
    console.error(result.stderr);
    process.exit(1);
  }
}

deploy();