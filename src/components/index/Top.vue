<template>
    <div>
        <div class="top">
            <div style="float: left;width: 640px">
                <ul class="top-ul">
                    <li v-for="item in menu"><router-link to="/">{{item}}</router-link><span>|</span></li>
                </ul>
            </div>
            <div class="right-m">
                <ul class="top-ul1">
                    <li class="login-li" v-if="!$store.state.user.userInfo.token">
                        <ul>
                            <li>
                                <a style="cursor: pointer" @click="denglu">{{login[0]}}</a>
                                <span>|</span>
                            </li>
                            <li>
                                <router-link to="/register">{{login[1]}}</router-link>
                                <span>|</span>
                            </li>
                        </ul>
                    </li>
                    <li class="login-li reg" v-else>
                        <el-dropdown @command="handleCommand" placement="bottom">
                              <span class="el-dropdown-link">
                                  Hi, {{$store.state.user.userInfo.user.username}}
                                  <i class="el-icon-arrow-down el-icon--right"></i>
                              </span>
                            <el-dropdown-menu slot="dropdown" style="width: 100px;">
                                <el-dropdown-item command="myInfo">个人中心</el-dropdown-item>
                                <el-dropdown-item command="exit">退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </li>

                    <li>
                        <router-link to="/">{{login[2]}}</router-link>
                        <span>|</span>
                    </li>
                    <li>
                        <router-link to="/">{{login[3]}}</router-link>
                        <span></span>
                    </li>

                    <li class="gouWuChe" @click="toOrder">
                        <a class="gouwu">
                            <i class="el-icon-shopping-cart-2" style="width: 20px;height: 20px;font-weight: bold"></i>
                            购物车
                            <span class="gouwu">({{$store.state.orderCart.listCart.length}})</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import New from '../../new';
    //import store from '../../store/modules/user'

    export default {
        //store,
        data(){
            return{
                menu:["电子商城","优质服务","开放平台","组队团购","资格证书","协议规则","下载app"],
                login:["登录","注册","消息","导航"],
                iconsrc:"../assets/logo.png",
                login_user:true
            }
        },
        methods:{
            denglu:function () {
                New.$emit('getisshow',true)
            },

            handleCommand(command) {
                if(command === 'exit'){
                    //清除本地数据
                    this.$store.commit('clearUserInfo');
                    this.$store.commit('clearList');
                    this.$message.success("退出成功！");
                    this.$router.push('/');
                }else if(command === 'myInfo'){
                    this.$router.push('/myCenter');
                }
            },
            toOrder:function () {
                this.$router.push({path:'/order'})
            }
        }
    }
</script>

<style scoped lang="less">
    @font-size:13px;

*{
    margin: 0;
    padding: 0;
}
li{
    list-style: none;
    float: left;
}
a{
    color: #B0B0B0;
    text-decoration: none;
    display: inline-block;
    line-height: 40px;
    font-size: @font-size;
}
a:hover{
    color: white;
}

.spa(){
    margin-left: 10px;
    color: #454545;
    line-height: @font-size;
}

.top{
    height: 40px;
    background-color: #333333;
    color: white;
    width: 1500px;
    //border: 0.5px solid red;

    .top-ul{
        margin-left: 140px;
        width: 500px;

        li{
            width: 70px;
            text-align: center;
            span{
                .spa
            }
        }
    }

    .right-m{
        float: right;
        width: 400px;
        margin-right: 115px;
        //border: 0.5px solid red;
    }
    .top-ul1{
        height: 40px;
        width: 400px;
        //border: 0.5px solid;
        //margin-left: 1000px;

        li{
            width: 50px;
            text-align: center;
            span{
                .spa
            }
        }
        .login-li{
            width: 120px;
        }
        .reg{
            margin-left: -15px;
            margin-right: 5px;
            width: 150px;
        }

        .el-dropdown-link {
            cursor: pointer;
            //color: #409EFF;
            color: #f2f2f2;
            border: none;
            line-height: 40px;
        }
        .el-icon-arrow-down {
            font-size: 12px;
        }

        .gouWuChe{
            width: 150px;
            height: 40px;
            background-color: #424242;
            .gouwu{
                color: #B0B0B0;
                width: 150px;
            }
        }
        .gouWuChe:hover{
            background-color: white;
            color: #FF6700;
            cursor: pointer;
            .gouwu:hover{
                color:#FF6700;
            }
        }
    }

}

</style>