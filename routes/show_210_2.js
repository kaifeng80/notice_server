/**
 * Created by King Lee on 14-12-5.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('show_210_2', { title: 'Express' });
});

module.exports = router;
