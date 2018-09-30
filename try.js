//导入http模块
const http=require("http");
通过http模块下的createServer()方法创建并返回一个web服务器对象
var server = http.createServer((req,res)=>{
    switch(req.url){
        case '/Try.html':
        res.write("the first html");
        break;
        case '/dufuyan.html':
        res.write("the second html");
        break;
        default:
            break;

    }
    res.end();
});
server.listen(3000);


//读文件,导入fs模块
const fs = require('fs');
fs.readFile('try.txt',(err,data)=>{
    if(err){
        console.log('出错了');
    }else{
        console.log(data.toString());
    }
});


//写文件,导入fs模块
const fs = require('fs');
fs.writeFile('try2.txt','hello Node',(err)=>{
    console.log(err);
});


//fs模块与http模块基本使用的结合
const http = require('http');
const fs = require('fs');
var server = http.createServer((req,res)=>{
    var fileName = './www'+ req.url;
    fs.readFile(fileName,(err,data)=>{
        if(err){
            res.write('404');
        }else{
            res.write(data);
        }
        res.end();
    })
});
server.listen(3000);




