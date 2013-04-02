seajs.config({
	//设定别名
	alias:{
		'jquery':'plug-in/jquery-1.9.1.js',
		'easing':'/javascripts/plug-in/jquery.easing.1.3.js',
		'notice':'/javascripts/plug-in/jquery.notice.js',
		'c_codemirror':'/javascripts/code/lib/codemirror.js',
		'c_xml':'/javascripts/code/mode/xml/xml.js',
		'c_javascript':'/javascripts/code/mode/javascript/javascript.js',
		'c_css':'/javascripts/code/mode/css/css.js',
		'c_htmlmixed':'/javascripts/code/mode/htmlmixed/htmlmixed.js'
	},
  	plugins: ['shim'], 
	shim: {
		'jquery': {exports: 'jQuery'},
		'jquery-plugins':{
			match:/jquery\.[a-z].*\.js/,
			deps:['jquery']
		}
	},
			
	/*
	//路径配置
	paths:{
		'demo':'http://www.demo.com'
	},*/
	 
	/*
	//映射配置
	map:[
		 ['http://example.com/js/app/', 'http://localhost/js/app/']
		],*/
	debug: true,
	//指定需要的插件
	//plugins:['text'],
	charset:'utf-8'
});