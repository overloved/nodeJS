var express = require('express');
var router = express.Router();

var user = require('../models/user.js');
var account = require('./user/account.js');

// user.getUserName(function(name) {
// 	console.log("Return from user.js: " + name);
// 	/* GET home page. */	
// 	router.get('/', function(req, res) {
// 	  // res.render('index', { title: 'Express' });
// 	  res.render('index', { name: "Hello" });
// 	});
// });

router.get('/', function(req, res) {
	res.render('index', { name: "Hello" });
});

router.get('/login', account.login);
router.get('/register', account.create);
router.post('/createPost', account.createPost);

module.exports = router;
