var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index_mm', { title: 'Express' });
});

module.exports = router;
