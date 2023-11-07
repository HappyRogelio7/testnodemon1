const express = require('express');
const app = express();

const port = env.process.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World! This is Example Web Server');
});

app.listen(port, () => {
    console.log('Example app listening on port 3000!');
});