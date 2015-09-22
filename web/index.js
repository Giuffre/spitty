/**
 * Created by giuffre on 22/09/15.
 */
var express = require('express');
var ItemController = require('../src/Spitty/Controller/Item.js');
var spitty = express();

spitty.get('/', (request, response) => {
  "use strict";
  response.send("Wellcome to Spitty cache service.");
});

spitty.use('/item', ItemController);


var server = spitty.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});