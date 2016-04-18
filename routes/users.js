var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  next();
});
router.get('/user', function(req, res, next) {
  debugger;
  res.render('user', {
    title: 'user info',
    name:'cely',
    age:'25'
  });
});
module.exports = router;
