
var http = require('http');
var path = require('path');
var fs = require('fs')
var colors = require('colors');
var config = {
    prot: 6688,
    www: './mock',
    count: 1,
    tureUrl: function (e) {
        return this.www + e;
    }
}

http.createServer(function (req, res) {
    if (config.count) {
        console.log(colors.green("本地 mock server 已经启动!"));
        config.count--;
    }
    var file = config.tureUrl(req.url);
    // 当访问根目录的时候，检查是否是根目录，若是的话就进行处理
    // console.log(file)
    // if (file.indexOf('/')) {
    //     file = file + '/index.html'
    // }
    fs.readFile(file, function (err, data) {
        if (err) {
            console.log(colors.red(' \nYou get the wrong! read it please! \n'))
            console.log(err)
            res.writeHead(404, {
                'content-type': 'text/html;charset="utf-8" '
            });
            res.write('<h1>404错误，找不到页面</h1>');
            res.end();
        } else {
            res.writeHeader(200, {
                'content-type': 'text/html;charset="utf-8"'
            });
            res.write(data);
            res.end();
        }
    })
}).listen(config.prot);

console.log(colors.white("点击 http://127.0.0.1:6688/ 访问数据"));
