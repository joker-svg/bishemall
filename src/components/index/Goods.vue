<template>
    <div class="goods-whole">
        <img class="img-fen" src="../../assets/img/fen01.jpg" alt="">

        <div class="index-intro">
            <div class="intro-title">
                <div class="i-t"></div>
                <p class="p1">手机</p>
                <div class="intro-s">
                    <router-link to="/">
                        更多<i class="el-icon-arrow-right"></i>
                    </router-link>
                </div>
            </div>

            <div class="intro-content">
                <div class="content-left">
                    <img src="../../assets/img/shouji.jpg">
                </div>
                <div class="content-right">
                    <div class="intro-good" v-for="(item,index) in 8">
                        <img src="../../assets/img/intro02.jpg" alt="">
                        <p class="intro-p1 p4">全面屏电视E55A</p>
                        <p class="intro-p2 p4">全面屏设计，人工智能语音{{item}}</p>
                        <p class="intro-p3">￥55.0</p>
                        <div class="s-save">
                            <i class="el-icon-star-off"></i>
                            <p>收藏</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<!--电脑-->
        <img class="img-fen" src="../../assets/img/fen02.jpg" alt="">

        <div class="index-intro">
            <div class="intro-title">
                <div class="i-t"></div>
                <p class="p1">笔记本电脑</p>
                <div class="intro-s">
                    <router-link to="/">
                        更多<i class="el-icon-arrow-right"></i>
                    </router-link>
                </div>
            </div>

            <div class="intro-content">
                <div class="content-left">
                    <img src="../../assets/img/shouji.jpg">
                </div>
                <div class="content-right">
                    <div class="intro-good" v-for="(item,index) in 8">
                        <img src="../../assets/img/intro02.jpg" alt="">
                        <p class="intro-p1 p4">全面屏电视E55A</p>
                        <p class="intro-p2 p4">全面屏设计，人工智能语音{{item}}</p>
                        <p class="intro-p3">￥55.0</p>
                        <div class="s-save">
                            <i class="el-icon-star-off"></i>
                            <p>收藏</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<!--精品平板-->
        <img class="img-fen" src="../../assets/img/fen03.jpg" alt="">

        <div class="index-intro">
            <div class="intro-title">
                <div class="i-t"></div>
                <p class="p1">精品平板</p>
                <div class="intro-s">
                    <router-link to="/">
                        更多<i class="el-icon-arrow-right"></i>
                    </router-link>
                </div>
            </div>

            <div class="intro-content">
                <div class="content-left">
                    <img src="../../assets/img/shouji.jpg">
                </div>
                <div class="content-right">
                    <div class="intro-good" v-for="(item,index) in 8">
                        <img src="../../assets/img/intro02.jpg" alt="">
                        <p class="intro-p1 p4">全面屏电视E55A</p>
                        <p class="intro-p2 p4">全面屏设计，人工智能语音{{item}}</p>
                        <p class="intro-p3">￥55.0</p>
                        <div class="s-save">
                            <i class="el-icon-star-off"></i>
                            <p>收藏</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<!--家电-->
        <img class="img-fen" src="../../assets/img/fen04.jpg" alt="">

        <div class="index-intro">
            <div class="intro-title">
                <div class="i-t"></div>
                <p class="p1">家居</p>
                <div class="bq">
                    <p>路由</p>
                    <p>WIFI放大器</p>
                    <p>智能存储</p>
                    <p>电视盒子</p>
                </div>
                <div class="intro-s">
                    <router-link to="/">
                        更多<i class="el-icon-arrow-right"></i>
                    </router-link>
                </div>
                <div class="intro-i">
                    <p :class="{p_active:isShow[0].hide}" @mouseover="mouse_active(0)">热门</p>
                    <p :class="{p_active:isShow[1].hide}" @mouseover="mouse_active(1)">电视</p>
                </div>
            </div>

            <div class="intro-content">
                <div class="content-left-jiadian">
                    <div class="content-left-div">
                        <img src="../../assets/img/jiadian.jpg" alt="">
                    </div>
                    <div class="content-left-div d1">
                        <img src="../../assets/img/jiadian.jpg" alt="">
                    </div>
                </div>
            <!--热门-->
                <div class="content-right-box">
                    <div class="content-right content" v-show="isShow[0].hide">
                        <div class="intro-good" v-for="(item,index) in 8">
                            <img src="../../assets/img/intro02.jpg" alt="">
                            <p class="intro-p1 p4">全面屏电视E55A</p>
                            <p class="intro-p2 p4">全面屏设计，人工智能语音{{item}}</p>
                            <p class="intro-p3">￥55.0</p>
                            <div class="s-save">
                                <i class="el-icon-star-off"></i>
                                <p>收藏</p>
                            </div>
                        </div>
                    </div>
                <!--电视-->
                    <div class="content-right content" v-show="isShow[1].hide">
                        <div class="intro-good" v-for="(item,index) in 8">
                            <img src="../../assets/img/intro02.jpg" alt="">
                            <p class="intro-p1 p4">全面屏电视E55A</p>
                            <p class="intro-p2 p4">全面屏设计，人工智能语音{{item}}</p>
                            <p class="intro-p3">￥65.0</p>
                            <div class="s-save">
                                <i class="el-icon-star-off"></i>
                                <p>收藏</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<!--智能-->
        <img class="img-fen" src="../../assets/img/fen01.jpg" alt="">

        <div class="index-intro">
            <div class="intro-title">
                <div class="i-t"></div>
                <p class="p1">智能</p>
                <div class="bq">
                    <p>智能手表</p>
                    <p>智能手环</p>
                    <p>智能健康配件</p>
                    <p>VR</p>
                </div>
                <div class="intro-s">
                    <router-link to="/">
                        更多<i class="el-icon-arrow-right"></i>
                    </router-link>
                </div>
                <div class="intro-i" style="width: 170px">
                    <p :class="{p_active:isShow[2].hide}" @mouseover="mouse_active(2)">热门</p>
                    <p :class="{p_active:isShow[3].hide}" @mouseover="mouse_active(3)">数码</p>
                    <p :class="{p_active:isShow[4].hide}" @mouseover="mouse_active(4)">穿戴</p>
                </div>
            </div>

            <div class="intro-content">
                <div class="content-left-jiadian">
                    <div class="content-left-div">
                        <img src="../../assets/img/jiadian.jpg" alt="">
                    </div>
                    <div class="content-left-div d1">
                        <img src="../../assets/img/jiadian.jpg" alt="">
                    </div>
                </div>
                <div class="content-right-box">
                <!--热门-->
                    <div class="content-right content" v-show="isShow[2].hide">
                        <div class="intro-good" v-for="(item,index) in 8">
                            <img src="../../assets/img/intro02.jpg" alt="">
                            <p class="intro-p1 p4">全面屏电视E55A</p>
                            <p class="intro-p2 p4">全面屏设计，人工智能语音{{item}}</p>
                            <p class="intro-p3">￥55.0</p>
                            <div class="s-save">
                                <i class="el-icon-star-off"></i>
                                <p>收藏</p>
                            </div>
                        </div>
                    </div>
                <!--数码-->
                    <div class="content-right content" v-show="isShow[3].hide">
                        <div class="intro-good" v-for="(item,index) in 8">
                            <img src="../../assets/img/intro02.jpg" alt="">
                            <p class="intro-p1 p4">全面屏电视E55A</p>
                            <p class="intro-p2 p4">全面屏设计，人工智能语音{{item}}</p>
                            <p class="intro-p3">￥65.0</p>
                            <div class="s-save">
                                <i class="el-icon-star-off"></i>
                                <p>收藏</p>
                            </div>
                        </div>
                    </div>
                <!--安防-->
                    <div class="content-right content" v-show="isShow[4].hide">
                        <div class="intro-good" v-for="(item,index) in 8">
                            <img src="../../assets/img/intro02.jpg" alt="">
                            <p class="intro-p1 p4">全面屏电视E55A</p>
                            <p class="intro-p2 p4">全面屏设计，人工智能语音{{item}}</p>
                            <p class="intro-p3">￥75.0</p>
                            <div class="s-save">
                                <i class="el-icon-star-off"></i>
                                <p>收藏</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<!--热销搭配-->
        <img class="img-fen" src="../../assets/img/fen02.jpg" alt="">

        <div class="index-intro">
            <div class="intro-title">
                <div class="i-t"></div>
                <p class="p1">热销搭配</p>
                <div class="bq">
                    <p>移动电源</p>
                    <p>摄像头</p>
                    <p>智能硬件</p>
                    <p>贴膜</p>
                </div>
                <div class="intro-s">
                    <router-link to="/">
                        更多<i class="el-icon-arrow-right"></i>
                    </router-link>
                </div>
                <div class="intro-i" style="width: 210px">
                    <p :class="{p_active:isShow[5].hide}" @mouseover="mouse_active(5)">热门</p>
                    <p :class="{p_active:isShow[6].hide}" @mouseover="mouse_active(6)">耳机音箱</p>
                    <p :class="{p_active:isShow[7].hide}" @mouseover="mouse_active(7)">充电宝</p>
                </div>
            </div>

            <div class="intro-content">
                <div class="content-left-jiadian">
                    <div class="content-left-div">
                        <img src="../../assets/img/jiadian.jpg" alt="">
                    </div>
                    <div class="content-left-div d1">
                        <img src="../../assets/img/jiadian.jpg" alt="">
                    </div>
                </div>
                <div class="content-right-box">
                    <!--热门-->
                    <div class="content-right content" v-show="isShow[5].hide">
                        <div class="intro-good" v-for="(item,index) in 8">
                            <img src="../../assets/img/intro02.jpg" alt="">
                            <p class="intro-p1 p4">全面屏电视E55A</p>
                            <p class="intro-p2 p4">全面屏设计，人工智能语音{{item}}</p>
                            <p class="intro-p3">￥55.0</p>
                            <div class="s-save">
                                <i class="el-icon-star-off"></i>
                                <p>收藏</p>
                            </div>
                        </div>
                    </div>
                    <!--耳机音箱-->
                    <div class="content-right content" v-show="isShow[6].hide">
                        <div class="intro-good" v-for="(item,index) in 8">
                            <img src="../../assets/img/intro02.jpg" alt="">
                            <p class="intro-p1 p4">全面屏电视E55A</p>
                            <p class="intro-p2 p4">全面屏设计，人工智能语音{{item}}</p>
                            <p class="intro-p3">￥65.0</p>
                            <div class="s-save">
                                <i class="el-icon-star-off"></i>
                                <p>收藏</p>
                            </div>
                        </div>
                    </div>
                    <!--充电宝-->
                    <div class="content-right content" v-show="isShow[7].hide">
                        <div class="intro-good" v-for="(item,index) in 8">
                            <img src="../../assets/img/intro02.jpg" alt="">
                            <p class="intro-p1 p4">全面屏电视E55A</p>
                            <p class="intro-p2 p4">全面屏设计，人工智能语音{{item}}</p>
                            <p class="intro-p3">￥75.0</p>
                            <div class="s-save">
                                <i class="el-icon-star-off"></i>
                                <p>收藏</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<!--生态周边-->
        <img class="img-fen" src="../../assets/img/fen03.jpg" alt="">

        <div class="index-intro">
            <div class="intro-title">
                <div class="i-t"></div>
                <p class="p1">生态周边</p>
                <div class="bq">
                    <p>生活电器</p>
                    <p>厨电卫浴</p>
                    <p>智能灯光</p>
                    <p>环境卫士</p>
                </div>
                <div class="intro-s">
                    <router-link to="/">
                        更多<i class="el-icon-arrow-right"></i>
                    </router-link>
                </div>
                <div class="intro-i" style="width: 180px">
                    <p :class="{p_active:isShow[8].hide}" @mouseover="mouse_active(8)">热门</p>
                    <p :class="{p_active:isShow[9].hide}" @mouseover="mouse_active(9)">保护套</p>
                    <p :class="{p_active:isShow[10].hide}" @mouseover="mouse_active(10)">出行</p>
                </div>
            </div>

            <div class="intro-content">
                <div class="content-left-jiadian">
                    <div class="content-left-div">
                        <img src="../../assets/img/jiadian.jpg" alt="">
                    </div>
                    <div class="content-left-div d1">
                        <img src="../../assets/img/jiadian.jpg" alt="">
                    </div>
                </div>
                <div class="content-right-box">
                    <!--热门-->
                    <div class="content-right content" v-show="isShow[8].hide">
                        <div class="intro-good" v-for="(item,index) in 8">
                            <img src="../../assets/img/intro02.jpg" alt="">
                            <p class="intro-p1 p4">全面屏电视E55A</p>
                            <p class="intro-p2 p4">全面屏设计，人工智能语音{{item}}</p>
                            <p class="intro-p3">￥55.0</p>
                            <div class="s-save">
                                <i class="el-icon-star-off"></i>
                                <p>收藏</p>
                            </div>
                        </div>
                    </div>
                    <!--保护套-->
                    <div class="content-right content" v-show="isShow[9].hide">
                        <div class="intro-good" v-for="(item,index) in 8">
                            <img src="../../assets/img/intro02.jpg" alt="">
                            <p class="intro-p1 p4">全面屏电视E55A</p>
                            <p class="intro-p2 p4">全面屏设计，人工智能语音{{item}}</p>
                            <p class="intro-p3">￥65.0</p>
                            <div class="s-save">
                                <i class="el-icon-star-off"></i>
                                <p>收藏</p>
                            </div>
                        </div>
                    </div>
                    <!--出行-->
                    <div class="content-right content" v-show="isShow[10].hide">
                        <div class="intro-good" v-for="(item,index) in 8">
                            <img src="../../assets/img/intro02.jpg" alt="">
                            <p class="intro-p1 p4">全面屏电视E55A</p>
                            <p class="intro-p2 p4">全面屏设计，人工智能语音{{item}}</p>
                            <p class="intro-p3">￥75.0</p>
                            <div class="s-save">
                                <i class="el-icon-star-off"></i>
                                <p>收藏</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <img class="img-fen" src="../../assets/img/bbo.jpg" alt="">
    </div>
