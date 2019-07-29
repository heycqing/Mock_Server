
let http = require('http');
let path = require('path');
let fs = require('fs')
let colors = require('colors');
let JsonData = require('./template/mock_test')


const config = {
    prot: 6688,
    // www: './mock',
    // count: 1,
    // tureUrl: function (e) {
    //     return this.www + e;
    // }
}

http.createServer(function (req, res) {
    res.writeHeader(200, {
        'content-type': 'text/html;charset="utf-8"',
        'access-control-allow-origin': '*'
    });
    res.end(JSON.stringify(JsonData));
}).listen(config.prot);

console.log(colors.white("点击 http://127.0.0.1:6688/ 访问数据"));
