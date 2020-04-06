<template>
    <div>
        <div class="right" :style="{right:right}">
            <div class="rightmenu">
                <div  style="margin-top: 120px">
                    <el-tooltip class="item" effect="dark" content="我的信息" placement="left">
                        <el-button><i class="el-icon-user el" @click="isShowEvent(0)"></i></el-button>
                    </el-tooltip>
                </div>
                <div class="box-left">
                    <div class="c-box" @click="isShowEvent(1)">
                        <i class="el-icon-shopping-cart-full"></i>
                        <p>购物车</p>
                    </div>
                </div>
                <div style="width: 40px;margin-top: 20px">
                    <el-tooltip class="item" effect="dark" content="我的收藏" placement="left">
                        <el-button><i class="el-icon-star-off el" @click="isShowEvent(2)"></i></el-button>
                    </el-tooltip>
                </div>
                <div style="width: 40px;margin-top: 10px">
                    <el-tooltip class="item" effect="dark" content="浏览历史" placement="left">
                        <el-button><i class="el-icon-time el" @click="isShowEvent(3)"></i></el-button>
                    </el-tooltip>
                </div>
                <div style="width: 40px;margin-top: 150px">
                    <el-tooltip class="item" effect="dark" content="联系客服" placement="left">
                        <el-button><i class="el-icon-service el"></i></el-button>
                    </el-tooltip>
                </div>
                <div style="width: 40px;margin-top: 10px" v-show="isActive">
                    <el-tooltip class="item" effect="dark" content="返回顶部" placement="left">
                        <el-button><i class="el-icon-arrow-up el" @click="backTop(step)"></i></el-button>
                    </el-tooltip>
                </div>
            </div>
            <div class="content-box">
                <!--我的信息-->
                <transition name="fade">
                    <div class="box" style="background-color: #e8e8e8" v-show="show[0].hide">
                        <div class="box-infor">
                            <div class="btn-close" @click="isShowEvent(0)">
                                <p>关闭</p>
                                <i class="el-icon-d-arrow-right"></i>
                            </div>
                        </div>

                        <div class="user-login">
                            <div class="login-1">
                                <ul>
                                    <li class="li-1">用户登录</li>
                                    <li class="li-2">扫码登录</li>
                                </ul>
                            </div>
                            <div class="login-2">
                                <Login></Login>
                            </div>

                            <router-link to="/" class="link-add">
                                注册新账号
                            </router-link>

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
                </transition>

                <!--购物车-->
                <transition name="fade">
                    <div class="box" style="background-color: grey" v-show="show[1].hide">
                        购物车
                    </div>
                </transition>
                <!--我的收藏-->
                <transition name="fade">
                    <div class="box" style="background-color: #262626" v-show="show[2].hide">
                        我的收藏
                    </div>
                </transition>
                <!--浏览历史-->
                <transition name="fade">
                    <div class="box" style="background-color: #407B9D" v-show="show[3].hide">
                        浏览历史
                    </div>
                </transition>
            </div>
        </div>

        <div class="left" v-show="isShow" @click="leftShowEvent">

        </div>
    </div>

</template>

<script>

    import New from '../../new';
    import Login from "../user/Login";

    export default {
        components:{
            Login,
        },
        data(){
            return{
                drawer: false,
                isShow:false,
                right:'-290px',
                show:[{hide:false},{hide:false},{hide:false},{hide:false}],
                isActive:false
            }
        },

        created() {
            New.$on('getisshow',data=>{
                if(data===true)
                {
                    this.isShowEvent(0);
                }
            })
        },

        methods:{
            //右侧侧边栏显示事件
            leftShowEvent:function () {
                this.right = '-290px';
                this.isShow = !this.isShow;
                this.show[1].hide = false;
                this.show[2].hide = false;
                this.show[3].hide = false;
                this.show[0].hide = false;
            },
            isShowEvent:function (index) {
                if(index===0)
                {
                    if(!this.isShow)
                    {
                        this.show[0].hide = true;
                        this.right = '0';
                        this.isShow = !this.isShow;
                    }
                    else
                    {
                        if(this.show[0].hide)
                        {
                            this.right = '-290px';
                            this.isShow = !this.isShow;
                            this.show[0].hide = false;
                        }
                        else{
                            this.show[1].hide = false;
                            this.show[2].hide = false;
                            this.show[3].hide = false;
                            this.show[0].hide = true;
                        }
                    }
                }
                else if(index===1)
                {
                    if(!this.isShow)
                    {
                        this.show[1].hide = true;
                        this.right = '0';
                        this.isShow = !this.isShow;
                    }
                    else
                    {
                        if(this.show[1].hide)
                        {
                            this.right = '-290px';
                            this.isShow = !this.isShow;
                            this.show[1].hide = false;
                        }
                        else{
                            this.show[0].hide = false;
                            this.show[2].hide = false;
                            this.show[3].hide = false;
                            this.show[1].hide = true;
                        }
                    }
                }
                else if(index===2)
                {
                    if(!this.isShow)
                    {
                        this.show[2].hide = true;
                        this.right = '0';
                        this.isShow = !this.isShow;
                    }
                    else
                    {
                        if(this.show[2].hide)
                        {
                            this.right = '-290px';
                            this.isShow = !this.isShow;
                            this.show[2].hide = false;
                        }
                        else{
                            this.show[0].hide = false;
                            this.show[1].hide = false;
                            this.show[3].hide = false;
                            this.show[2].hide = true;
                        }
                    }
                }
                else if(index===3)
                {
                    if(!this.isShow)
                    {
                        this.show[3].hide = true;
                        this.right = '0';
                        this.isShow = !this.isShow;
                    }
                    else
                    {
                        if(this.show[3].hide)
                        {
                            this.right = '-290px';
                            this.isShow = !this.isShow;
                            this.show[3].hide = false;
                        }
                        else{
                            this.show[1].hide = false;
                            this.show[2].hide = false;
                            this.show[0].hide = false;
                            this.show[3].hide = true;
                        }
                    }
                }
            },
            //屏幕滚动事件
            backTop:function (step) {
                //参数step表示时间间隔的幅度大小，以此来控制速度
                //当回到页面顶部的时候需要将定时器清除
                //获取滚动条位置
                document.documentElement.scrollTop-=step;
                if (document.documentElement.scrollTop>0) {
                    var time=setTimeout(()=>this.backTop(step),15);//在指定的毫秒数后调用函数或计算表达式
                }else {
                    clearTimeout(time);
                }
            },
            handelScroll:function () {
                if (document.documentElement.scrollTop > 50) {
                    this.isActive = true;
                } else {
                    this.isActive = false;
                }
            }
        },
        props:{
            step:{   //控制速度
                type: Number,
                default: 10
            }
        },

        mounted () {
            window.addEventListener('scroll', this.handelScroll)
        },

    }
