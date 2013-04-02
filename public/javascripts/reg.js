define(function(require,exports,module){
	var $ = require('jquery');
		require('easing');
		require('notice');
		
	var _sRegBtn=$('#reg_btn'),
		_sUserName_reg=$('#reg_username'),
		_sPwd_reg=$('#reg_password'),
		_sPwdT_reg=$('#reg_password_t'); 
		
	_sRegBtn.bind('click',function(){
		var sUserRegVal=_sUserName_reg.val();
		var sPwdRegVal=_sPwd_reg.val();
		var sPwdT=_sPwdT_reg.val();
		if(!sUserRegVal){jQnotice('用户名不能为空');return false;}
		if(!sPwdRegVal){jQnotice('密码不能为空');return false;}
		if(!sPwdT){jQnotice('请再次输入密码');return false;}
		if(sPwdRegVal != sPwdT){jQnotice('两次密码不一样');return false;}
			jQnotice('开发中......');
		 $.post("/doReg",{"username":sUserRegVal,"password":sPwdRegVal},
			function(data){
				if(data.success==1){ 
					jQnotice('注册成功');
					window.location.href="/";
				}else{
					jQnotice('注册失败');
				}
			});
		 	return false;
	});
});