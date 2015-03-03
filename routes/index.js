var express = require('express');
var router = express.Router();

var user = require('../public/models/user.js');
var account = require('./user/account.js');

user.getUserName(function(name) {
	console.log("Return from user.js: " + name);
	/* GET home page. */	
	router.get('/', function(req, res) {
	  // res.render('index', { title: 'Express' });
	  res.render('index', { name: name });
	});
});

// router.get('/login', function (req, res) {
//     res.render('login', { title: 'login' });
// });
// router.post('/login', function (req, res) {
// });

router.get('/login', account.login);

module.exports = router;

// app.post('/user', function (req, res) {  
// 	console.log("in");
// });
