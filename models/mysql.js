var mq = require("mysql");
var mc = mq.createConnection({
    user: "root",
    password: "root"
});
mc.connect();

mc.query("use nodejs_bbfpl");
mc.query("select * from users", function(err, rs, fields){
    //��������
    console.log('The solution is: ',rs[0]);
});

connection.end();