</script>

<style scoped lang="less">

    @theme-color: #FF6700;

    *{
        margin: 0;
        padding: 0;
    }

    .fade-enter-active,.fade-leave-active{
        transition: transform 0.3s;
    }
    .fade-enter,.fade-leave-to{
        transform: translateX(290px);
    }

    .right{
        position: fixed;
        z-index: 99;
        background-color: #F2F2F2;
        height: 100%;
        transition: right 0.5s;
    }
    .left{
        position: fixed;
        z-index: 99;
        width: 100%;
        height: 100%;
        right: 330px;
    }

    .content-box{
        width: 290px;
        height:100%;
        background-color: #d6d6d6;
        float: left;

        .box{
            width: 290px;
            height: 100%;
            position: absolute;
        }
        //我的信息
        .box-infor{
            height: 40px;
            width: 290px;
            background-color: #F2F2F2;

            .btn-close{
                //color: white;
                width: 50px;
                height: 40px;
                margin-left: 5px;
                p{
                    float: left;
                    line-height: 40px;
                }
                .el-icon-d-arrow-right{
                    line-height: 40px;
                    margin-left: 2px;
                }
            }
            .btn-close:hover{
                cursor: pointer;
                color: red;
            }
        }
        .active{
            display: none;
        }
        //登录
        .user-login {
            width: 250px;
            height: 350px;
            margin-left: 20px;
            margin-top: 70px;
            //position: absolute;

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
                    color: @theme-color;
                }

                .li-1 {
                    border-right: 0.5px solid #d2d2d2;
                    text-align: left;
                    //padding-left: 10px;
                }

                .li-2 {
                    text-align: right;
                }
            }
            .a1{
                position: absolute;
            }
            .login-2{
                margin-top: 30px;
                float: left;
            }

            .link-add{
                font-size: 13px;
                color: blue;
                margin-left: 90px;
                float: left;
                margin-top: 35px;
                text-decoration: none;
            }
            .link-add:hover{
                color: @theme-color;
                border-bottom: 0.5px solid @theme-color;
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
                    background-image: url("../../assets/img/tb01.png");
                    background-size: 42px 42px;
                }
                .qq:hover{
                    background-image: url("../../assets/img/tb04.png");
                    background-size: 42px 42px;
                }
                .zfb{
                    background-image: url("../../assets/img/tb02.png");
                    background-size: 42px 42px;
                }
                .zfb:hover{
                    background-image: url("../../assets/img/tb05.png");
                    background-size: 42px 42px;
                }
                .wx{
                    background-image: url("../../assets/img/tb03.png");
                    background-size: 42px 42px;
                }
                .wx:hover{
                    background-image: url("../../assets/img/tb06.png");
                    background-size: 42px 42px;
                }
            }
        }

    }

    .rightmenu{
        background-color: #595656;
        width: 40px;
        height: 100%;
        float: left;
        z-index: 999 !important;

        .e-i(){
            width: 40px;
            color: white;
            font-size: 24px;
            text-align: center;
        }
        .e-hover(){
            color: @theme-color;
            cursor: pointer;
        }

        //购物车
        .c-box{
            border-bottom: 0.5px solid white;
            border-top: 0.5px solid white;
            width: 30px;
            margin-left: 5px;
            margin-top: 20px;
            padding-bottom: 20px;
        }
        .box-left:hover{
            background-color: @theme-color;
            cursor: pointer;
        }
        p{
            width: 30px;
            color: white;
            font-size: 16px;
            text-align: center;
            margin-top: 10px;
        }
        .el-icon-shopping-cart-full{
            .e-i();
            width: 30px;
            margin-top: 20px;
        }
        //购物车--end

        .el{
            .e-i();
            margin-left: -20px;
        }
        .el:hover{
            .e-hover();
        }

        .item{
            width: 40px;
            height: 40px;
            background-color: #595656;
            border: none
        }

    }

</style>