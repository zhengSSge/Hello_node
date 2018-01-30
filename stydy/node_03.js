// 03 模块引入  / 类似 java类继承

// node.js Web 服务
var http = require('http');
var Teacher = require('./models/Teacher');

// 创建一个web服务        上传       接收
http.createServer(function (request, response) {
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'}); // 请求头
    if(request.url!=="/favicon.ico") {  //清除第2此访问
        console.log('访问'); // 控制台输出

        teacher = new Teacher(213,'zw',20);
        // 继承
        teacher.enter();
        teacher.teach(response);


        response.end(''); // 输出协议尾 不写则没有http协议尾,但写了会产生两次访问
    }
}).listen(8000); // 监听8000 端口
console.log('服务已开起 嘟嘟嘟```');

