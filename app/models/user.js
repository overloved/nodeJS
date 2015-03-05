var db = require('../resources/server.js');
var connection = db.dbConnect();

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

	var sql = 'INSERT INTO user_entity(fname, lname, email, password) VALUES("' + user.fname + '", "' + user.lname + '", "' + user.email + '", "' + user.password + '")';
	connection.query(sql, function(err, res) {
		if (err) {
			console.log("ERROR: " + err);
			//throw err;
			callback(err, null);
		}
		callback(null, user.fname);
	});

	connection.end();
}

User.prototype.checkUserExist = function(email, callback) {
	connection.connect();

	var sql = 'SELECT COUNT(email) FROM user_entity WHERE email = "' + email + '"';
	connection.query(sql, function(err, user){
		if (err) {
			console.log("log err");
			callback(err, null);
		}
		callback(null, user);
	});
} 






