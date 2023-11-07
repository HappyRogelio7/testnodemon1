
/*
  Author: HappyRogelio7
  Github: https://github.com/HappyRogelio7/
  Twitter: https://twitter.com/HappyRogelio7
  Github Repository this project: https://github.com/HappyRogelio7/testnodemon1/
  License: https://github.com/HappyRogelio7/testnodemon1/blob/master/LICENSE.txt
  Version: 1.0.0
  Description: This script is used to run nodemon and autorestart for crash.
*/

const { spawn } = require('child_process');
const fs = require('fs/promises');
const path = require('path');

/*
  This script is used to run nodemon in a child process.
  It will restart the server if it crashes.
  It will also restart the server if a file changes.
  It will not restart the server if you stop it manually.
*/

/* 
  This Variable is used to run the server
  Change the path_run for your server file.
  Default: code/index.js
  Warning: No remove ' ' or your path not found.
*/
const path_run = 'code/index.js';

let serverProcess;

function startServer() {
  console.log('Starting server...');

  serverProcess = spawn('nodemon', [path_run], {
    stdio: 'inherit'
  });



  serverProcess.on('close', (code) => {
    console.log(`Server process exited with code ${code}`);
    Console.log('Server is Stopped');
    console.log('Waiting 2 seconds before restarting server...');
    setTimeout(() => {
      console.log('Restarting server...');
      startServer();
    }, 2000);
  });
}

startServer();
