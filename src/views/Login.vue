<template>
    <div class="register-box">
        <div class="reg">
            <div class="reg-top">
                <img src="../assets/img/Lo.jpg">
                <p class="reg-p1">毕设商城</p>
                <p class="reg-p2">用户登录</p>
            </div>
            <div class="reg-con">
                <div class="con-title">
                    <p class="title-p1">您好，欢迎您登录毕设商城</p>
                    <p class="title-p2">
                        如没有账号，请点击
                        <router-link to="/register">注册</router-link>
                    </p>
                </div>
                <div class="con-cont">
                    <div class="user-login">
                        <div class="login-1">
                            <ul>
                                <li class="li-1"
                                    :class="{li_active:login_show}"
                                    @click="loginShow(0)">
                                    <p>用户登录</p>
                                </li>
                                <li class="li-2"
                                    :class="{li_active:!login_show}"
                                    @click="loginShow(1)">
                                    <p>扫码登录</p>
                                </li>
                            </ul>
                        </div>
                        <div class="login-2">
                            <Login class="login" v-show="login_show"></Login>
                            <div v-show="!login_show">
                                <div class="sao_ma">
                                    <img src="../assets/img/er_wei_ma.png" alt="">
                                </div>
                                <p class="sao_ma_p">请打开app扫码登录</p>
                            </div>
                        </div>

                        <div class="info-bo">
                            <p class="bo-p">——————</p>
                            <p>其他账号登录</p>
                            <p class="bo-p">——————</p>
                            <div class="tb qq"></div>
                            <div class="tb zfb"></div>
                            <div class="tb wx"></div>
                        </div>
                    </div>
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
    import Login from "../components/user/Login";
    export default {
        components:{
            Bottom,
            Login
        },
        data(){
            return{
                login_show:true
            }
        },
        methods:{
            //登录方式切换
            loginShow:function(index){
                if(index===0){
                    if(!this.login_show){
                        this.login_show = !this.login_show;
                    }
                }else if(index===1){
                    if(this.login_show){
                        this.login_show = !this.login_show;
                    }
                }

            },
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
        width:1500px;

        .reg{
            width: 1000px;
            height: 750px;
            margin-left: 280px;
            padding-top: 20px;
            //background-image: url("../assets/img/login-back.png");
            //background-size: 100% 100%;

            .reg-top{
                //margin-top: 20px;
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
                    border: 7px solid #cdcdcd;
                    width: 500px;
                    height: 500px;
                    margin-left: 250px;
                    margin-top: 50px;

                    //登录
                    .user-login {
                        width: 250px;
                        height: 350px;
                        margin-left: 120px;
                        margin-top: 30px;
                        position: absolute;

                        .login-1 {
                            width: 250px;
                            height: 30px;

                            li {
                                list-style: none;
                                float: left;
                                font-size: 18px;
                                font-weight: bold;
                                width: 120px;
                                line-height: 30px;
                                text-align: center;
                                color: #3f3f3f;
                            }
                            li:hover{cursor: pointer}
                            .li_active{
                                color: @theme-color;
                                p{
                                    border-bottom: 2px solid @theme-color;
                                }
                            }
                            .li-1 {
                                border-right: 0.5px solid #d2d2d2;
                                p{
                                    width: 75px;
                                    float: left;
                                }
                            }

                            .li-2 {
                                p{
                                    width: 75px;
                                    float: right;
                                }
                            }
                        }
                        .a1{
                            position: absolute;
                        }
                        .login-2{
                            margin-top: 30px;
                            float: left;
                            height: 250px;
                            width: 250px;
                            //border: 0.5px solid;

                            .login{
                                position: absolute;
                            }
                            .sao_ma{
                                background:white;
                                width:200px;
                                height:200px;
                                margin-left: 25px;
                                img{
                                    width: 200px;
                                    height: 200px;
                                }
                            }
                            .sao_ma_p{
                                width: 200px;
                                font-size: 13px;
                                margin-left: 65px;
                                margin-top: 5px;
                            }
                        }
                        .info-bo{
                            margin-top: 50px;
                            float: left;
                            p{
                                font-size: 12px;
                                color: grey;
                                float: left;
                                margin-left: 5px;
                            }
                            .bo-p{
                                color: #cecece;
                            }

                            .tb{
                                width: 40px;
                                height: 40px;
                                background-color: #99a9bf;
                                float: left;
                                border-radius: 20px;
                                margin-top: 20px;
                                margin-left: 33px;
                            }
                            .tb:hover{
                                cursor: pointer;
                            }
                            .qq{
                                background-image: url("../assets/img/tb01.png");
                                background-size: 42px 42px;
                            }
                            .qq:hover{
                                background-image: url("../assets/img/tb04.png");
                                background-size: 42px 42px;
                            }
                            .zfb{
                                background-image: url("../assets/img/tb02.png");
                                background-size: 42px 42px;
                            }
                            .zfb:hover{
                                background-image: url("../assets/img/tb05.png");
                                background-size: 42px 42px;
                            }
                            .wx{
                                background-image: url("../assets/img/tb03.png");
                                background-size: 42px 42px;
                            }
                            .wx:hover{
                                background-image: url("../assets/img/tb06.png");
                                background-size: 42px 42px;
                            }
                        }
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