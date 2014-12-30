/**
 * Created by King Lee on 14-12-30.
 */
var express = require('express');
var router = express.Router();
var util = require('../module/util');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('rewardlist_seoul_220_000442', { title: 'Express', date_desc: util.getWeekDesc() });
});

module.exports = router;
