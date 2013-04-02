define(function(require, exports, module){
	var $ = require('jquery');
		require('easing');
		require('notice');
	 
		var _LoginBtn=$('.login_btn'),
			_sUserName=$('#login_username'),
			_sPwd=$('#login_password'); 
		
		_LoginBtn.on('click',function(){
			var	sUserVal=_sUserName.val(),
				sPwdVal=_sPwd.val();
		
			if(!sUserVal){jQnotice('用户名不能为空');return false;}
			if(!sPwdVal){jQnotice('密码不能为空');return false;}
			 $.post("/doLogin",
			 	 {"username":sUserVal,"password":sPwdVal},
				function(data){
					if(data.success==1){
						window.location.href="/code";
					}else{
						jQnotice(data.msg);
					}
				});
			return false;
		});
 
});