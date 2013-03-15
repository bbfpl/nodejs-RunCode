
/**
 * Module dependencies.
 */

var express = require('express') 
	,mysql=require('mysql')
  , routes = require('./routes') 
  , user = require('./routes/user')
  , reg = require('./routes/reg')
  , http = require('http')
  , path = require('path');

//var app = express();
var app = module.exports = express.createServer();
var config = require('./config.js')(app,mysql,express,path);

require('./routes/index')(app);
//require('./routes/reg')(app);
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
