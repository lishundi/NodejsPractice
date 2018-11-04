var express=require('express');
var app=express();
var mysql=require('mysql');

var connection = mysql.createConnection({
    host  : 'localhost',
    user  : 'root',
    password : '12345678',
    database : 'login',
    charSet: 'UTF-8'
    // port:'3306'
});
connection.connect(function (err) {
    if(err)
        console.log("error");
    else
        console.log("success");
});
app.get('/',function (req,res) {
    res.sendFile(__dirname + "/" + "Register.html" );
})
/**
 * 实现注册功能
 */
app.get('/register',function (req,res) {
    var name=req.query.name;
    var pwd=req.query.pwd;
    console.log(name,pwd);
    var str = "INSERT INTO Login(uname,pwd) VALUES(?,?);";
    // var arr = ['123','123'];
    var arr = [name,pwd];
    connection.query(str,arr,function (err,rs) {
        if (err) throw err;
        console.log(rs);
        res.sendFile(__dirname + "/" + "Index.html" );
    })
})

/**
 * 实现登录验证功能
 */
// app.get('/Index.html',function (req,res) {
//     res.sendFile(__dirname+"/"+"Index.html");
// })

app.get('/login',function (req,res) {
    var name=req.query.name;
    var pwd=req.query.pwd;
    var selectSQL = "select uname,pwd from Login where uname="+name+" and pwd="+pwd+";";
    connection.query(selectSQL,function (err,rs) {
        if (err) throw err;
        // console.log(rs);
        console.log('OKghggjjjy');
    })
})

app.listen(7744);