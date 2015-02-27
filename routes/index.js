var express = require('express');
var connection = require('../public/includes/server.js');
var router = express.Router();

function getUserName() {
    var sql = 'select name from test';
    connection.executeQuery(sql, function(name) {
    	console.log("Return from connection = "  + name);
    	return name;
    });
    
}
var name = getUserName();
console.log(name);

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index', { name: name });
});

module.exports = router;
