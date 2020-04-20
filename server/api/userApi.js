const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

const DBHelper = require('../utils/DBHelper');
const sql = require('../sqlMap');

// 用户注册
router.post('/addUser',(req,res) => {
    let sqlStr = sql.user.add;
    let params = req.body;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr,
        [params.username,params.password,params.phone,params.email],
        (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result)
        }
    });
    conn.end();
});

// 查询用户
router.post('/selectUser', (req, res) => {
    let sqlStr = sql.user.select;
    let params = req.body;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, [params.username], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result)
        }
    });
    conn.end();
});

//用户登录
router.post('/isUser',(req,res) => {
    let sqlStr = sql.user.isUser;
    let params = req.body;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr,[params.username,params.password],(err,result) => {
        if (err) {
            res.json(err);
        } else {
            const secret = 'salt';
            const token = jwt.sign({
                username:result[0].username,
                password:result[0].password,
                // phone:result[0].phone,
                // email:result[0].email
            }, secret, {
                expiresIn:  60 //秒到期时间
            });
            res.json({
                token:token,
                result:result[0]
            })
        }
    });

    conn.end();
});

module.exports = router;