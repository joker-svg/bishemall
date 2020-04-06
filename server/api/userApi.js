const express = require('express');
const router = express.Router();

const DBHelper = require('../utils/DBHelper');
const sql = require('../sqlMap');

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
            res.json(result)
        }
    });

    conn.end();
});

module.exports = router;