// 02 函数引用

// node.js Web 服务
var http = require('http');
var otherfun = require('./models/modeFun.js');

// 创建一个web服务        上传       接收
http.createServer(function (request, response) {
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'}); // 请求头
    if(request.url!=="/favicon.ico") {  //清除第2此访问
        console.log('访问'); // 控制台输出
        // 调用本地函数
        //fun1(response);

        // 调用外地函数
        funName = 'fun3';
        otherfun.fun2(response);
        otherfun[funName](response);

        response.end(''); // 输出协议尾 不写则没有http协议尾,但写了会产生两次访问
    }
}).listen(8000); // 监听8000 端口
console.log('Server  running  at  http://127.0.0.1:8000/');

function fun1(res) {
    res.write('hello me fun1');
}