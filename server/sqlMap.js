// sql语句
var sqlMap = {
    user: {
        // 添加用户
        add: 'insert into user(username, password,phone,email) values (?, ?,?,?)',
        // 查询用户
        select: 'select * from user',
        isUser:'select * from user where username= ? and password= ?',
    }
};

module.exports = sqlMap;