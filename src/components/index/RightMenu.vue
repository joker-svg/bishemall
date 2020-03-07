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
                <div style="width: 40px;margin-top: 10px">
                    <el-tooltip class="item" effect="dark" content="返回顶部" placement="left">
                        <el-button><i class="el-icon-arrow-up el" @click="isShowEvent"></i></el-button>
                    </el-tooltip>
                </div>
            </div>
            <div class="content-box">
                <!--我的信息-->
                <transition name="fade">
                    <div class="box" v-show="show[0].hide">
                        我的信息
                    </div>
                </transition>

                <!--购物车-->
                <transition name="fade">
                    <div class="box" style="background-color: #262626" v-show="show[1].hide">
                        购物车
                    </div>
                </transition>
                <!--我的收藏-->
                <transition name="fade">
                    <div class="box" style="background-color: #FF6700" v-show="show[2].hide">
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

        <div class="left" v-show="isShow" @click="isShowEvent">

        </div>
    </div>

</template>

<script>
    export default {
        data(){
            return{
                drawer: false,
                isShow:false,
                right:'-290px',
                show:[{hide:false},{hide:false},{hide:false},{hide:false}]
            }
        },
        methods:{
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
                        }
                        else{
                            this.show[1].hide = false;
                            this.show[2].hide = false;
                            this.show[0].hide = false;
                            this.show[3].hide = true;
                        }
                    }
                }


            }
        }
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
            //display: none;
            //color: white;
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