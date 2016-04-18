var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '分类',
    items:[
      {'name':'javascript','link':'/item1'},
      {'name':'html'},
      {'name':'css'}
    ]
  });
});
router.get('/item1', function(req, res, next) {
  res.render('item1', {
    title: ' 资源列表',
    items:[
      {'name':'node'},
      {'name':'es6'},
      {'name':'express'},
      {'name':'zepto'}
    ]
  });
});
module.exports = router;
