/**
 * Created by giuffre on 22/09/15.
 */
var express = require('express');
var spitty = express();

spitty.get('/', (request, response) => {
  response.send(spitty._router.toJSON());
});


var server = spitty.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});