$(function(){
	var $login_btn=$('.login_btn'),
		$sUsername=$("#login_username"),
		$sPwd=$("#login_password"),
		$sRegBtn=$('#reg_btn'),
		$sUsername_reg=$('#reg_username'),
		$sPwd_reg=$('#reg_password'),
		$sPwdT_reg=$('#reg_password_t');
 
	$sRegBtn.bind('click',function(){
		 $.post("/doReg",
		 	 {"username":$sUsername_reg.val(),"password":$sPwd_reg.val()},
			function(data){
				if(data.success==1){ 
					alert(1);
				}else{
				alert(0);
				}
			});
		 	return false;
	});
	$login_btn.bind('click',function(){ 
		 $.post("/doLogin",
		 	 {"username":$sUsername.val(),"password":$sPwd.val()},
			function(data){
				if(data.success==1){
				LoginSu();
				}else{
				jQnotice('登录失败!');
				}
			});
		 	return false;
	});
	function LoginSu(){
		var $body=$('body');
			$wrap=$('#wrap'),
			$w_h1=$wrap.find('h1'),
			$w_login=$wrap.find('.login');
		var $main_con=$wrap.append('<div id="code_container"></div>');
		$.ajax({
			url:'/code',
			dataType:'html',
			context: document.body, 
			success:function(data){ 
				var $code_container=$('#code_container');
				$code_container.append(data);
				$w_h1.animate({top:0, opacity:0},600,function(){$(this).remove();});
				$w_login.animate({top:460, opacity:0},600,function(){$(this).remove();});
				$('.bg_ui').animate({opacity:0},1000,function(){$(this).remove();});
				$body.addClass('Theme');
				$code_container.find('#header').animate({top:[0,'easeOutBounce']},2000,'swing');
				$code_container.find('#explorer').animate({left:[0,'easeOutBounce']},2000,'swing');
				$code=$code_container.find('#code_show').animate({opacity:1,left:[0,'easeOutBounce'],top:[0,'easeOutBounce']},2000,'swing');
				$code_container.css({"z-index":10});
				var h=$('#code_show').height();
				$('.html_code,.run_code').css({height:h});
			}
		});

	};
});