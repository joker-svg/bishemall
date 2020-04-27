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
                    <img src="../../assets/img/intro01.jpg" alt="">
                </div>
                <div class="goods-lun">
                    <div class="btn left"><i class="el-icon-arrow-left"></i></div>
                    <div class="img-lun"></div>
                    <div class="btn right"><i class="el-icon-arrow-right"></i></div>
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

                </div>

                <div class="g-select">

                </div>

                <div class="g-Gou">

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
                boxShow:false
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
                var id = this.$store.state.address_sheng[index].id;

                this.$store.dispatch('getCity',{upid:id}).then(res => {
                    this.address_item[1].name = "--请选择--";
                    this.p_show[0].show = false;
                    this.p_show[1].show = false;
                });
            },
            cityClick:function (index) {
                this.address_item[1].name = this.$store.state.address_city[index].name;
                var id = this.$store.state.address_city[index].id;

                this.$store.dispatch('getXian',{upid:id}).then(res => {
                    this.p_show[0].show = true;
                    this.address_item[2].name = "--请选择--";
                });
            },
            xianClick:function (index) {
                this.address_item[2].name = this.$store.state.address_xian[index].name;
                var id = this.$store.state.address_xian[index].id;

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
            }
        },
        mounted() {
            this.select();
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
        height: 700px;
        border: 0.5px solid #c8c8c8;
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
            height: 600px;
            margin-top: 20px;
            border: 0.5px solid;

            .goods-img{
                width: 480px;
                height: 600px;
                float: left;
                border: 0.5px solid #ebebeb;

                .img-div{
                    width: 480px;
                    height: 480px;
                    border: 0.5px solid #ebebeb;
                    img{
                        margin-top: 1px;
                        margin-left: 1px;
                        width: 478px;
                        height: 478px;
                    }
                }

                .goods-lun{
                    width: 480px;
                    height: 102px;
                    //border: 0.5px solid;
                    margin-top: 10px;
                    .btn{
                        width: 40px;
                        height: 100px;
                        background-color: #F2F2F2;
                        i{
                            font-size: 30px;
                            line-height: 100px;
                            width: 40px;
                            text-align: center;
                            font-weight: bold;
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
                        height: 100px;
                        border: 0.5px solid;
                    }
                }
            }

            .goods{
                width: 705px;
                height: 600px;
                float: left;
                padding-left: 20px;
                border: 0.5px solid;

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
                //配送地址
                .g-delivery{
                    margin-top: 10px;

                    p{
                        color: grey;
                        margin-left: 20px;
                        font-size: 14px;
                        float: left;
                        line-height: 30px;
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
            }
        }
    }
</style>