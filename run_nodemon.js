const { spawn } = require('child_process');
const fs = require('fs/promises');
const path = require('path');

let serverProcess;

function startServer() {
  serverProcess = spawn('nodemon', ['code/index.js'], {
    stdio: 'inherit'
  });

  serverProcess.on('close', (code) => {
    console.log(`Server process exited with code ${code}`);
    setTimeout(() => {
      startServer();
    }, 2000);
  });
}

startServer();
