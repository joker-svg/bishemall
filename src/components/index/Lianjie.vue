<template>
    <div>
        <div class="home">
            <div class="box1">

                <div class="tou-xiang">
                    <el-avatar class="tou-img"
                            src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1175653880,3144803355&fm=26&gp=0.jpg">
                    </el-avatar>
                </div>

                <div class="tou-xiang-right">

                    <div class="txr-d">
                        <div v-if="!$store.state.userInfo.token">
                            <p class="p1">您好！请</p>
                            <p class="p2" @click="denglu">登录/注册</p>
                        </div>

                        <div style="position: absolute" v-else>
                            <p class="p1">欢迎您，{{$store.state.userInfo.user.username}}</p>
                        </div>
                    </div>

                    <div class="tou-d1 d">
                        <p>新人福利</p>
                    </div>
                    <div class="tou-d2 d">
                        <p>会员频道</p>
                    </div>
                </div>

            </div>

            <div class="box2">

                <div class="box2-d d1">
                    <i class="el-icon-mobile-phone el"></i>
                    <p>手机充值</p>
                </div>
                <div class="box2-d d1">
                    <i class="el-icon-phone-outline el"></i>
                    <p>固话充值</p>
                </div>
                <div class="box2-d d1">
                    <i class="el-icon-refresh el"></i>
                    <p>以旧换新</p>
                </div>
                <div class="box2-d d1">
                    <i class="el-icon-help el"></i>
                    <p>数码智能</p>
                </div>
                <div class="box2-d d2">
                    <i class="el-icon-film el"></i>
                    <p>会员领券</p>
                </div>
                <div class="box2-d d2">
                    <i class="el-icon-office-building el"></i>
                    <p>企业团购</p>
                </div>
                <div class="box2-d d2">
                    <i class="el-icon-bank-card el"></i>
                    <p>会员卡</p>
                </div>
                <div class="box2-d d2">
                    <i class="el-icon-time el"></i>
                    <p>点购秒杀</p>
                </div>

            </div>

            <div class="box3">
                <img src="../../assets/img/box41.jpg">
            </div>

            <div class="box4">
                <div class="box4-d1">
                    <p>公告</p>
                </div>
                <div class="box4-d2">
                    <div class="d2-d" v-for="(item,index) in 3">
                        <p class="p1">[必读]</p>
                        <p class="p2">信息安全公告</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import store from '../../store/modules/user';
    import New from "../../new";

    export default {
        store,
        data(){
            return{
                timg:[{img:require("../../assets/img/box21.png"),name:"手机充值"},
                    {img:require("../../assets/img/box21.png"),name:"手机充值"},
                    {img:require("../../assets/img/box21.png"),name:"手机充值"},
                    {img:require("../../assets/img/box21.png"),name:"手机充值"},
                    {img:require("../../assets/img/box21.png"),name:"手机充值"},
                    {img:require("../../assets/img/box21.png"),name:"手机充值"},
                    {img:require("../../assets/img/box21.png"),name:"手机充值"},
                    {img:require("../../assets/img/box21.png"),name:"手机充值"}],
                loginShow:false
            }
        },
        methods:{
            denglu:function () {
                New.$emit('getisshow',true);
            }
        },
        mounted() {
            //this.$store.dispatch("login");
        }
    }
</script>

<style scoped lang="less">

    @line-color: #686868;
    @theme-color:#FF6700;

    *{
        margin: 0;
        padding: 0;
    }

    .home{
        width: 1200px;
        height: 120px;
        margin-top: 20px;
        margin-left: 140px;
        border-radius: 10px 10px 0 0;
        box-shadow: 2px 2px 6px 0 rgba(0,0,0,0.4);
        //border: 0.5px solid;
        background-color: white;

        .box1{
            border-radius: 10px 0 0 0;
            width: 270px;
            height: 120px;
            float: left;
            //border-right: 0.5px solid #d2d2d2;

            .tou-xiang{
                margin-top: 25px;
                margin-left: 20px;
                width: 70px;
                height: 70px;
                float: left;

                .tou-img{
                    width: 70px;
                    height: 70px;
                    border: 0.5px solid #e1e1e1;
                }
            }
            .tou-xiang-right{
                width: 159px;
                margin-top: 30px;
                margin-left: 20px;
                float: left;
                height: 65px;
                border-right: 0.5px solid #dfdfdf;

                .txr-d{
                    height: 25px;
                    p{
                        float: left;
                    }
                    .p1{
                        color: grey;
                        margin-right: 5px;
                    }
                    .p2{
                        color: #424242;
                    }
                    .p2:hover{
                        color: @theme-color;
                        cursor: pointer;
                    }
                }

                .d{
                    //border: 0.5px solid;
                    float: left;
                    width: 70px;
                    height: 25px;
                    margin-top: 10px;
                    font-size: 13px;
                    //text-align: center;
                    p{
                        //border: 0.5px solid;
                        text-align: center;
                        line-height: 25px;
                        width: 70px;
                    }
                }
                .tou-d1{
                    border: 0.5px solid @theme-color;
                    color: @theme-color;
                    border-radius: 5px 0 5px 0;
                }
                .tou-d2{
                    margin-left: 5px;
                    border-radius: 0 5px 0 5px;
                    background-color: #262626;
                    color: white;
                }
            }
        }
        .box2{
            float: left;
            height: 120px;
            width: 330px;
            //border: 0.5px solid;
            margin-left: 5px;

            .box2-d{
                width: 80px;
                height: 60px;
                float: left;
                //border: 0.5px solid;
                margin-left: 1px;
                text-align: center;

                p{
                    font-size: 12px;
                    color: #606060;
                    text-align: center;
                    margin-top: 2px;
                    width: 80px;
                }
                .el{
                    font-size: 26px;
                    margin-top: 10px;
                    color: grey;
                }
            }
            .box2-d:hover{
                cursor: pointer;
                color: @theme-color;
            }
            .d1{
                border-bottom: 0.5px solid #dfdfdf;
                border-right: 0.5px solid #dfdfdf;
            }
            .d2{
                //border-bottom: 0.5px solid grey;
                border-right: 0.5px solid #dfdfdf;
            }
        }
        .box3{
            float: left;
            height: 120px;
            width: 300px;
            margin-left: -3px;
            //border: 0.5px solid;
            img{
                width: 300px;
                height: 120px;
            }
        }
        .box4{
            width: 285px;
            height: 120px;
            float: left;
            border-left: 0.5px solid #dfdfdf;
            margin-left: 1px;

        }
        .box4-d1{
            width: 50px;
            height: 25px;
            margin-left: 23px;
            margin-top: 5px;
            p{
                width: 50px;
                line-height: 25px;
                font-weight: bold;
                text-align: center;
                padding-bottom: 1px;
                border-bottom: 2px solid;
                color: #787878;
            }
            p:hover{
                color: @theme-color;
                cursor: pointer;
            }
        }
        .box4-d2{
            width: 290px;
            height: 80px;
            margin-top: 3px;
            padding-top: 5px;
            //border: 0.5px solid;
            .d2-d{
                width: 290px;
                height: 20px;
                margin-top: 6px;
                p{
                    float: left;
                }
                .p1{
                    font-size: 13px;
                    width: 40px;
                    margin-left: 28px;
                    font-weight: bold;
                    color: #5f5f5f;
                }
                .p2{
                    margin-left: 10px;
                    font-size: 13px;
                    color: #5f5f5f;
                }
                p:hover{
                    color: @theme-color;
                    cursor: pointer;
                }
            }
        }
    }
</style>