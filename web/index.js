/**
 * Created by giuffre on 22/09/15.
 */
var express = require('express');
var ItemController = require('../src/Spitty/Controller/Item.js');
var spitty = express();

spitty.get('/', (request, response) => {
  "use strict";
  response.contentType('application/json');
  response.send({
    "service" : "Spitty (Cache)",
    "description" : "Open Source simple cache system",
    "persistent" : false
  });
});

spitty.use('/item', ItemController);


var server = spitty.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});