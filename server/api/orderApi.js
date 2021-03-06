const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

const DBHelper = require('../utils/DBHelper');
const sql = require('../sqlMap');

//加入购物车
router.post('/insertOrder', (req, res) => {
    let sqlStr = sql.order.insertOrder;
    let params = req.body;
    let conn = new DBHelper().getConn();

    conn.query(sqlStr,
        [parseInt(params.orderId),params.username,params.orderName,params.orderDescript,params.orderUrl,
                params.orderPrice,params.orderCount,params.orderSpec,
                params.orderColor,params.orderAddress],
        (err, result) => {

        if (err) {
            res.json(err);
        } else {
            res.json(result)
        }
    });
    conn.end();
});

//查询购物车商品
router.post('/selectCart', (req, res) => {
    let sqlStr = sql.order.selectCart;
    let params = req.body;
    let conn = new DBHelper().getConn();
    //console.log(params.username);
    conn.query(sqlStr, [params.username], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result)
        }
    });
    conn.end();
});

//删除购物车商品
router.post('/deleteCart', (req, res) => {
    let sqlStr = sql.order.deleteCart;
    let params = req.body;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, [params.orderId], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result)
        }
    });
    conn.end();
});

//删除购物车全部商品
router.post('/deleteAllCart', (req, res) => {
    let sqlStr = sql.order.deleteAllCart;
    let params = req.body;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, [params.orderId], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
    conn.end();
});
module.exports = router;