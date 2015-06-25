var express = require('express');
var router = express.Router();

router.get('/yay', function(req, res, next){
  res.render('yay');
});

module.exports;
