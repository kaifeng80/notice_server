var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('announcement_210_000108', { title: 'Express' });
});

module.exports = router;