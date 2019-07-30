
let http = require('http');
let path = require('path');
let fs = require('fs')
let colors = require('colors');
let Koa = require('koa');
let Router = require('koa-router');

// mock 数据加载
let JsonData = require('./template/mock_test')


let App = new Koa();
let router = new Router();
let BigRouter = new Router();


const config = {
    prot: 6688,
    // www: './mock',
    // count: 1,
    // tureUrl: function (e) {
    //     return this.www + e;
    // }
}

router.get('/', async(ctx)=>{
    ctx.body = '<h1>halo,现在你处于 mock_server 服务下!</h1>'
})

router.get('/mock_test', async(ctx)=>{
    if(JsonData){
        ctx.body = JsonData;
        console.log(colors.green(JsonData))

    }else{
        console.log(colors.red('ERROR! 没有数据'))
    }
})



BigRouter.use('/', router.routes(), router.allowedMethods());



App.use(BigRouter.routes()).use(BigRouter.allowedMethods());

App.listen(config.prot)

// http.createServer(function (req, res) {
//     res.writeHeader(200, {
//         'content-type': 'text/html;charset="utf-8"',
//         'access-control-allow-origin': '*'
//     });
//     res.end(JSON.stringify(JsonData));
// }).listen(config.prot);

console.log(colors.white("点击 http://127.0.0.1:6688/ 访问数据"));
