var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('show_200_1', { title: 'Express' });
});

module.exports = router;
