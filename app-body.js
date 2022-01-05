const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = Router({
    prefix: '/user'
})

router.get('/', async(ctx) => {
    ctx.body = '用户首页'
})

router.get('/del', async(ctx) => {
    let { id } = ctx.require.query
    console.log('del:', id)
    ctx.body = '删除用户'
})

router.post('/add', async(ctx) => {
    ctx.body = '添加用户'
})

app.use(router.routes())

app.listen(3000)
module.exports = app