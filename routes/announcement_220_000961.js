/**
 * Created by King Lee on 14-12-30.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('announcement_220_000961', { title: 'Express' });
});

module.exports = router;
