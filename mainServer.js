const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');
http.createServer((req,res)=>{
    //GET
    var obj = urllib.parse(req.url,true);
    var url = obj.pathname;
    const GET = obj.query;
    //POST
    var str = ''; // 定义了一个str变量,用于暂存请求体的信息
    // 通过req的data事件监听函数,每当接受到请求体的数据,就累加到str变量中
    //每当data事件发生一次时说明有一段数据到达了,（发生很多次）
    req.on('data',function (chunk) {
        str += chunk;
    });
    //当end事件发生时说明数据全部到达,（只发生一次）
    req.on('end',function () {
        const POST = querystring.parse(str);
    });
    //文件请求
    var fileName = './www'+ url;
    fs.readFile(fileName,(err,data)=>{
        if(err){
            res.write('404');
        }else{
            res.write(data);
        }
        res.end();
    });
}).listen(3002);
