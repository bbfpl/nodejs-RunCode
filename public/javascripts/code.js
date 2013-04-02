define(function(require,exports,module){
	var $ = require('jquery');
		require('easing');
		require('notice');
		require('c_codemirror');
		require('c_xml');
		require('c_javascript');
		require('c_css');
		require('c_htmlmixed');
		
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
	
	
	
var delay;
      // Initialize CodeMirror editor with a nice html5 canvas demo.
      var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
        mode: 'text/html',
        lineNumbers: true,
        tabMode: 'indent'
      });
      editor.on("change", function() {
        clearTimeout(delay);
        delay = setTimeout(updatePreview, 300);
      });
      editor.setOption("theme", "ambiance");
      function updatePreview() {
        var previewFrame = document.getElementById('preview');
        var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
        preview.open();
        preview.write(editor.getValue());
        preview.close();
      }
      setTimeout(updatePreview, 300);
});