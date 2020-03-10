// 访问同一个路由但被转发到不同的服务
router.get("/thenSamePath", async(ctx) => {
    if(ctx.request.header['x-host'] === 'haha.op'){
        ctx.body = '哈哈哈'
    }else{
        ctx.body = '不同的服务'
    }
})
