const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

const DBHelper = require('../utils/DBHelper');
const sql = require('../sqlMap');

//添加订单
router.post('/insertOrder', (req, res) => {
    let sqlStr = sql.orderCart.insertCart;
    let params = req.body;
    let conn = new DBHelper().getConn();
    let count = params.length;
    let arr= new Array();
    //let arr[count][10];
    console.log(count);
    console.log(arr);
    // console.log(params);
    for(var i=0;i<count;i++){
        arr[i] = new Array();

        arr[i][0] = params[i].product_id;
        arr[i][1] = params[i].username;
        arr[i][2] = params[i].order_name;
        arr[i][3] = params[i].order_descript;
        arr[i][4] = params[i].order_url;
        arr[i][5] = params[i].order_price;
        arr[i][6] = params[i].order_count;
        arr[i][7] = params[i].order_spec;
        arr[i][8] = params[i].order_color;
        arr[i][9] = params[i].order_address;
    }
    //批量插入数据，要转换成[][]这样的格式
    conn.query(sqlStr, [arr],(err, result) => {

            if (err) {
                res.json({
                    err:'插入错误'
                });
            } else {
                res.json(result)
            }
        });
    conn.end();
});

//查询购物车商品
router.post('/selectPayCart', (req, res) => {
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
router.post('/deletePayCart', (req, res) => {
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
router.post('/deleteAllPayCart', (req, res) => {
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