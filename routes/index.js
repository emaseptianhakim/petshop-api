var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<p>Ema Septian Hakim <p><p>2100016114</p>');
});

module.exports = router;