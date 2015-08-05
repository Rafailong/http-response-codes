
'use strict';

var faker = require('faker');
var express = require('express');
var object2xml = require('object-to-xml');

var PORT = process.env.PORT || 8080;
var response = { code: faker.random.number(), message: faker.lorem.sentence()  };

var app = express();
app.get('/404', function (req, res) {
  res.status(404);
  return res.json(response);
});

app.post('/401', function (req, res) {
  res.status(401);
  return res.json(response);
});

app.get('/json', function (req, res) {
  return res.json(response);
});

app.get('/xml', function (req, res) {
  res.set('Content-type', 'application/xml');
  return res.send(object2xml({
    '?xml version="1.0" encoding="utf-8"': null,
    body: response
  }));
});

app.listen(PORT);
console.log('Running on port: ' + PORT);
