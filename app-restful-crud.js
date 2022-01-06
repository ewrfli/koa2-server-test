const Koa = require('koa')
    // const Router = require('koa-router')
const bodyparser = require('koa-bodyparser')
const jsonerror = require('koa-json-error')
const app = new Koa()

const users = require('./app-crud-controllers/user')
    // const router = Router({
    //     prefix: '/user'
    // })

// let userList = [{ username: 'xm', pwd: '123' }]

// router.get('/', async(ctx) => {
//     // ctx.body = '<h1>用户首页</h1>'
//     ctx.set("Allow", "GET, POST") //响应头

//     //模拟500错误
//     console.log(p.a)

//     ctx.status = 301 //设置状态码
//     ctx.body = { //发送json
//         code: 201,
//         msg: '请求首页的信息',
//         data: userList
//     }
// })

// router.delete('/del', async(ctx) => { //get//localhost:3001/user/del?id=1
//     // let { id } = ctx.require.query
//     // let { id } = ctx.query
//     // console.log('del:', id)
//     // ctx.body = '删除用户'

//     let { id } = ctx.request.body
//     userList.splice(Number(id), 1)
//     ctx.body = {
//         code: 200,
//         msg: '删除成功'
//     }
// })

// router.post('/add', async(ctx) => { //localhost:3001/user/add json{username:}
//     let { username, pwd } = ctx.request.body
//     userList.push({
//         username,
//         pwd
//     })
//     console.log(userList)
//     ctx.body = {
//         code: 200,
//         msg: '添加成功',
//         data: userList
//     }
// })


// router.get('/find/:id', async(ctx) => { //localhost:3001/user/find/1
//     let id = ctx.params.id
//     console.log(id)

//     if (Number(id) > (userList.length - 1)) {
//         ctx.throw(412, '先决条件失败') //错误处理
//     }

//     ctx.body = {
//         code: 200,
//         msg: '查询成功',
//         user: userList[Number(id)]

//     }
// })


// router.put('/update', async(ctx) => {
//     let user = ctx.request.body
//     userList.splice(Number(user.id), 1, {
//         username: user.username,
//         pwd: user.pwd
//     })
//     ctx.body = {
//         code: 200,
//         msg: '修改成功',
//         data: userList
//     }
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
    // app.use(router.routes())
app.use(users.routes(), users.allowedMethods())

app.listen(3001)