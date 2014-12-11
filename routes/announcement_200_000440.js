var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('announcement_200_000440', { title: 'Express' });
});

module.exports = router;
