
// let http = require('http');
// let path = require('path');
// let fs = require('fs')
let colors = require('colors');
let Koa = require('koa');
let Router = require('koa-router');
let cors = require('koa2-cors')

let { config } = require('./config/http.config')

let App = new Koa();
let router = new Router();

// mock 路由
let mng_router  = require('./mock.router/sdyx-open/mng/router.js')
let test_router = require('./mock.router/test_router/mock_router.js')


router.get('/', async(ctx)=>{
    ctx.body = '<h4> halo, 现在你处于 mock_server 服务下! </h4>'
})

App.use(cors({
    origin: '*',
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'], //设置允许的HTTP请求类型
}));

// 加载不同的路由
App.use(router.routes())
App.use(mng_router.routes())
App.use(test_router.routes())

App.listen(config.prot)

console.log(colors.white(`点击 ${colors.blue('http://127.0.0.1:6688/')} 访问数据`));
