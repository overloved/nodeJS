// var express = require('express');

// module.exports = function(app) {
// 	app.get('/login', function(req, res) {
// 		res.render('login', { title: 'Log In'});
// 	});
// 	app.post('/login', function (req, res) { });
// }

exports.login = function(req, res) {
	res.render('login', { title: 'Log In'});
}

