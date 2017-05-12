var express = require('express');
var router = express.Router();


// GET /
router.get('/', function(req, res, next) {
  return res.send("working");
});


module.exports = router;