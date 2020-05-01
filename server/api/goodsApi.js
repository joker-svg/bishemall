const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

const DBHelper = require('../utils/DBHelper');
const sql = require('../sqlMap');

//搜索特惠商品
router.post('/selectDiscountGoods', (req, res) => {
    let sqlStr = sql.goods.selectDiscount;
    let params = req.body;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, [params.product_id], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result)
        }
    });
    conn.end();
});

//搜索对应商品信息
router.post('/selectProduct', (req, res) => {
    let sqlStr1 = sql.goods.selectProduct;
    let sqlStr2 = sql.goods.selectProductImage;
    let sqlStr3 = sql.goods.selectProductSpec;
    let sqlStr4 = sql.goods.selectProductColor;

    let resPro = null;
    let proImg = null;
    let proSpec = null;
    let proColor = null;

    let params = req.body;
    let conn = new DBHelper().getConn();
    //查询商品
    conn.query(sqlStr1, [params.product_id], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            resPro = result;
            //查询商品图片
            var get_result = function(callback){
                let conn1 = new DBHelper().getConn();
                conn1.query(sqlStr2,[params.product_id],(err,result) => {
                    if(err){
                        res.json(err);
                    }else{
                        callback(result);
                    }
                });
                conn1.end();
            };

            get_result(function (data) {
                proImg=data;
                //查询商品规格
                var get_result1 = function(callback){
                    let conn1 = new DBHelper().getConn();
                    conn1.query(sqlStr3,[params.product_id],(err,result) => {
                        if(err){
                            res.json(err);
                        }else{
                            callback(result);
                        }
                    });
                    conn1.end();
                };

                get_result1(function (data) {
                    proSpec = data;
                    //查询商品颜色
                    var get_result2 = function(callback){
                        let conn1 = new DBHelper().getConn();
                        conn1.query(sqlStr4,[params.product_id],(err,result) => {
                            if(err){
                                res.json(err);
                            }else{
                                callback(result);
                            }
                        });
                        conn1.end();
                    };

                    get_result2(function (data) {
                        proColor = data;

                        res.json({
                            productInfo:resPro,
                            proImg:proImg,
                            proSpec:proSpec,
                            proColor:proColor
                        });
                    });
                });
            });

        }
    });
    conn.end();
});

module.exports = router;