// node后端服务器
const http = require('http');

const bodyParser = require('body-parser');
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const express = require('express');

const userApi = require('./api/userApi');
const addressApi = require('./api/addressApi');
const goodsApi = require('./api/goodsApi');
const orderApi = require('./api/orderApi');

let app = express();
let server = http.createServer(app);

//post请求中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//jwt中间件
app.use(expressJwt({
    secret:"secret" //加密秘钥
}).unless({
    path:["/api/user/isUser",
            "/api/user/addUser",
            "/api/address/selectAddress",
            "/api/address/Address",
            "/api/goods/selectProduct",
            "/api/goods/selectDiscountGoods",
            "/api/order/insertOrder"]
}));

// 未携带token请求接口会出错，触发这个
app.use(function(err, req, res, next) {
    if (err.name === "UnauthorizedError") {
        res.status(401).send(err);
    }
});

// 后端api路由
app.use('/api/user', userApi);
app.use('/api/address', addressApi);
app.use('/api/goods', goodsApi);
app.use('/api/order', orderApi);

// 启动监听
server.listen(8888, () => {
    console.log(' success!! port:8888');
});