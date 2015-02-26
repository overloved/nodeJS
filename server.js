// BASE SETUP
// =============================================================================

var express = require('express'),
	bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());

var env = app.get('env') == 'development' ? 'dev' : app.get('env');
var port = process.env.PORT || 3000;

// db config
var env = "dev";
var config = require('./config.json')[env];
var password = config.password ? config.password : null;

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : config.host,
  user     : config.user,
  password : config.password,
  database : config.database
});
