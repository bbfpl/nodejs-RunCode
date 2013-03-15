module.exports=function(app){
	//注册页面
	app.get('/regs',checkLogin);
	app.get('/regs',function(req,res){ 
		res.render('regs',{title:"注册页面"});
	});
	//编码页面
	app.get('/code',checkNotLogin);
	app.get('/code',function(req,res){ 
	 	res.render('code',{title:"code页面"});
	});
	//首页
	app.get('/',checkLogin);
	app.get('/',function(req,res){   
	 	 res.render('index', { title: 'Run Code' }); 
	});
	//DoReg
	app.post('/doReg',function(req,res){
		var conn=app.mysql();
		var userName=req.body.username,
			userPassword=req.body.password;
		var sql='INSERT INTO users (user,password) values('+userName+','+userPassword+')';
		conn.query(sql,function(err,rows,fields){
			if(err) throw err;
			if(rows==false){
				res.json({success:0});
			}else{
				res.json({success:1});
			}
		});
	});
	//DoLogin
	app.post('/doLogin',function(req,res){
		var conn=app.mysql();
		var sess=req.session;
		var userName=req.body.username,
			userPassword=req.body.password;
		var query ='select * from users where user='+userName+' and password='+userPassword;
		conn.query(query,function(err,rows,fields){
			//res.send(rows==false);
			if(err) throw err;
			if(rows==false){  
				res.json({success:0,msg:'用户名或密码错误!'}); //res.send('登录失败');
			}else{ 
				req.session.username = userName;  
				res.json({success:1});   //res.send('登录成功');
			}
			console.log(rows); 
			//res.json(rows); 
			conn.end();
		});
	});
	//退出
	app.get('/loginOut',function(req,res){
	    req.session.username = null; 
	    res.redirect('/');
	});
	app.get('/users',checkNotLogin);
	app.get('/users',function(req,res){
		/*
		var conn=app.mysql();
		var query ='select * from users';
		conn.query(query,function(err,rows,fields){
			if(err) throw err;
			console.log(rows); 
			//res.json(rows);
			res.send(rows);
			conn.end();
		});
		*/ 
		if(req.session){
			res.send('user1:'+req.session.username);
		}else{
			res.send('user2:'+req.session.username);
		}
		console.log('session:'+req.session.username);
		 
});
	//判断 未登录  
	function checkNotLogin(req,res,next){
	 	if(!req.session.username){
	 		res.json({msg:'未登录'});
	 		return res.redirect('/');
		}
		next();
	};
	//判断 以登录   
	function checkLogin(req,res,next){
		if(req.session.username){
	 		res.json({msg:'以登录'});
	 		return res.redirect('/code');
		}
		next();
	};

};