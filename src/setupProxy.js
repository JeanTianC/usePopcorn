const { createProxyMiddleware } = require('http-proxy-middleware');
 
module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {   // 匹配所有带'/api'的接口地址进行代理转发
            target: 'http://localhost:3000/',  // 代理地址
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''  // 将请求地址中的'/api'重写为空再请求接口（也就是去掉/api）
            }
        })
    )
}