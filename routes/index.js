const Router = require('koa-router')

const router = require('koa-router')()

// const router = Router({
//     perfix: '/user'
// })

router.get('/', async(ctx, next) => {
    await ctx.render('index', {
        title: '用户首页'
    })
})

router.get('/string', async(ctx, next) => {
    ctx.body = 'koa2 string'
})

router.get('/json', async(ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

module.exports = router