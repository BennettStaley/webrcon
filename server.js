const express = require('express');
const fs = require('fs');
const http = require('http');
const https = require('https');

const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

let privateKey;
let certificate;

try {
  privateKey = fs.readFileSync('./keys/key.key', 'utf8');
  certificate = fs.readFileSync('./keys/key.crt', 'utf8');
} catch (err) {
  console.log('no keys');
}

const credentials = { key: privateKey, cert: certificate };

app.prepare().then(() => {
  const server = express();

  server.get('/a', (req, res) => {
    return app.render(req, res, '/a', req.query);
  });

  server.get('/b', (req, res) => {
    return app.render(req, res, '/b', req.query);
  });

  server.get('/posts/:id', (req, res) => {
    return app.render(req, res, '/posts', { id: req.params.id });
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  const httpServer = http.createServer(server);
  let httpsServer;
  if (privateKey && certificate) {
    httpsServer = https.createServer(credentials, server);
  }

  if (dev) {
    console.log('Running dev http...');
    httpServer.listen(8080);
    if (httpsServer) {
      console.log('Running dev https...');
      httpsServer.listen(8443);
    }
  } else {
    console.log('Running prod http...');
    httpServer.listen(80);
    if (httpsServer) {
      console.log('Running prod https...');
      httpsServer.listen(443);
    }
  }
});