</template>

<script>

    export default {
        data(){
            return{
                isShow:[{hide:true},{hide:false},{hide:true},{hide:false},{hide:false},{hide:true}
                    ,{hide:false},{hide:false},{hide:true},{hide:false},{hide:false}]
            }
        },
        methods:{
            mouse_active:function (index) {
                if(index===0){
                    if(!this.isShow[0].hide){
                        this.isShow[1].hide = !this.isShow[1].hide;
                        this.isShow[0].hide = !this.isShow[0].hide;
                    }
                }else if(index===1){
                    if(!this.isShow[1].hide){
                        this.isShow[1].hide = !this.isShow[1].hide;
                        this.isShow[0].hide = !this.isShow[0].hide;
                    }
                }else if(index===2){
                    if(!this.isShow[2].hide){
                        this.isShow[3].hide = false;
                        this.isShow[4].hide = false;
                        this.isShow[2].hide = !this.isShow[2].hide;
                    }
                }else if(index===3){
                    if(!this.isShow[3].hide){
                        this.isShow[2].hide = false;
                        this.isShow[4].hide = false;
                        this.isShow[3].hide = !this.isShow[3].hide;
                    }
                }
                else if(index===4){
                    if(!this.isShow[4].hide){
                        this.isShow[2].hide = false;
                        this.isShow[3].hide = false;
                        this.isShow[4].hide = !this.isShow[3].hide;
                    }
                } else if(index===5){
                    if(!this.isShow[5].hide){
                        this.isShow[6].hide = false;
                        this.isShow[7].hide = false;
                        this.isShow[5].hide = !this.isShow[5].hide;
                    }
                }else if(index===6){
                    if(!this.isShow[6].hide){
                        this.isShow[5].hide = false;
                        this.isShow[7].hide = false;
                        this.isShow[6].hide = !this.isShow[6].hide;
                    }
                }
                else if(index===7){
                    if(!this.isShow[7].hide){
                        this.isShow[5].hide = false;
                        this.isShow[6].hide = false;
                        this.isShow[7].hide = !this.isShow[7].hide;
                    }
                }else if(index===8){
                    if(!this.isShow[8].hide){
                        this.isShow[9].hide = false;
                        this.isShow[10].hide = false;
                        this.isShow[8].hide = !this.isShow[8].hide;
                    }
                }else if(index===9){
                    if(!this.isShow[9].hide){
                        this.isShow[8].hide = false;
                        this.isShow[10].hide = false;
                        this.isShow[9].hide = !this.isShow[9].hide;
                    }
                }
                else if(index===10){
                    if(!this.isShow[10].hide){
                        this.isShow[8].hide = false;
                        this.isShow[9].hide = false;
                        this.isShow[10].hide = !this.isShow[10].hide;
                    }
                }
            }
        }
    }
