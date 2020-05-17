<template>
    <div>
        <el-container class="">
            <el-header style="height: 80px">
                <div class="header-box">
                    <p>
                        <i class="el-icon-shopping-cart-2"></i>
                        <span class="sh-1">我的中心</span>
                        <span class="sh-2">首页</span>
                        <span class="sh-3">
                            <input type="text"></input>
                            <button type="button">搜索</button>
                        </span>
                    </p>
                </div>
            </el-header>
            <div class="guide">
                <p>
                    我的中心 >
                    <span></span>
                </p>
            </div>
            <div class="content-box">

                <el-container style="">
                    <el-aside width="201px" class="aside">
                        <!--侧边栏菜单区域-->
                        <el-col :span="12" style="width: 200px;">
                            <el-menu
                                    style="text-align: left"
                                    default-active="2"
                                    class="el-menu-vertical-demo"
                                    @open="handleOpen"
                                    @close="handleClose"
                                    background-color="#F3F3F3"
                                    text-color="black"
                                    active-text-color="#ffd04b"
                                    unique-opened
                                    router>

                                <el-submenu index="1">
                                    <template slot="title">
                                        <i class="el-icon-location" ></i>
                                        <span>我的交易</span>
                                    </template>
                                    <el-menu-item-group class="item-group">
                                        <el-menu-item index="/myCart">全部订单</el-menu-item>
                                        <el-menu-item index="1-2">售后服务</el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>
                                <el-submenu index="2">
                                    <template slot="title">
                                        <i class="el-icon-bank-card"></i>
                                        <span slot="title">我的钱包</span>
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item index="2-1">我的余额</el-menu-item>
                                        <el-menu-item index="2-2">我的积分</el-menu-item>
                                        <el-menu-item index="2-3">我的卡券</el-menu-item>
                                        <el-menu-item index="2-4">银行卡</el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>

                                <el-menu-item index="3">
                                    <i class="el-icon-star-off"></i>
                                    <span slot="title">我的收藏</span>
                                </el-menu-item>

                                <el-submenu index="4">
                                    <template slot="title">
                                        <i class="el-icon-chat-line-round"></i>
                                        <span slot="title">我的信息</span>
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item index="/own">个人资料</el-menu-item>
                                        <el-menu-item index="/myAddress">收货地址</el-menu-item>
                                        <el-menu-item index="/for">会员权益</el-menu-item>
                                        <el-menu-item index="/forget">安全中心</el-menu-item>
                                        <el-menu-item index="4-5">发票信息</el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>
                                <el-submenu index="5">
                                    <template slot="title">
                                        <i class="el-icon-service"></i>
                                        <span slot="title">客服中心</span>
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item index="5-1">帮助中心</el-menu-item>
                                        <el-menu-item index="5-2">在线客服</el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>
                            </el-menu>
                        </el-col>

                    </el-aside>
                    <el-main class="main">

                        <!--路由占位符-->
                        <router-view/>
                    </el-main>
                </el-container>

            </div>
        </el-container>
    </div>
</template>

<script>
    export default {
        components:{

        },
        data(){
            return{

            }
        },
        methods:{
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        mounted() {

        }
    }
</script>

<style scoped lang="less">
    *{
        margin: 0;
        padding: 0;
    }
    .el-header, .el-footer {
        background-color: #F3F3F3;
        color: #F05657;
        //text-align: center;
        line-height: 80px;
        height: 80px;
    }

    .el-aside {
        background-color: #F3F3F3;
        color: #333;
        text-align: center;
        line-height: 200px;
        margin-left: 140px;
        border-top: 3px solid #DDDDDD;
        border-left: 0.5px solid #DDDDDD;
        border-bottom: 0.5px solid #DDDDDD;
    }

    .el-main {
        background-color: white;
        color: #333;
        //text-align: center;
        //line-height: 160px;
        margin-right: 140px;
        border-top: 3px solid #D20000;
        border-bottom: 0.5px solid #DDDDDD;
    }

    .header-box{
        //border: 0.5px solid white;
        margin-left: 10%;
        width: 80.6%;
        height: 70px;
        margin-top: 5px;

        p{
            height: 70px;
            line-height: 70px;

            i{
                font-size: 40px;
                margin-top: 15px;
                float: left;
            }

            .sh-1{
                margin-left: 20px;
                font-size: 22px;
                font-weight: bold;
            }
            .sh-2{
                margin-left: 150px;
                font-weight: bold;
                font-size: 18px;
            }
            .sh-3{
                float: right;
                button{
                    border: none;
                    background-color: #F05657;
                    color: white;
                    width: 80px;
                    height: 30px;
                    margin-top: 20px;
                    float: left;
                }
                input{
                    float: left;
                    width: 240px;
                    height: 30px;
                    border: none;
                    margin-top: 20px;
                }
            }
        }
    }
    .guide{
        //margin-left: 10.3%;
        //width: 80.6%;
        height: 50px;
        background-color: white;
        //border: 0.5px solid;
        p{
            margin-left: 10.3%;
            width: 80.6%;
            line-height: 50px;
            color: grey;
            font-weight: bold;
        }
    }
    .content-box{
        background-color: #F3F3F3;
        height: auto;
    }

    //菜单
    .item-group{
        //text-align: right;
        //padding-left: 20px;
    }


</style>