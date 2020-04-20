<template>
    <div class="register-box">
        <div class="reg">
            <div class="reg-top">
                <img src="../assets/img/Lo.jpg">
                <p class="reg-p1">毕设商城</p>
                <p class="reg-p2">用户注册</p>
            </div>
            <div class="reg-con">
                <div class="con-title">
                    <p class="title-p1">您好，感谢您加入毕设商城</p>
                    <p class="title-p2">
                        如有账号，请点击
                        <router-link to="/about">登录</router-link>
                    </p>
                </div>
                <div class="con-cont">
                    <registe class="cont"></registe>
                </div>
            </div>
        </div>
        <div class="bo">
            <Bottom></Bottom>
        </div>
    </div>
</template>

<script>
    import Bottom from "../components/Bottom";
    import Registe from "../components/user/Registe";
    export default {
        components:{
            Bottom,
            Registe
        },
        data(){
            return{

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

    .register-box{
        background-color: #F9F9F8;

        .reg{
            width: 1000px;
            height: 750px;
            margin-left: 280px;

            .reg-top{
                margin-top: 20px;
                height: 100px;
                img{
                    width: 80px;
                    height: 80px;
                    float: left;
                }

                .reg-p1{
                    font-size: 26px;
                    float: left;
                    width: 60px;
                    color: grey;
                    margin-top: 5px;
                    margin-left: 5px;
                }
                .reg-p2{
                    font-size: 26px;
                    font-weight: bold;
                    float: left;
                    width: 140px;
                    height: 60px;
                    line-height: 60px;
                    text-align: center;
                    border-left: 2px solid #dadada;
                    margin-left: 20px;
                    margin-top: 10px;
                    color: #7a7a7a;
                }
            }
            .reg-con{
                border: 0.5px solid #d0d0d0;
                width: 100%;
                height: 650px;
                background-color: white;

                .con-title{
                    width: 100%;
                    height: 50px;
                    border-bottom: 0.5px solid #d0d0d0;
                    p{
                        float: left;
                        line-height: 50px;
                    }

                    .title-p1{
                        color: #ff2528;
                        margin-left: 20px;
                    }
                    .title-p2{
                        color: grey;
                        font-size: 13px;
                        float: right;
                        margin-right: 20px;
                        a{
                            text-decoration: none;
                            color: blue;
                        }
                        a:hover{
                            color: @theme-color;
                        }
                    }
                }
                .con-cont{
                    .cont{
                        margin-top: 60px;
                        margin-left: 260px;
                    }
                }
            }
        }

        .bo{
            width: 100%;
            background-color: #E8E8E8;
        }
    }
</style>