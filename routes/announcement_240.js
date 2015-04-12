/**
 * Created by King Lee on 15-3-12.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('announcement_240', { title: 'Express' });
});

module.exports = router;