</script>

<style scoped lang="less">
    @theme-color:#FF6700;
    .box-left(){
        float: left;
        width: 222.5px;
        height: 660px;
        //border: 0.5px solid;
        margin-top: 20px;
    }
    .xuan-fu(){
        box-shadow: 2px 2px 0 rgba(0,0,0,0.2),0 0 6px rgba(0, 0, 0, 0.4);
    }

    *{
        margin: 0;
        padding: 0;
    }

    .goods-whole{
        background-color: #f7f7f7;
        //height: 2000px
    }

    .index-intro{
        width: 100%;
        height: 750px;
        background-color: #f7f7f7;
        margin-top: 20px;
        padding-top: 10px;
        //border: 0.5px solid;

    }
    .img-fen{
        margin-left: 140px;
        width: 1200px;
        border-radius: 10px
    }

    .intro-title{
        width: 1201px;
        height: 40px;
        margin-left: 140px;
        border-bottom: 0.5px solid #cdcdcd;

        //标题
        .i-t{
            width: 3px;
            height: 40px;
            background-color: @theme-color;
            float: left;
        }
        .bq{
            float: left;
            width: 500px;
            height: 40px;
            line-height: 40px;
            margin-left: 175px;
            //border: 0.5px solid;
            p{
                float: left;
                margin-left: 20px;
                color: grey;
                font-size: 14px;
            }
        }

        .p1{
            font-size: 20px;
            margin-left: 10px;
            color: #3b3b3b;
            float: left;
            line-height: 40px;
        }

        //链接
        .intro-s{
            width: 60px;
            height: 40px;
            float: right;
            margin-right: 5px;
            text-align: right;
            line-height: 40px;

            a{
                text-decoration: none;
                color: grey;
            }
            a:hover{
                color: @theme-color;
                cursor: pointer;
            }
        }

        .intro-i{
            width: 120px;
            height: 40px;
            float: right;
            margin-right: 15px;
            text-align: right;
            line-height: 40px;

            p{
                margin-left: 20px;
                color: #3b3b3b;
                float: left;
                //text-decoration: none;
                //margin-right: 10px;
            }
            .p_active{
                color: @theme-color;
                border-bottom: 2px solid @theme-color;
                //text-decoration: @theme-color;
                cursor: pointer;
            }

        }
    }

    //商品
    .intro-content{
        width: 1230px;
        height: 700px;
        margin-left: 140px;
        //overflow: hidden;
        //border: 0.5px solid;
        position: relative;

        .content-left{
            .box-left();

            img{
                width: 222px;
                height: 660px;
            }
        }
        .content-right-box{
            float: left;
            width: 980px;
            height: 685px;
        }
        .content-right{
            float: left;
            width: 980px;
            height: 685px;
            //position: absolute;
        }
        .content{
            position: absolute;
        }
        .content-left-jiadian{
            .box-left();

            .content-left-div{
                width: 222px;
                height: 320px;
                //border: 0.5px solid;

                img{
                    //margin-left: 5px;
                    width: 222px;
                    height: 320px;
                }
            }
            .d1{
                margin-top: 20px;
            }

            .content-left-div:hover{
                .xuan-fu();
                cursor: pointer;
            }
        }

        .intro-good{
            width:222.5px;
            height: 320px;
            float: left;
            margin-top: 20px;
            background-color: white;
            cursor: pointer;
            margin-left: 22px;

            img{
                width: 200px;
                height: 200px;
                margin-left: 11px;
                margin-top: 5px;
            }
            .p4{
                text-align: center;
                margin-left: 11px;
                margin-right: 11px;
                margin-top: 3px;
            }

            .intro-p1{
                font-size: 14px;
                color: #333333;
            }
            .intro-p2{
                font-size: 13px;
                color: #99a9bf;
            }
            .intro-p3{
                color: @theme-color;
                margin-left: 21px;
                margin-top: 25px;
                width: 50px;
                float: left;
            }

            //收藏
            .s-save{
                float: right;
                border: 0.5px solid #e2e2e2;
                border-radius: 10px;
                width: 70px;
                height: 20px;
                margin-top: 25px;
                margin-right: 25px;
                color: grey;

                .el-icon-star-off{
                    margin-left: 8px;
                    line-height: 20px;
                    float: left;
                }
                p{
                    font-size: 12px;
                    padding-left: 28px;
                    line-height: 20px;
                }
            }
            .s-save:hover{
                color: @theme-color;
            }
        }
        .intro-good:hover{
            .xuan-fu();
        }
    }

</style>