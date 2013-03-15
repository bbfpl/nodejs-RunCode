module.exports=function(app,mysql,express,path){
	var config = this;
	app.configure(function(){
	  app.set('port', process.env.PORT || 3000);//port:端口设置，这里使用的是环境的端口，或则3000端口；
	  app.set('views', __dirname + '/views');//view:试图存放的目录；
	  app.engine('html',require('ejs').__express);//修改模板引擎为ejs  
	  app.set('view engine', 'html');//修改后缀为html
	  app.use(express.favicon());
	  app.use(express.logger('dev'));
	  app.use(express.bodyParser()); 
	  app.use(express.cookieParser());
	  app.use(express.session({secret:'bbfpl'}));
	  app.use(express.methodOverride());
	  app.use(app.router);
	  app.use(express.static(path.join(__dirname, 'public')));
	});
	app.configure('development', function(){
	  app.use(express.errorHandler());
	  app.mysql=function(){
	  	return mysql.createConnection({
	  		host:'127.0.0.1',
	  		user:'root',
	  		password:'root',
	  		database:'nodejs_bbfpl',
	  		port:3306 
	  	});
	  };
	}); 
	 
	return config;
};