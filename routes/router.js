var express = require('express');
var router = express.Router();
var User = require('../models/user');


// GET route for reading data
router.get('/', function (req, res, next) {
  return res.sendFile(path.join(__dirname + '/templateLogReg/index.html'));
});

//POST route for updating data
router.post('/', function (req, res, next) {
  if (req.body.email &&
    req.body.password) {

     } else {
    var err = new Error('Alle field have to be filled out');
    err.status = 400;
    return next(err);
  }

  // confirm that user typed same password twice
  if (req.body.password !== req.body.confirmPassword) {
    var err = new Error('Passwords do not match.');
    err.status = 400;
    return next(err);
  }
});


module.exports = router;