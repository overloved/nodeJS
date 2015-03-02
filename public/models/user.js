var connection = require('../includes/server.js');

exports.getUserName = function(callback) {
    var sql = 'select name from test';
    connection.executeQuery(sql, function(name) {
    	console.log("Return from server.js = "  + name);
    	callback(name);
    });
    
}