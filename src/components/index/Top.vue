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
                    <li v-if="login_user">
                        <a style="cursor: pointer" @click="denglu">{{login[0]}}</a>
                        <span>|</span>
                    </li>
                    <li v-if="!login_user">
                        <a style="cursor: pointer" >欢迎</a>
                        <span>|</span>
                    </li>
                    <li v-if="login_user">
                        <router-link to="/register">{{login[1]}}</router-link>
                        <span>|</span>
                    </li>
                    <li v-if="!login_user">
                        <router-link to="/">退出</router-link>
                        <span>|</span>
                    </li>
                    <li>
                        <router-link to="/">{{login[2]}}</router-link>
                        <span>|</span>
                    </li>
                    <li>
                        <router-link to="/">{{login[3]}}</router-link>
                        <span></span>
                    </li>
                    <li class="gouWuChe">
                        <a class="gouwu">
                            <i class="el-icon-shopping-cart-2" style="width: 20px;height: 20px;font-weight: bold"></i>
                            购物车
                            <span class="gouwu">(0)</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import New from '../../new';

    export default {
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
    color: #3a3a3a;
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
        margin-right: 103px;
        //border: 0.5px solid red;
    }
    .top-ul1{
        height: 40px;
        width: 400px;
        //margin-left: 1000px;

        li{
            width: 50px;
            text-align: center;
            span{
                .spa
            }
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