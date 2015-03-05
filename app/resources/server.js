/*******************************************************/ 
/********************   DB Config    *******************/

var env = "dev";
var config = require('./config.json')[env];
var password = config.password ? config.password : null;

var mysql = require('mysql');

exports.dbConnect = function() {
	var connection = mysql.createConnection({
	  	host     : config.host,
	  	user     : config.user,
	  	password : config.password,
	  	database : config.database
	});
	return connection;
}

