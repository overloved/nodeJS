/*******************************************************/ 
/********************   DB Config    *******************/

var env = "dev";
var config = require('./config.json')[env];
var password = config.password ? config.password : null;

var mysql = require('mysql');

module.exports = {
	executeQuery: function(query, callback) {
		var connection = mysql.createConnection({
		  	host     : config.host,
		  	user     : config.user,
		  	password : config.password,
		  	database : config.database
		});
		connection.connect();

		connection.query(query, function(err, rows, fields) {
		  	if (err) throw err;
            connection.end();
            console.log("Here in DAO: " + rows[0].name);
            callback(rows[0].name);	    
		});
	}
};
