const Koa = require('koa')
    // const Router = require('koa-router')
const bodyparser = require('koa-bodyparser')
const jsonerror = require('koa-json-error')
const parameter = require('koa-parameter') //请求参数校验
const app = new Koa()

//引入路由中间件
const users = require('./app-crud-controllers/user')
    // const router = Router({
    //     prefix: '/user'
    // })


//自定义错误处理中间件
// app.use(async(ctx, next) => {
//     try { //捕获不了500 404
//         await next()
//     } catch (err) {
//         console.log('err:', err, err.status, err.statusCode)
//         ctx.status = err.status || err.statusCode || 500
//         ctx.body = {
//             message: err.message
//         }
//     }
// })

app.use(jsonerror())

app.use(bodyparser())

app.use(parameter(app)) //请求参数校验 全局

// app.use(router.routes())//引入路由中间件
app.use(users.routes(), users.allowedMethods())

app.listen(3001)