$(function(){
	var $login_btn=$('.login_btn'),
		$sUsername=$("#login_username"),
		$sPwd=$("#login_password"),
		$sRegBtn=$('#reg_btn'),
		$sUsername_reg=$('#reg_username'),
		$sPwd_reg=$('#reg_password'),
		$sPwdT_reg=$('#reg_password_t');
 
	$sRegBtn.bind('click',function(){
		var sUserRegVal=$sUsername_reg.val();
		var sPwdRegVal=$sPwd_reg.val();
		var sPwdT=$sPwdT_reg.val();
		if(!sUserRegVal){jQnotice('用户名不能为空');return false;}
		if(!sPwdRegVal){jQnotice('密码不能为空');return false;}
		if(!sPwdT){jQnotice('请再次输入密码');return false;}
		if(sPwdRegVal != sPwdT){jQnotice('两次密码不一样');return false;}
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
	$login_btn.bind('click',function(){ 
		var sUserVal=$sUsername.val();
		var sPwdVal=$sPwd.val();
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
	
	fCode();
	function fCode(){
		var	$code_container=$('.main_container');   
		$code_container.find('#header').animate({top:[0,'easeOutBounce']},2000,'swing');
		$code_container.find('#explorer').animate({left:[0,'easeOutBounce']},2000,'swing');
		$code=$code_container.find('#code_show').animate({opacity:1,left:[230,'easeOutBounce'],top:[60,'easeOutBounce']},2000,'swing');
		$code_container.css({"z-index":10});
		var iWinHei=$(window).height() 
		var _h=iWinHei-60;
		$('.CodeMirror,.handler_vertical,#preview').css({height:_h});
		var $stoolBar=$('ul.toolBar');
		var $too_li=$stoolBar.find(' > li'); 
		$too_li.each(function(){
			var _t=$(this); 
			var $too_ul=_t.find(' > ul');
			_t.hover(function(){
				$too_ul.show();
			},function(){
				$too_ul.hide();
			});
		});
		$('.login_out').hover(function(){
			$(this).addClass('btn-danger');
		},function(){
			$(this).removeClass('btn-danger');
		});
	};
});