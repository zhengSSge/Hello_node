// 01 搭建服务

// node.js Web 服务
var http = require('http');
    // 创建一个web服务        上传       接收
http.createServer(function (request, response) {
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'}); // 请求头
    if(request.url!=="/favicon.ico") {  //清除第2此访问
        console.log('访问'); // 控制台输出
        response.write('hello,world'); // 输出协议头
        response.end('hell,世界'); // 输出协议尾 不写则没有http协议尾,但写了会产生两次访问
    }
}).listen(8000); // 监听8000 端口
console.log('Server  running  at  http://127.0.0.1:8000/');

/*
启动服务
cmd下执行：
node  node_01.js
浏览器访问：http://localhost:8000
*/