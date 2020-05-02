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
        [parseInt(params.orderId),params.username,params.orderName,params.orderUrl,
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

//删除购物车商品
router.post('/deleteOrder', (req, res) => {
    let sqlStr = sql.address.select;
    let params = req.body;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, [params.upid], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result)
        }
    });
    conn.end();
});

//删除购物车全部商品
router.post('/deleteAllOrder', (req, res) => {
    let sqlStr = sql.address.select;
    let params = req.body;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, [params.upid], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result)
        }
    });
    conn.end();
});
module.exports = router;