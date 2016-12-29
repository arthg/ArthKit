// NOT for actual production use.
// useful for hosting the minified production build for local debugging purposes

// server up static files created by build
// compare to srcServer.js
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */
// don't care about writing to console in build script file

const port = 3000;
const app = express();

// enable gzp compression
app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
