var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/hashing-demo');
var bcrypt = require('bcryptjs');
var userCollection = db.get('users');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Create Username' });
});

router.post('/signup', function(req, res, next) {
  if(req.body.pass === req.body.var_pass){
  userCollection.insert({
    user: req.body.user_name,
    pass: bcrypt.hashSync(req.body.pass, 8),
  });
}
  res.redirect('/');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

// router.post('/login', function(req, res, next) {
//   userCollection.findOne({ user: req.body.user_name}, function(err, data){
//     if(bcrypt.hashSync(req.body.user_pass) === bcrypt.compareSync)
//   });
// });
module.exports = router;
