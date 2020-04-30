<template>
    <div class="goods-detail">
        <div class="goods-title">
            <span class="title-span">
                <p class="p1">家电 <i class="el-icon-arrow-right"></i></p>
                <p>电视</p>
            </span>
        </div>

        <div class="goods-info">
            <div class="goods-img">
                <div class="img-div">
                    <div class="productLeft">
                        <!-- 左侧中图  -->
                        <div class="mdImg">
                            <img :src="qall" alt="">
                        </div>
                        <!-- 遮罩层  -->
                        <div v-show="isShow"
                             class="marks"
                             :style="{top:top+'px',left:left+'px'}">
                        </div>
                        <!-- 遮罩层 玻璃板 superMarks -->
                        <div v-if="isPC==false"
                             @touchstart.prevent="enter"
                             @touchend.prevent="leave"
                             @touchmove.prevent="marks"
                             @click.prevent="sub()"
                             class="superMarks" >
                        </div>

                        <div v-if="isPC==true"
                             @mouseenter="enter"
                             @mouseleave="leave"
                             @mousemove="marks"
                             @click.prevent="sub()"
                             class="superMarks" >

                        </div>

                        <div v-show="isShow" class="lgImg">
                            <img :src="qallBig"
                                 alt=""
                                 :style="{top:topLgImg+'px',left:leftLgImg+'px'}"
                            >
                        </div>
                    </div>

                </div>

                <div class="goods-lun">
                    <div class="btn left">
                        <i class="el-icon-arrow-left" @click="left_scroll"></i>
                    </div>

                    <div class="img-lun">
                        <div class="lun-box" :style="{left:box_left,width:width}">
                            <div class="img-box"
                                 :class="{'first-box':index===0}"
                                 v-for="(item,index) in 6">
                                <img src="../../assets/img/intro01.jpg" alt="">
                            </div>
                        </div>
                    </div>

                    <div class="btn right">
                        <i class="el-icon-arrow-right" @click="right_scroll"></i>
                    </div>
                </div>

                <div class="goods-share">
                    <i class="el-icon-share">
                        <p>分享</p>
                    </i>
                    <p class="p-label">举报</p>
                </div>
            </div>

            <div class="goods">
                <ul>
                    <p class="g-name">荣耀9X 麒麟810 4000mAh超强续航 4800万超清夜拍 6.59英寸升降全面屏 全网通8GB+128GB 魅海蓝</p>
                </ul>
                <ul>
                    <p class="g-describe">此商品由商家直接配送至您的家中，敬请等候…（新老包装随机发放）</p>
                </ul>

                <div class="g-price">

                    <div class="price-title">
                        <p>精选</p>
                    </div>

                    <div class="price">
                        <div class="price-1">
                            <p>销售价：</p>
                            <p class="money-icon">￥</p>
                            <p class="money">9999</p>
                        </div>
                        <div class="price-2">
                            <p>促销：</p>
                        </div>
                    </div>

                </div>

                <div class="g-delivery">
                    <p>配送至</p>
                    <div class="address">
                        <p class="add-p" @mouseover="moveIn" @mouseout="moveOut">
                            {{ address }}
                            <i class="el-icon-arrow-down"></i>
                        </p>
                        <p class="p-d">68元包邮</p>
                    </div>

                    <div class="address-item"
                         @mouseover="moveIn"
                         @mouseout="moveOut"
                         v-show="boxShow">
                        <div class="d-select">
                            <p class="shengfen"
                               :class="{active:active[0].show}"
                                @click="handleChange(0)">
                                {{address_item[0].name}}
                                <i class="el-icon-arrow-down"></i>
                            </p>
                            <p class="city"
                               :class="{active:active[1].show}"
                               @click="handleChange(1)">
                                {{address_item[1].name}}
                                <i class="el-icon-arrow-down"></i>
                            </p>
                            <p class="xianqu"
                               :class="{active:active[2].show}"
                               v-show="p_show[0].show"
                               @click="handleChange(2)">
                                {{address_item[2].name}}
                                <i class="el-icon-arrow-down"></i>
                            </p>
                            <p class="xiangzhen"
                               :class="{active:active[3].show}"
                               v-show="p_show[1].show"
                               @click="handleChange(3)">
                                {{address_item[3].name}}
                                <i class="el-icon-arrow-down"></i>
                            </p>
                        </div>

                        <div class="box">
                            <div class="d-s d"
                                 v-show="active[0].show">
                                <ul>
                                    <li v-for="(item,index) in $store.state.address_sheng"
                                        :key="index"
                                        @click="shengClick(index)">
                                        {{item.name}}
                                    </li>
                                </ul>
                            </div>

                            <div class="d-c d" v-show="active[1].show">
                                <ul>
                                    <li v-for="(item,index) in $store.state.address_city"
                                        :key="index"
                                        @click="cityClick(index)">
                                        {{item.name}}
                                    </li>
                                </ul>
                            </div>

                            <div class="d-x d" v-show="active[2].show">
                                <ul>
                                    <li v-for="(item,index) in $store.state.address_xian"
                                        :key="index"
                                        @click="xianClick(index)">
                                        {{item.name}}
                                    </li>
                                </ul>
                            </div>

                            <div class="d-z d" v-show="active[3].show">
                                <ul v-if="this.$store.state.address_zhen.length">
                                    <li v-for="(item,index) in $store.state.address_zhen"
                                        :key="index"
                                        @click="zhenClick(index)">
                                        {{item.name}}
                                    </li>
                                </ul>
                                <ul v-else>
                                    <li @click="subBtn">点击此处完成</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="g-service">
                    <p>服务支持</p>
                    <p class="p-des">
                        本产品由供应商提供发货，并提供售后服务
                    </p>
                    <ul>
                        <li>不支持到店自提</li>
                        <li>支持7天无理由退货（拆封后不支持）</li>
                        <li>不支持货到付款</li>
                    </ul>
                </div>

                <div class="g-select">
                    <div class="s-color">
                        <p>选择颜色</p>
                        <div class="box-color" v-for="item in 4">
                            <img src="../../assets/img/intro01.jpg">
                            <p>魅海蓝</p>
                        </div>
                    </div>

                    <div class="s-kinds">
                        <p>选择版本</p>
                        <div class="box-kinds">
                            <p class="p-kinds" v-for="item in 4">全网通 (6GB 64GB)</p>
                        </div>
                    </div>
                </div>

                <div class="g-Gou">
                    <div class="d-count">
                        <p>购买数量</p>
                        <el-input-number
                                v-model="num"
                                class="el-number"
                                @change="handleChangeNum"
                                size="small"
                                :min="1"
                                :max="10">
                        </el-input-number>
                    </div>

                    <div class="d-btn">
                        <button class="btn-buy">立即购买</button>
                        <button class="btn-add">加入购物车</button>
                        <div class="link-c">
                            <i class="el-icon-star-off"></i>
                            <p>收藏</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import store from '../../store/modules/address'
    export default {
        store,
        data(){
            return{
                color:[{color:''}],
                address: "--请选择--",
                address_item:[{id:0,name:"--请选择--"},
                            {id:1,name:"--请选择--"},
                            {id:2,name:"--请选择--"},
                            {id:3,name:"--请选择--"}],
                active:[{show:true},{show:false},{show:false},{show:false}],
                p_show:[{show:true},{show:true}],
                boxShow:false,
                num: 1,

                isPC:true,
                // 大图片
                qall: require("../../assets/img/intro01.jpg"),
                qallBig: require("../../assets/img/intro01.jpg"),
                isShow:false,   //控制遮罩层marks和大图片是否显示"
                left:0,       //marks左移位置
                top:0,         //marks下移位置
                leftLgImg:0,       //大图lgImg移动的位置
                topLgImg:0,         //大图lgImg移动的位置

                box_left: '0',
                box:0,
                width:'624px'
            }
        },
        methods:{
            subBtn:function () {
                this.address = this.address_item[0].name + this.address_item[1].name +
                    this.address_item[2].name;
                this.boxShow = false;
            },
            moveIn:function(){
                this.boxShow = true;
                //alert("suc")
            },
            moveOut:function () {
                this.boxShow = false;
            },
            handleChange:function(index) {
                if(index === 0) {
                    if(!this.active[0].show){
                        this.active[0].show = true;
                        this.active[1].show = false;
                        this.active[2].show = false;
                        this.active[3].show = false;
                    }
                }else if(index === 1){
                    if(!this.active[1].show){
                        this.active[0].show = false;
                        this.active[1].show = true;
                        this.active[2].show = false;
                        this.active[3].show = false;
                    }
                }else if(index === 2){
                    if(!this.active[2].show){
                        this.active[0].show = false;
                        this.active[1].show = false;
                        this.active[2].show = true;
                        this.active[3].show = false;
                    }
                }else if(index === 3){
                    if(!this.active[3].show){
                        this.active[0].show = false;
                        this.active[1].show = false;
                        this.active[2].show = false;
                        this.active[3].show = true;
                    }
                }
            },
            shengClick:function (index) {
                this.address_item[0].name = this.$store.state.address_sheng[index].name;
                let id = this.$store.state.address_sheng[index].id;

                this.$store.dispatch('getCity',{upid:id}).then(res => {
                    this.address_item[1].name = "--请选择--";
                    this.p_show[0].show = false;
                    this.p_show[1].show = false;
                });
            },
            cityClick:function (index) {
                this.address_item[1].name = this.$store.state.address_city[index].name;
                let id = this.$store.state.address_city[index].id;

                this.$store.dispatch('getXian',{upid:id}).then(res => {
                    this.p_show[0].show = true;
                    this.address_item[2].name = "--请选择--";
                });
            },
            xianClick:function (index) {
                this.address_item[2].name = this.$store.state.address_xian[index].name;
                let id = this.$store.state.address_xian[index].id;

                this.$store.dispatch('getZhen',{upid:id}).then(res => {
                    //console.log(this.$store.state.address_zhen)

                    this.p_show[1].show = true;
                    this.address_item[3].name = "--请选择--";
                });
            },
            zhenClick:function (index) {
                this.address_item[3].name = this.$store.state.address_zhen[index].name;
                this.address = this.address_item[0].name + this.address_item[1].name +
                                this.address_item[2].name + this.address_item[3].name;
                this.boxShow = false;
            },
            select:function () {
                this.$store.dispatch('getSheng',{level:1}).then(res => {
                    this.address_item[0].name = "江苏";

                    this.$store.dispatch('getCity',{upid:2}).then(res => {
                        this.address_item[1].name = "连云港市";

                        this.$store.dispatch('getXian',{upid:36}).then(res => {
                            this.address_item[2].name = "灌云县";

                            this.$store.dispatch('getZhen',{upid:54}).then(res => {
                                this.address_item[3].name = "同兴镇";
                            });
                        });
                    });
                });
            },
            handleChangeNum:function () {

            },

            //鼠标进入和离开
            enter(){
                this.isShow=true;
            },
            leave(){
                this.isShow=false;
            },
            //遮罩层放大镜
            marks(e){
                var marksWidth=200;//marks的宽
                var marksHeight=200;//marks的高
                if(this.isPC){
                    //PC端
                    this.left=e.offsetX-marksWidth/2;
                    this.top=e.offsetY-marksHeight/2;

                    if(this.left<0){
                        this.left=0;
                    }else if(this.left>278){
                        this.left=278;
                    }
                    if(this.top<0){
                        this.top=0;
                    }else if(this.top>278){
                        this.top=278;
                    }

                    //大d图片除以小的图片的宽高
                    this.leftLgImg=-this.left*2;
                    this.topLgImg=-this.top*2;
                }
            },
            //图片移动
            left_scroll:function () {
                let f = 6*105 + this.box;//右边剩余长度
                if(f > 0){
                    if(f > 420){
                        this.box = this.box-105;
                        this.box_left = this.box + 'px';
                    }
                }
            },
            right_scroll:function () {
                if(this.box < 0){
                    this.box = this.box+105;
                    this.box_left = this.box + 'px';
                }
            }
        },
        mounted() {
            this.select();

            if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,)) {
                this.isPC = false;

            } else {
                console.log('PC端')

            }
        }
    }
