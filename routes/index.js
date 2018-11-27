var express = require('express');
var router = express.Router();

/* GET home page. */
// 我是新增的注释 2018年11月27日14:53:30
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expressaaaaaaa' });
});

module.exports = router;
