const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')

// error handler
onerror(app)

// middlewares 中间件
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))//静态文件

app.use(views(__dirname + '/views', { //视图服务端模板渲染
  extension: 'pug'
}))


//中间件执行顺序
app.use(async (ctx, next) => {
  console.log('1')
  await next()
  console.log('1-1')
  
})
app.use(async (ctx, next) => {
  console.log('2')
  await next()
  console.log('2-1')
})
app.use(async (ctx, next) => {
  console.log('3')
  await next()
  console.log('3-1')
})



// logger 计算时间
app.use(async (ctx, next) => {
  const start = new Date()
  console.log('logger-start:',start)
  await next()
  const ms = new Date() - start
  console.log('logger-ms:',`${ctx.method} ${ctx.url} - ${ms}ms`)
  // console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
