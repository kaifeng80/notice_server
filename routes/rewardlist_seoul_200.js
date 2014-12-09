var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('rewardlist_seoul_200', { title: 'Express' });
});

module.exports = router;
