var express = require('express');
var router = express.Router();

/* GET users listing. */
user.getUserName(function(name) {
	console.log("Return from user.js: " + name);
	/* GET home page. */	
	router.get('/', function(req, res, next) {
	  // res.render('index', { title: 'Express' });
	  res.render('index', { name: name });
	});
});

app.post('/user', function (req, res) {  
	console.log("in");
});