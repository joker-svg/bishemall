const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const DBHelper = require('../utils/DBHelper');
const sql = require('../sqlMap');

//添加订单
router.post('/insertOrderCart', (req, res) => {
    let sqlStr = sql.orderCart.insertCart;
    let params = req.body;
    let conn = new DBHelper().getConn();
    let count = params.length;
    let arr= new Array();
    //let arr[count][10];
    //console.log(count);
    //console.log(arr);
    // console.log(params);
    for(let i=0;i<count;i++){
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

//更新订单--付款
router.post('/updateOrderCart', (req, res) => {
    let model_sqlStr = sql.orderCart.updatePayCart;
    let sqlStr = '';
    let params = req.body;
    // 拼接sql语句
    params.forEach((item, index)=>{
        sqlStr += mysql.format(model_sqlStr, item) + ';'
    });

    let conn = new DBHelper().getConn();
    //console.log(sqlStr);

    //批量更新数据，要转换成[][]这样的格式
    conn.query(sqlStr, [params],(err, result) => {
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

//查询全部订单
router.post('/selectOrderCart', (req, res) => {
    let sqlStr = sql.orderCart.selectCart;
    let params = req.body;

    let conn = new DBHelper().getConn();
    //console.log(sqlStr);

    //批量更新数据，要转换成[][]这样的格式
    conn.query(sqlStr, [params],(err, result) => {
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

//查询代付款订单
router.post('/selectPayCart', (req, res) => {
    let sqlStr = sql.orderCart.selectPay;
    let params = req.body;

    let conn = new DBHelper().getConn();
    //console.log(sqlStr);

    //批量更新数据，要转换成[][]这样的格式
    conn.query(sqlStr, [params.id],(err, result) => {
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

//查询待发货订单
router.post('/selectDelivery', (req, res) => {
    let sqlStr = sql.orderCart.selectDelivery;
    let params = req.body;

    let conn = new DBHelper().getConn();
    //console.log(sqlStr);

    //批量更新数据，要转换成[][]这样的格式
    conn.query(sqlStr, [params.id],(err, result) => {
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

//查询待收货订单
router.post('/selectReceive', (req, res) => {
    let sqlStr = sql.orderCart.selectReceive;
    let params = req.body;

    let conn = new DBHelper().getConn();
    //console.log(sqlStr);

    //批量更新数据，要转换成[][]这样的格式
    conn.query(sqlStr, [params.id],(err, result) => {
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

//删除订单
router.post('/deleteCart', (req, res) => {
    let sqlStr = sql.orderCart.deleteCart;
    let params = req.body;

    let conn = new DBHelper().getConn();
    //console.log(sqlStr);

    //批量更新数据，要转换成[][]这样的格式
    conn.query(sqlStr, [params.id],(err, result) => {
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

module.exports = router;