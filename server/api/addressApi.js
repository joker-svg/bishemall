const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

const DBHelper = require('../utils/DBHelper');
const sql = require('../sqlMap');

//搜索省份
router.post('/selectAddress', (req, res) => {
    let sqlStr = sql.address.select_sheng;
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

//搜索对应城市、县区、乡镇
router.post('/Address', (req, res) => {
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