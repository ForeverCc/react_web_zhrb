var koa = require('koa');
var router = require('koa-router')();
var app = koa();
// 新闻数据
var news = require('./json.js');
router.get('/api/news', function *(next) {

    this.body = news;

})

// 开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(8888);
