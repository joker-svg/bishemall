<template>
    <div class="user-box">
        <div class="user-head">
            <div class="head-img">
                <el-avatar class="h-img" :size="70" :src="circleUrl"></el-avatar>
            </div>
            <p class="h-p1">您好，</p>
            <p class="h-p2">joker</p>
            <div class="head-back">
                <p>积分：0</p>
            </div>
        </div>
        <div class="my-menu">
            <div class="m-d md1">
                <i class="el-icon-platform-eleme"></i>
            </div>
            <div class="m-d md2">
                <i class="el-icon-user-solid"></i>
            </div>
            <div class="m-d md3">
                <i class="el-icon-s-tools"></i>
            </div>
        </div>
        <div class="my-yh">
            <div class="d d1">
                <p class="p-c">收藏夹</p>
                <p>(0)</p>
            </div>
            <div class="d d2">
                <p class="p-c">关注店铺</p>
                <p>(0)</p>
            </div>
            <div class="d d3">
                <p class="p-c">足迹</p>
                <p>(0)</p>
            </div>
            <div class="d d4">
                <p class="p-c">红包卡券</p>
                <p>(0)</p>
            </div>
        </div>
        <div class="my-dd">
            <div class="dd-title">
                <p class="title-p1">我的订单</p>
                <p class="title-p2">
                    查看全部订单
                    <i class="el-icon-arrow-right"></i>
                </p>
            </div>
            <div class="dd-li">
                <ul>
                    <li>
                        <i class="el-icon-suitcase"></i>
                        <p>待付款</p>
                        <i class="el-icon-arrow-right"></i>
                    </li>
                    <li>
                        <i class="el-icon-help"></i>
                        <p>待发货</p>
                        <i class="el-icon-arrow-right"></i>
                    </li>
                    <li>
                        <i class="el-icon-bell"></i>
                        <p>待收货</p>
                        <i class="el-icon-arrow-right"></i>
                    </li>
                    <li>
                        <i class="el-icon-edit-outline"></i>
                        <p>评价</p>
                        <i class="el-icon-arrow-right"></i>
                    </li>
                    <li>
                        <i class="el-icon-files"></i>
                        <p>退款/售后</p>
                        <i class="el-icon-arrow-right"></i>
                    </li>
                </ul>
            </div>
        </div>
        <div class="my-bo">
            <div class="tou-d1 d">
                <p>新人福利</p>
            </div>
            <div class="tou-d2 d">
                <p>会员频道</p>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            }
        },
        methods:{

        }

    }
</script>

<style scoped lang="less">
    @theme-color:#FF6700;

    *{
        margin: 0;
        padding: 0;
    }
    .bor(){
        width: 250px;
        border-radius: 10px;
        background-color: white;
    }

    .user-box{
        background-color: #ececec;
        width: 100%;
        height: 100%;
    }

    .user-head{
        width: 100%;
        height: 100px;
        padding-top: 20px;
        .head-img{
            width: 70px;
            height: 70px;
            border-radius: 35px;
            margin-left: 20px;
            float: left;
            z-index: 9999;
            position: relative;
            .h-img{
                z-index: 99;
            }
        }
        p{
            font-size: 17px;
            float: left;
            width: 60px;
            text-align: center;
        }
        .h-p1{
            margin-left: 20px;
        }
        .h-p2{
            color: red;
            text-align: left;
        }
        .head-back{
            width: 215px;
            height: 40px;
            float: left;
            margin-left: -35px;
            margin-top: 7px;
            z-index: 0;
            background-color: #F9F9F9;
            border: 0.5px solid #dddddd;
            p{
                width: 100%;
                line-height: 40px;
                text-align: left;
                margin-left: 60px;
                font-size: 13px;
                color: grey;
            }
        }
    }
    .my-menu{
        .bor();
        height: 40px;
        margin-left: 20px;
        border-bottom: 0.5px solid grey;
        .m-d{
            float: left;
            font-size: 20px;
            line-height: 40px;
            i{
                color: grey;
            }
        }
        .m-d:hover{
            cursor: pointer;
            i{
                color: @theme-color;
            }
        }
        .md1{
            margin-left: 40px;
        }
        .md2{
            margin-left: 50px;
        }
        .md3{
            float: right;
            margin-right: 40px;
        }
    }
    .my-yh{
        .bor();
        height: 100px;
        margin-left: 20px;
        margin-top: 5px;

        .d{
            width: 124px;
            height: 49px;
            float: left;
            p{
                text-align: center;
                font-size: 14px;
                color: grey;
            }
            .p-c{
                margin-top: 5px;
            }
        }
        .d:hover{
            background-color: @theme-color;
            cursor: pointer;
            p{
                color: white;
            }
        }
        .d1{
            border-bottom: 0.5px solid #ebebeb;
            border-right: 0.5px solid #ebebeb;
            border-radius: 10px 0 0 0 ;
        }
        .d2{
            border-bottom: 0.5px solid #ebebeb;
            border-radius: 0 10px 0 0 ;
        }
        .d3{
            border-right: 0.5px solid #ebebeb;
            border-radius: 0 0 0 10px ;
        }
        .d4{
            border-radius: 0 0 10px 0 ;
        }
    }
    .my-dd{
        .bor();
        height: 240px;
        margin-left: 20px;
        margin-top: 10px;

        .dd-title{
            border-bottom: 0.5px solid #e0e0e0;
            width: 100%;
            height: 30px;
            p{
                float: left;
                font-size: 14px;
                margin-top: 5px;
                color: grey;
                line-height: 25px;
            }
            .title-p1{
                color: black;
                margin-left: 10px;
            }
            .title-p2{
                float: right;
                font-size: 12px;
                margin-right: 10px;
                .el-icon-arrow-right{

                }
            }
            .title-p2:hover{
                color: @theme-color;
                cursor: pointer;
            }
        }
        .dd-li{

            li{
                list-style: none;
                width: 100%;
                height: 40px;
                color: grey;
                border-bottom: 0.5px solid #fcfcfc;
                i{
                    float: left;
                    line-height: 40px;
                    margin-left: 10px;
                    font-size: 20px;
                }

                p{
                    line-height: 40px;
                    width: 100px;
                    float: left;
                    margin-left: 40px;
                }
                .el-icon-arrow-right{
                    font-size: 20px;
                    line-height: 40px;
                    float: right;
                    margin-right: 10px;
                    color: grey;
                }
            }
            li:hover{
                color: white;
                background-color: @theme-color;
                cursor: pointer;
                i{
                    color: white;
                }
            }
        }
    }
    .my-bo{
        //.bor();
        height: 50px;
        margin-left: 20px;
        margin-top: 10px;
        .d{
            float: left;
            width: 120px;
            height: 40px;
            font-size: 14px;
            p{
                text-align: center;
                line-height: 40px;
                width: 120px;
                //border: 0.5px solid;
            }
        }
        .d:hover{
            cursor: pointer;
        }
        .tou-d1{
            border: 0.5px solid @theme-color;
            color: @theme-color;
            border-radius: 10px 0 10px 0;
            background-color: white;
        }
        .tou-d2{
            margin-left: 5px;
            border-radius: 0 10px 0 10px;
            background-color: #262626;
            color: white;
        }
    }
</style>