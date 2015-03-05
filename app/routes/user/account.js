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
		console.log('error', 'password is not the same');
		return res.redirect('/register');
	}

	var md5 = crypto.createHash('md5');
	password = md5.update(req.body.password).digest('hex');

	var newUser = new User({
      	fname: fname,
      	lname: lname,
      	email: req.body.email,
      	password: password
  	});

	newUser.checkUserExist(newUser.email, function(err, user) {
		if (err) {
			req.flash('error', err);
			return res.redirect('/');
		}
		console.log(user);
		if (user >= 1) {
			req.flash('error', 'User already exists!');
      		return res.redirect('/register');
		}
		newUser.save(function(err, fname) {
	  		console.log(fname);
	  		if (err) {
	  			//req.flash('error', err);
	  			console.log("failed to register");
	  			return res.redirect('/register');
	  		}
	  		//req.flash('success', 'success!');
	  		console.log("success");
	  		res.redirect('/');
	  	});
	}); 	
}

