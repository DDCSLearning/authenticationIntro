var express = require('express');
var router = express.Router();


// GET /
router.get('/', function(req, res, next) {
  return res.sendFile(path.join(__dirname+'/template/index.html'));
});


module.exports = router;