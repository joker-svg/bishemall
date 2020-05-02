// sql语句
var sqlMap = {
    user: {
        // 添加用户
        add: 'insert into user(username, password,phone,email) values (?, ?,?,?)',
        // 查询用户
        select: 'select * from user',
        isUser:'select * from user where username= ? and password= ?',
    },
    address:{
        //查找所有省份
        select_sheng:'select * from address where level = 1',
        //查找省份对应城市、县区、乡镇
        select:'select * from address where upid = ?',
    },
    goods:{
        //查询特惠特价商品
        selectDiscount:'select product_info.product_id,' +
                            'product_info.product_name,' +
                            'product_info.product_descript,' +
                            'product_picinfo.pic_url,' +
                            'product_spec.spec_price,' +
                            'product_spec.spec_dis_price ' +
                        'from product_info,product_picinfo,product_spec ' +
                        'where product_info.product_id = product_picinfo.product_id and ' +
                                'product_info.product_id = product_spec.product_id and ' +
                                'product_spec.spec_master = 1 and ' +
                                'product_picinfo.is_master = 1 and ' +
                                'product_info.product_kinds_id = 1',
        //根据商品id查询对应商品
        selectProduct:'select * from product_info  where product_id = ?',
        //查询商品对应颜色
        selectProductColor:'select * from product_color where product_id = ?',
        //查询商品图片
        selectProductImage:'select * from product_picinfo where product_id = ?',
        //查询商品规格
        selectProductSpec:'select * from product_spec where product_id = ?'

    },
    order:{
        insertOrder:'INSERT INTO `order`(product_id,username,order_name,order_url,order_price,order_count,order_spec,order_color,order_address) values (?,?,?,?,?,?,?,?,?)'
    }
};

module.exports = sqlMap;