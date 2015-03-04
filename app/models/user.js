var connection = require('../resources/server.js');

var env = "dev";
var config = require('../resources/config.json')[env];
var password = config.password ? config.password : null;

var mysql = require('mysql');

// connection.dbConnect();

function User(user) {
	this.fname = user.fname;
	this.lname = user.lname;
	this.password = user.password;
	this.email = user.email
}
module.exports = User;

User.prototype.getUserName = function(callback) {
    var sql = 'select name from test';
    connection.executeQuery(sql, function(name) {
    	console.log("Return from server.js = "  + name);
    	callback(name);
    });   
}

// Save user info
User.prototype.save = function(callback) {
	var user = {
		fname: this.fname,
		lname: this.lname,
		email: this.email,
		password: this.password
	};

	var connection = mysql.createConnection({
	  	host     : config.host,
	  	user     : config.user,
	  	password : config.password,
	  	database : config.database
	});
	connection.connect();

	var sql = 'INSERT INTO user_entity(fname, lname, email, password) VALUES("' + user.fname + '", "' + user.lname + '", "' + user.email + '", "' + user.password + '")';
	connection.query(sql, function(err, res) {
		if (err) {
			console.log("ERROR: " + err);
			throw err;
		}
		callback(user.fname);
	});

	connection.end();
}