var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/hashing-demo');
var userCollection = db.get('users');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Create Username' });
});

router.post('/signup', function(req, res, next) {
  userCollection.insert({
    user: req.body.user_name,
    pass: req.body.pass,
    passVar: req.body.var_pass
  });
  res.redirect('/');
});

module.exports = router;
