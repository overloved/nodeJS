var express = require('express');
var router = express.Router();

var user = require('../public/models/user.js');


user.getUserName(function(name) {
	console.log("Return from user.js: " + name);
	/* GET home page. */	
	router.get('/', function(req, res, next) {
	  // res.render('index', { title: 'Express' });
	  res.render('index', { name: name });
	});
});

module.exports = router;

app.post('/user', function (req, res) {  
	console.log("in");
});
