module.exports=function(app,mysql,express,path){
	var config = this;
	app.configure(function(){
	  app.set('port', process.env.PORT || 3000);//port:�˿����ã�����ʹ�õ��ǻ����Ķ˿ڣ�����3000�˿ڣ�
	  app.set('views', __dirname + '/views');//view:��ͼ��ŵ�Ŀ¼��
	  app.engine('html',require('ejs').__express);//�޸�ģ������Ϊejs  
	  app.set('view engine', 'html');//�޸ĺ�׺Ϊhtml
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