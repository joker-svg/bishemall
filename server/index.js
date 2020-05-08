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
const payCartApi = require('./api/payCartApi');
const userInfoApi = require('./api/userInfoApi');

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

            "/api/order/selectCart",
            "/api/order/deleteCart",
            "/api/order/deleteAllCart",
            "/api/order/insertOrder",

            "/api/pay/updateOrderCart",
            "/api/pay/selectOrderCart",
            "/api/pay/selectPayCart",
            "/api/pay/selectDelivery",
            "/api/pay/selectReceive",
            "/api/pay/deleteCart",
            "/api/pay/insertOrderCart",

            "/api/userInfo/insertUserInfo",
            "/api/userInfo/updateUserInfo",
            "/api/userInfo/selectUserInfo"]
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
app.use('/api/pay',payCartApi);
app.use('/api/userInfo',userInfoApi);

// 启动监听
server.listen(8888, () => {
    console.log(' success!! port:8888');
});