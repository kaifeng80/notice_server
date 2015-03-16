/**
 * Created by King Lee on 15-1-15.
 */
var express = require('express');
var router = express.Router();
var util = require('../module/util');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('reward_vs_weekly_240', { title: 'Express', date_desc: util.getWeekDesc() });
});

module.exports = router;
