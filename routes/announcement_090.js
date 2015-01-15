/**
 * Created by King Lee on 15-1-16.
 */
var express = require('express');
var router = express.Router();
var util = require('../module/util');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('announcement_090', { title: 'Express', date_desc: util.getWeekDesc() });
});

module.exports = router;
