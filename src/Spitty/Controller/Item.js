/**
 * Created by giuffre on 22/09/15.
 */

var express = require('express');
var router = express.Router();

// middleware specific to this router
router.use(function timeLog(req, res, next) {
  "use strict";
  console.log('Time: ', Date.now());
  next();
});

router.get('/:key', (request, response) => {
  "use strict";
  let key = request.params.key;
  response.send(key);
});

router.post('/:key', (request, response) => {
  "use strict";
});

module.exports = router;