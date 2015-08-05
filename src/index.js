
'use strict';

var faker = require('faker');
var express = require('express');

var PORT = process.env.PORT || 8080;
var response = { code: faker.random.number(), message: faker.lorem.sentence()  };

var app = express();
app.get('/404', function (req, res) {
  res.status(404);
  return res.json(response);
});

app.listen(PORT);
console.log('Running on port: ' + PORT);
