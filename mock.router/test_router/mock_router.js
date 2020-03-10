let Router = require('koa-router');
let test_router = new Router();

let { result } = require('../../mock.data/test_data/mock_data')

test_router.get('/mock-test-data', ctx => {
    ctx.body = JSON.stringify(result)
})

module.exports = test_router