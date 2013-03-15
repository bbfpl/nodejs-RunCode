exports.reg = function(req, res){
  res.render('reg', { title: '注册页面' });
};
exports.doReg=function(req,res){ 
  console.log(req.query.id);
  console.log(req.body.name);
  console.log(req.body.password);
}