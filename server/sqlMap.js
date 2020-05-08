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
        insertOrder:'INSERT INTO `order`(product_id,username,order_name,order_descript,order_url,order_price,order_count,order_spec,order_color,order_address) values (?,?,?,?,?,?,?,?,?,?)',

        //查询购物车商品
        selectCart:'SELECT * from `order` where username = ?' ,

        //删除购物车商品
        deleteCart:'delete from `order` where order_id = ?',
        //删除购物车全部商品
        deleteAllCart:'delete from `order`',
    },
    orderCart:{
        insertCart:'INSERT INTO `orderCart`(product_id, username, orderCart_name, orderCart_descript, orderCart_url, orderCart_price, orderCart_count, orderCart_spec, orderCart_color, orderCart_address) VALUES ?',
        updatePayCart:'update `orderCart` set orderCart_pay = ? where orderCart_id = ?',
        selectCart:'select * from `orderCart`',
        selectPay:'select * from `orderCart` where orderCart_pay = 0',
        selectDelivery:'select * from `orderCart` where orderCart_pay = 1 and orderCart_delivery = 0',
        selectReceive:'select * from `orderCart` where orderCart_pay = 1 and orderCart_delivery = 1 and orderCart_receive = 0',
        deleteCart:'delete from `orderCArt` where orderCart_id = ?'
    },
    userInfo:{
        addUserInfo:'insert into `userInfo`(name,username,sex,birthday,nation,constellation,record,trade,address) values (?,?,?,?,?,?,?,?,?)',
        updateUserInfo:'update `userInfo` set name = ?,sex = ?,birthday = ?,nation = ?,constellation = ?,record = ?,trade = ?,address = ? where username = ?',
        selectInfo:'select * from `userInfo` where username = ?',
    },
};

module.exports = sqlMap;