/**
 * Created by King Lee on 14-12-5.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('rewardlist_seoul_210', { title: 'Express' });
});

module.exports = router;
