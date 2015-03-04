var crypto = require('crypto');
var User = require('../../models/user.js');

exports.login = function(req, res) {
	res.render('user/login', { 
		title: 'Log In'
	});
}

exports.create = function(req, res) {
	res.render('user/register', {
		title: 'Become a new member'
	});
}

exports.createPost = function(req, res) {
	console.log("in createPost");
	var fname = req.body.fname;
	var lname = req.body.lname;
	var email = req.body.email;
	var password = req.body.password;
	var cpassword = req.body.cpassword;

	if (cpassword != password) {
		req.flash('error', 'password is not the same');
		return res.redirect('/create');
	}

	var md5 = crypto.createHash('md5');
	password = md5.update(req.body.password).digest('hex');

	var newUser = new User({
      	fname: fname,
      	lname: lname,
      	email: req.body.email,
      	password: password
  	});

  	newUser.save(function(err) {
  		if (err) {
  			//req.flash('error', err);
  			console.log("failed");
  			return res.redirect('/create');
  		}
  		//req.flash('success', 'success!');
  		console.log("success");
  		res.redirect('/');
  	});
}

