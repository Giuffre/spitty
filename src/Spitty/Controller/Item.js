/**
 * Created by giuffre on 22/09/15.
 */

var express = require('express');
var router = express.Router();

// middleware specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
router.get('/:key', (request, response) => {
  "use strict";

});

router.post('/:key', (request, response) => {
  "use strict";
  
});

module.exports = router;