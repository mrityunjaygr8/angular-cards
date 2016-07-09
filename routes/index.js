var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/* GET home page. */

router.post('/mail', function(req, res, next){

});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
