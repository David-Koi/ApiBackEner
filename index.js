const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
const port = 5003;

const loginRouter = require('./routes/loginRouter');
const resRouter = require('./routes/resRouter');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Entaro Adun');
});

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"))
});

app.use('/', loginRouter);
app.use('/res', resRouter);

app.listen(port, () => {
    console.log(`ok`);
});

module.exports = app;