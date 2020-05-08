const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const DBHelper = require('../utils/DBHelper');
const sql = require('../sqlMap');

//添加订单
router.post('/insertUserInfo', (req, res) => {
    let sqlStr = sql.userInfo.addUserInfo;
    let params = req.body;
    let conn = new DBHelper().getConn();

    //批量插入数据，要转换成[][]这样的格式
    conn.query(sqlStr,
        [
            params.name,
            params.username,
            params.sex,
            params.birthday,
            params.nation,
            params.constellation,
            params.record,
            params.trade,
            params.address],(err, result) => {
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
router.post('/updateUserInfo', (req, res) => {
    let sqlStr = sql.userInfo.updateUserInfo;
    let params = req.body;

    let conn = new DBHelper().getConn();

    //批量更新数据，要转换成[][]这样的格式
    conn.query(sqlStr,
        [
            params.name,
            params.sex,
            params.birthday,
            params.nation,
            params.constellation,
            params.record,
            params.trade,
            params.address,
            params.username
        ],(err, result) => {
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

//查询
router.post('/selectUserInfo', (req, res) => {
    let sqlStr = sql.userInfo.selectInfo;
    let params = req.body;
    let conn = new DBHelper().getConn();

    //批量更新数据，要转换成[][]这样的格式
    conn.query(sqlStr, [params.username],(err, result) => {
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