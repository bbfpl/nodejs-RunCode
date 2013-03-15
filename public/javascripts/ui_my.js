$(function(){
	var $login_btn=$('.login_btn'),
		$sUsername=$("#login_username"),
		$sPwd=$("#login_password"),
		$sRegBtn=$('#reg_btn'),
		$sUsername_reg=$('#reg_username'),
		$sPwd_reg=$('#reg_password'),
		$sPwdT_reg=$('#reg_password_t');
 
	$sRegBtn.bind('click',function(){
		 $.post("/doReg",{"username":$sUsername_reg.val(),"password":$sPwd_reg.val()},
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
	};
});