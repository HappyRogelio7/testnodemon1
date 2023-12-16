
/*
  Author: Happyuky7
  Github: https://github.com/Happyuky7/
  Twitter: https://twitter.com/Happyuky7
  Github Repository this project: https://github.com/Happyuky7/testnodemon1/
  License: https://github.com/Happyuky7/testnodemon1/blob/master/LICENSE.txt
  Version: 1.0.0
  Description: This script is used to run nodemon and autorestart for crash.
*/

const express = require('express');
const app = express();

const port = env.process.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World! This is Example Web Server');
});

app.listen(port, () => {
    console.log('Example app listening on port 3000!');
});