</script>

<style scoped lang="less">
    *{
        margin: 0;
        padding: 0;
    }
    .goods-detail{
        width: 1207px;
        height: 750px;
        margin-left: 140px;

        .goods-title{
            width: 100%;
            height: 50px;
            background-color: #F2F2F2;
            //border-bottom: 0.5px solid #c8c8c8;

            .title-span{
                p{
                    line-height: 50px;
                    float: left;
                    margin-left: 10px;
                }
                .p1{
                    margin-left: 20px;
                }
            }
        }

        .goods-info{
            width: 100%;
            height: 650px;
            margin-top: 20px;

            .goods-img{
                width: 480px;
                height: 650px;
                float: left;
                //border: 0.5px solid #ebebeb;

                .img-div{
                    width: 480px;
                    height: 480px;
                    border: 0.5px solid #ebebeb;

                    /* 左侧大小图样式 160*91  320*181*/
                    .productLeft{

                        width:160px;
                        position: relative;

                    }
                    /* 左侧中图 */
                    .mdImg,.mdImg>img{
                        width:478px;
                        height:478px;
                        //margin-left: 15px;
                    }
                    /*遮罩层superMarks */
                    .superMarks{
                        width:478px;
                        height:478px;
                        background-color:rgba(220, 220, 220, 0);
                        position:absolute;
                        top:0;
                        left:0;

                    }
                    /* 遮罩层 */
                    .marks{
                        width:200px;
                        height:200px;
                        position:absolute;
                        background-color:rgba(220, 220, 220, 0.5);
                        cursor: pointer;
                        /*top:0px;  //内联设置了动态的top，left
                        left:0px;*/
                    }

                    /* 左侧隐藏大图 */
                    .lgImg{
                        width:500px;
                        height:500px;
                        overflow: hidden;
                        position:absolute;
                        top:0;
                        left:500px;
                        border:1px solid #aaa;
                        background-color:#fff;
                        z-index: 999;
                    }
                    .lgImg img{
                        width:956px;
                        height:956px;
                        position:absolute;
                        /*top:100px;
                        left:100px;*/
                    }
                }

                .goods-lun{
                    width: 480px;
                    height: 82px;
                    //border: 0.5px solid;
                    margin-top: 10px;
                    .btn{
                        width: 40px;
                        height: 80px;
                        background-color: #F2F2F2;
                        i{
                            font-size: 30px;
                            line-height: 80px;
                            width: 40px;
                            text-align: center;
                            font-weight: bold;
                            color: #bebebe;
                        }
                    }
                    .btn:hover{
                        cursor: pointer;
                        i{
                            color: grey;
                        }
                    }
                    .left{
                        float: left;
                    }
                    .right{
                        float: right;
                    }
                    .img-lun{
                        float: left;
                        width: 399px;
                        height: 80px;
                        //border: 0.5px solid;
                        overflow: hidden;

                        .lun-box{
                            height: 80px;
                            transition: left 1.5s;
                            position: relative;

                            .img-box{
                                width: 79px;
                                height: 79px;
                                //border: 0.5px solid;
                                float: left;
                                margin-left: 26px;
                                text-align: center;
                                line-height: 79px;
                                img{
                                    width: 78px;
                                    height: 78px;
                                }
                            }
                            .img-box:hover{
                                cursor: pointer;
                                border: 0.5px solid #F64654;
                            }
                            .first-box{
                                margin-left: 0;
                                border: 0.5px solid #F64654;
                            }
                        }
                    }
                }

                .goods-share{
                    width: 100%;
                    height: 40px;

                    i{
                        color: #EC595C;
                        font-size: 26px;
                        width: 55px;
                        float: left;
                        margin-left: 50px;
                        margin-top: 10px;
                        p{
                            font-size: 13px;
                            float: right;
                            line-height: 26px;
                            margin-left: 2px;
                            color: grey;
                        }
                    }
                    i:hover{
                        cursor: pointer;
                        p{
                            color: #EC595C;
                        }
                    }

                    .p-label{
                        float: right;
                        margin-top: 10px;
                        color: grey;
                        font-size: 14px;
                        line-height: 26px;
                    }
                    .p-label:hover{
                        cursor: pointer;
                        color: #EC595C;
                    }
                }
            }

            .goods{
                width: 705px;
                height: 600px;
                float: left;
                padding-left: 20px;
                //border: 0.5px solid;

                ul{
                    margin-top: 10px;
                }
                //商品名
                .g-name{
                    color: #666666;
                    font-weight: bold;
                }
                .g-describe{
                    font-size: 14px;
                }

                //价格
                .g-price{
                    width: 100%;
                    height: 120px;
                    background-color: #F9F9F9;
                    margin-top: 20px;

                    .price-title{
                        width: 100%;
                        height: 40px;
                        background-color: #F64654;

                        p{
                            line-height: 40px;
                            font-size: 18px;
                            font-weight: bold;
                            color: white;
                            margin-left: 20px;
                        }
                    }
                    .price{
                        width: 100%;
                        height: 80px;
                        //border: 0.5px solid;

                        .price-1{
                            float: left;
                            margin-left: 20px;
                            width: 45%;
                            p{
                                float: left;
                                height: 80px;
                                line-height: 80px;
                                color: grey;
                                font-size: 14px;
                            }
                            .money-icon{
                                color: #EC595C;
                                font-size: 18px;
                            }
                            .money{
                                font-size: 26px;
                                color: #EC595C;
                                font-weight: bold;
                                margin-left: 3px;
                                line-height: 75px;
                            }
                        }
                        .price-2{
                            float: left;
                        }
                    }

                    .price-2{
                        float: left;
                        p{
                            line-height: 80px;
                            width: 60px;
                            float: left;
                            color: grey;
                            font-size: 14px;
                        }
                    }
                }

                .g-function(){
                    color: grey;
                    margin-left: 20px;
                    font-size: 14px;
                    float: left;
                    line-height: 30px;
                }
                //配送地址
                .g-delivery{
                    margin-top: 10px;
                    width: 100%;
                    height: 40px;

                    p{
                        .g-function();
                    }

                    .address{
                        float: left;
                        width: 450px;
                        height: 30px;
                        //border: 0.5px solid #a5a5a5;
                        margin-left: 10px;

                        .add-p{
                            float: left;
                            margin-left: 3px;
                            border: 0.5px solid #a5a5a5;
                            padding-left: 5px;
                            z-index: 100;
                            position: relative;
                            cursor: pointer;
                        }
                        .p-d{
                            width: 70px;
                            font-size: 13px;
                            color: #5c5c5c;
                        }

                        .el-icon-arrow-down{
                            float: right;
                            line-height: 30px;
                            margin-right: 5px;
                            margin-left: 5px;
                            font-size: 18px;
                            color: #a5a5a5;
                        }
                    }

                    .address-item{
                        width: 550px;
                        height: 280px;
                        position: absolute;
                        z-index: 99;
                        box-shadow: 0 1px 2px 2px rgba(188, 188, 188, 0.4);
                        margin-top: 30px;
                        margin-left: 75px;
                        border: 0.5px solid #a5a5a5;
                        background-color: white;

                        .d-select{
                            margin-top: 10px;
                            float: left;
                            padding-left: 5px;

                            p{
                                border: 0.5px solid #a5a5a5;
                                color: #5E69AD;
                                font-size: 14px;
                                padding-left: 5px;
                                margin-left: 10px;
                                cursor: pointer;

                                i{
                                    font-size: 18px;
                                    margin-right: 5px;
                                    margin-left: 5px;
                                    color: #a5a5a5;
                                    line-height: 30px;
                                    float: right;
                                }
                            }

                            .active{
                                border-top: 2px solid #E43033;
                                border-left: 2px solid #E43033;
                                border-right: 2px solid #E43033;
                                border-bottom: none;
                            }
                        }

                        .box{
                            width: 100%;
                            height: auto;
                            float: left;
                            //border-top: 2px solid #E43033;
                        }

                        .d{
                            position: absolute;
                            background-color: white;
                            border-top: 2px solid #E43033;

                            ul{
                                width: 500px;
                                margin-top: 10px;
                                margin-left: 10px;
                                //border: 2px solid #E43033;

                                li{
                                    list-style: none;
                                    float: left;
                                    margin-left: 15px;
                                    width: 110px;
                                    margin-top: 5px;
                                    font-size: 14px;
                                    //border: 0.5px solid red;
                                    color: #5E69AD;
                                }
                                li:hover{
                                    color: #E43033;
                                    cursor: pointer;
                                }
                            }
                        }
                    }
                }

                //服务支持
                .g-service{
                    width: 100%;
                    height: 70px;
                    margin-top: 10px;

                    p{
                        .g-function();
                    }
                    .p-des{
                        .g-function();
                        font-size: 13px;
                        color: #4a4a4a;
                    }
                    ul{
                        width: 500px;
                        float: left;
                        margin-left: 80px;
                        li{
                            float: left;
                            color: #4a4a4a;
                            margin-left: 30px;
                            font-size: 13px;
                        }
                    }
                }

                //选择颜色、版本
                .g-select{
                    width: 100%;
                    height: 120px;
                    border-top: 0.5px solid #e2e2e2;

                    p{
                        .g-function();
                        line-height: 50px;
                    }

                    .s-color{
                        width: 100%;
                        height: 50px;
                        margin-top: 15px;

                        .box-color{
                            width: 100px;
                            height: 50px;
                            background-color: #F7F7F7;
                            float: left;
                            margin-left: 15px;
                            border: 0.5px solid #b0b0b0;

                            img{
                                width: 40px;
                                height: 40px;
                                margin-top: 5px;
                                margin-left: 5px;
                                float: left;
                            }
                            p{
                                font-size: 14px;
                                width: 50px;
                                height: 50px;
                                position: absolute;
                                margin-left: 48px;
                                text-align: center;
                                color: #666666;
                            }
                        }
                    }

                    .s-kinds{
                        width: 100%;
                        height: 50px;
                        padding-top: 5px;
                        //margin-top: 10px;
                        p{
                            .g-function();
                            line-height: 35px;
                            margin-top: 10px;
                        }

                        .box-kinds{
                            width: 600px;
                            height: 50px;
                            //border: 0.5px solid #b0b0b0;
                            float: left;
                            margin-left: 5px;

                            .p-kinds{
                                width: 135px;
                                line-height: 35px;
                                font-size: 13px;
                                color: #4e4e4e;
                                text-align: center;
                                margin-left: 10px;
                                margin-top: 10px;
                                border: 0.5px solid #b0b0b0;
                            }
                        }
                    }
                }

                //数量、按钮加入购物车、收藏
                .g-Gou{
                    width: 100%;
                    height: 120px;

                    //数量
                    .d-count{
                        margin-top: 10px;
                        height: 40px;
                        p{
                            .g-function();
                        }

                        .el-number{
                            margin-left: 15px;
                        }
                    }

                    //
                    .d-btn{
                        height: 50px;
                        margin-left: 90px;
                        margin-top: 10px;

                        .btn-buy{
                            width: 170px;
                            height: 50px;
                            float: left;
                            font-size: 18px;
                            font-weight: bold;
                            color: #EC595C;
                            background-color: #FFF8F9;
                            box-shadow: none;
                            border: 0.5px solid #EC595C;
                        }
                        .btn-buy:hover{
                            background-color: white;
                            cursor: pointer;
                        }

                        .btn-add{
                            width: 170px;
                            height: 50px;
                            float: left;
                            font-size: 18px;
                            font-weight: bold;
                            margin-left: 10px;
                            background-color: #EC595C;
                            color: white;
                            box-shadow: none;
                            border: none;
                        }
                        .btn-add:hover{
                            background-color: #ec7d7a;
                            cursor: pointer;
                        }

                        .link-c{
                            width: 50px;
                            height: 50px;
                            float: left;
                            border: 0.5px solid #cbcbcb;
                            margin-left: 10px;

                            i{
                                font-size: 22px;
                                color: #a9a9a9;
                                width: 50px;
                                text-align: center;
                                margin-top: 5px;
                            }
                            p{
                                width: 50px;
                                text-align: center;
                                font-size: 13px;
                                color: #a9a9a9;
                            }
                        }
                    }
                    .link-c:hover{
                        cursor: pointer;
                        i{
                            color: #EC595C;
                        }
                        p{
                            color: grey;
                        }
                    }
                }
            }
        }
    }
</style>