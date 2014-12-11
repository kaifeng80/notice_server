var express = require('express');
var router = express.Router();
var util = require('../module/util');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('rewardlist_seoul_210_000020', { title: 'Express', date_desc: util.getWeekDesc() });
});

module.exports = router;
