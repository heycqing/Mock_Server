let mng_Router = require('koa-router');
let mng_router = new mng_Router();
// 开放平台的数据模拟
let openMockData = require('../../../mock.data/sdyx-open/mng/index')

// 运营商

// 获取城市列表
mng_router.get('/api/operator-film/city-list', async(ctx) => {
    ctx.body = JSON.stringify(openMockData.mock_city)
})

// 指定城市下影院列表
mng_router.get("/api/operator-film/cinema-list", async(ctx) => {
    ctx.body = JSON.stringify(openMockData.mock_get_movie_by_city)
})

// 修改价格返回内容
mng_router.get("/api/operator-film/set-rule-by-cinemaids", async(ctx) => {
    ctx.body = JSON.stringify(openMockData.success_res)
})

// 定座票影院列表获取
mng_router.get("/api/operator-film/seat-cinema-rule-list", async(ctx) => {
    ctx.body = JSON.stringify(openMockData.mock_movieList)
})

// 影院上下线
mng_router.get("/api/operator-film/edit-cinema-status", async(ctx) => {
    ctx.body = JSON.stringify(openMockData.success_res)
})

// 查询价格规则详情
mng_router.get("/api/operator-film/sale-price-rule", async(ctx) => {
    ctx.body = JSON.stringify(openMockData.success_rule_res)
})

// 影院信息
mng_router.get("/api/film/cinema-info", async(ctx) => {
    ctx.body = JSON.stringify(openMockData.mock_cinema_infp)
})

// 影院排期
mng_router.get("/api/operator-film/get-cinema-schedule", async(ctx) => {
    ctx.body = JSON.stringify(openMockData.mock_movie_schedule)
})

// 电子票管理
mng_router.get("/api/operator-film/e-ticket-cinema-goods-list", async(ctx) => {
    ctx.body = JSON.stringify(openMockData.mock_eticket)
})

module.exports = mng_router