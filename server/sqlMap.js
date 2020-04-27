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
        //查找城市对应县区
        //select_xian:'select * from address where upid = ?',
        //查找县区对应乡镇
        //select_zhen:'select * from address where upid = ?',
    }
};

module.exports = sqlMap;