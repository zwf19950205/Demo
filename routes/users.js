var express = require('express');
var router = express.Router();

/* GET users listing. */
// 同步测试
router.get('/', function(req, res, next) {
  res.send('respond with a resourceaaaaaaaaaaa');
});

module.exports = router;
