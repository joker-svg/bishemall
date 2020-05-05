<template>
    <div class="order-whole">
        <div class="order-header">
            <div class="title header" v-if="this.$store.state.user.userInfo.token">
                <p>购物车</p>
                <i class="el-icon-shopping-cart-2"></i>
            </div>

            <div class="tishi header" v-else>
                <p>
                    <i class="el-icon-warning"></i>
                    您还没有登录！登录后可结算购物车中的商品
                </p>
                <div class="login-btn">
                    立即登录
                </div>
            </div>
        </div>

        <div class="order-content">
            <div class="content-header">
                <p class="p-label">全部商品</p>

                <div class="c-address">
                    <div class="order-delivery">
                        <p class="p2" @mouseover="moveIn" @mouseout="moveOut">
                            {{ address }}
                            <i class="el-icon-arrow-down"></i>
                        </p>
                        <p class="p1">配送至：</p>
                    </div>

                    <div class="address-item"
                         @mouseover="moveIn"
                         @mouseout="moveOut"
                         v-show="boxShow">

                        <div class="item-select">
                            <p class="shengfen"
                               :class="{active:active[0].show}"
                               @click="handleChange(0)">
                                {{address_item[0].name}}
                                <i class="el-icon-arrow-down"></i>
                            </p>
                            <p class="city"
                               :class="{active:active[1].show}"
                               v-show="p_show[0].show"
                               @click="handleChange(1)">
                                {{address_item[1].name}}
                                <i class="el-icon-arrow-down"></i>
                            </p>
                            <p class="xianqu"
                               :class="{active:active[2].show}"
                               v-show="p_show[1].show"
                               @click="handleChange(2)">
                                {{address_item[2].name}}
                                <i class="el-icon-arrow-down"></i>
                            </p>
                            <p class="xiangzhen"
                               :class="{active:active[3].show}"
                               v-show="p_show[2].show"
                               @click="handleChange(3)">
                                {{address_item[3].name}}
                                <i class="el-icon-arrow-down"></i>
                            </p>
                        </div>

                        <div class="box">
                            <div class="d-s d"
                                 v-show="active[0].show">
                                <ul>
                                    <li v-for="(item,index) in $store.state.address.address_sheng"
                                        :key="index"
                                        @click="shengClick(index)">
                                        {{item.name}}
                                    </li>
                                </ul>
                            </div>

                            <div class="d-c d" v-show="active[1].show">
                                <ul>
                                    <li v-for="(item,index) in $store.state.address.address_city"
                                        :key="index"
                                        @click="cityClick(index)">
                                        {{item.name}}
                                    </li>
                                </ul>
                            </div>

                            <div class="d-x d" v-show="active[2].show">
                                <ul>
                                    <li v-for="(item,index) in $store.state.address.address_xian"
                                        :key="index"
                                        @click="xianClick(index)">
                                        {{item.name}}
                                    </li>
                                </ul>
                            </div>

                            <div class="d-z d" v-show="active[3].show">
                                <ul v-if="this.$store.state.address.address_zhen.length">
                                    <li v-for="(item,index) in $store.state.address.address_zhen"
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
            </div>

            <div class="content" v-if="this.$store.state.user.userInfo.token">
                <div class="con-1">
                    <el-checkbox
                        @change="changeCheckedAll"
                        v-model="checked"
                        class="el-checkbox2">
                        全选
                    </el-checkbox>
                    <p class="p1">商品</p>
                    <p class="p2">单价(元)</p>
                    <p class="p3">数量</p>
                    <p class="p4">金额(元)</p>
                    <p class="p5">操作</p>
                </div>

                <div class="con-2">
                    <el-checkbox
                        @change="changeCheckedAll"
                        v-model="checked"
                        class="el-checkbox1">
                    </el-checkbox>
                    <p>平台自营</p>
                </div>

                <div class="con-3">
                    <div v-if="$store.state.orderCart.listCart.length>0">
                        <div v-for="(item,index) in $store.state.orderCart.listCart"
                             :key="index"
                             class="order-item">
                            <div class="c3-title">
                                <p>购满3件，即可享受换购优惠 </p>
                            </div>

                            <div class="c3-con">
                                <el-checkbox
                                        @change="changeCheckedItem"
                                        checked="checked"
                                        v-model="$store.state.orderCart.listCart[index].order_select"
                                        class="el-checkbox">
                                </el-checkbox>
                                <div class="d-img">
                                    <img :src="item.order_url" alt="">
                                </div>

                                <div class="order-name">
                                    <p>{{item.order_name}}</p>
                                    <p>{{item.order_descript}}</p>
                                    <i class="el-icon-s-tools"></i>
                                    <p class="p-i">服务</p>
                                </div>

                                <div class="order-spec">
                                    <p>{{item.order_color}}</p>
                                    <p>{{item.order_spec}}</p>
                                </div>

                                <p class="price">￥{{item.order_price}}</p>

                                <div >
                                    <el-input-number
                                            class="el-input"
                                            v-model="$store.state.orderCart.listCart[index].order_count"
                                            controls-position="right"
                                            @change="handleChangeCount(index)"
                                            size="small"
                                            style="width: 80px;height: 30px;float: left"
                                            :min="1" :max="10">
                                    </el-input-number>
                                </div>

                                <p class="t-Price">￥{{item.order_price*$store.state.orderCart.listCart[index].order_count}}</p>

                                <div class="edit">
                                    <el-tooltip class="item" effect="dark" content="删除" placement="top">
                                        <el-button>
                                            <i class="el-icon-close" @click="deleteClick(index)"></i>
                                        </el-button>
                                    </el-tooltip>
                                    <p>移到我的收藏</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="box">
                            <img src="../../assets/img/empty.gif" alt="">
                            <p>购物车快饿扁了 /(ToT)/~~</p>
                            <p>去买些东西再回来看看</p>
                        </div>
                    </div>

                    <div class="order-total" :class="{'is_fixed':isFixed}">
                        <el-checkbox
                            @change="changeCheckedAll"
                            v-model="checked"
                            class="el-checkbox3">
                            全选
                        </el-checkbox>

                        <p class="p-delete left">
                            <i class="el-icon-delete"></i>
                            删除
                        </p>

                        <p class="p-to left">
                            移到收藏夹
                        </p>

                        <p class="p-del-all left">
                            清理购物车
                        </p>

                        <div class="end-btn right" @click="btnPay">
                            <p>去结算</p>
                        </div>

                        <div class="d-total-price right">
                            <p class="p1">
                                总价：<span v-text="sumPrice">￥</span>
                            </p>
                            <p class="p2">
                                已优惠：<span>￥0.00</span>
                            </p>
                        </div>

                        <p class="p-des right">
                            已选择<span style="color: red" v-text="ischeckedCount"></span>件商品
                        </p>
                    </div>
                </div>
<!--                <div class="d-flag" id="d-flag" ref="orderFlag"></div>-->
            </div>
            <div class="content-none" v-else>
                <div class="box">
                    <img src="../../assets/img/LT.png" alt="">
                    <p>您还未登录哦 /(ToT)/~~ 请先登录再回来看看</p>
                </div>
            </div>
        </div>
        <div class="d-flag" id="d-flag" ref="orderFlag"></div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                list:[{
                    id:0,
                    order_select:true,
                    order_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ccd09671448c4cdb4a3817f68f788662.jpg?thumb=1&w=250&h=250&f=webp&q=90',
                    order_name:'',
                    order_descript:'',
                    order_color:'',
                    order_spec:'',
                    order_count:0,
                    order_price:0,

                }],
                checked:true,
                count:1,
                checkedCount:0,
                address: "江苏省连云港市灌云县同兴镇",
                address_item:[{id:0,name:"--请选择--"},
                    {id:1,name:"--请选择--"},
                    {id:2,name:"--请选择--"},
                    {id:3,name:"--请选择--"}],
                active:[{show:true},{show:false},{show:false},{show:false}],
                p_show:[{show:false},{show:false},{show:false}],
                boxShow:false,
                allchecked: this.$store.state.orderCart.listCart.every(item => item.order_select),
                isFixed:false

            }
        },
        methods:{
            handleChangeCount:function(index){},
            deleteClick:function (index) {
                //this.list_cart.splice(index,1);
                let order_id = this.$store.state.orderCart.listCart[index].order_id
                this.$store.state.orderCart.listCart.splice(index,1);
                this.getTotalPrice();

                this.$store.dispatch('deleteCart',{
                    orderId: order_id
                });
            },
            deleteAll:function () {
                if(this.$store.state.orderCart.listCart.length>0){
                    this.$store.dispatch('deleteAllCart',{
                        orderId: 0
                    });
                    this.list_cart.splice(0);
                    this.$store.state.orderCart.listCart.splice(0);
                    this.getTotalPrice();
                }
            },
            getTotalPrice:function () {
                this.$store.dispatch('totalPrice');
            },
            changeCheckedAll:function () {
                let flag = !this.checkedAll;
                this.$store.state.orderCart.listCart.forEach(item => item.order_select = flag);
            },
            changeCheckedItem:function(){
                if(this.checkedAll){
                    this.checked = true;
                }else{
                    this.checked = false;
                }
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
                this.address_item[0].name = this.$store.state.address.address_sheng[index].name;
                let id = this.$store.state.address.address_sheng[index].id;

                this.$store.dispatch('getCity',{upid:id}).then(res => {
                    this.address_item[1].name = "--请选择--";
                    this.p_show[0].show = true;
                    this.p_show[1].show = false;
                    this.p_show[2].show = false;
                });
            },
            cityClick:function (index) {
                this.address_item[1].name = this.$store.state.address.address_city[index].name;
                let id = this.$store.state.address.address_city[index].id;

                this.$store.dispatch('getXian',{upid:id}).then(res => {
                    this.p_show[1].show = true;
                    this.address_item[2].name = "--请选择--";
                });
            },
            xianClick:function (index) {
                this.address_item[2].name = this.$store.state.address.address_xian[index].name;
                let id = this.$store.state.address.address_xian[index].id;

                this.$store.dispatch('getZhen',{upid:id}).then(res => {
                    //console.log(this.$store.state.address_zhen)

                    this.p_show[2].show = true;
                    this.address_item[3].name = "--请选择--";
                });
            },
            zhenClick:function (index) {
                this.address_item[3].name = this.$store.state.address.address_zhen[index].name;
                this.address = this.address_item[0].name + this.address_item[1].name +
                    this.address_item[2].name + this.address_item[3].name;
                this.boxShow = false;
            },
            subBtn:function () {
                this.address = this.address_item[0].name + this.address_item[1].name +
                    this.address_item[2].name;
                this.boxShow = false;
            },
            btnPay:function () {
                let orderCartList = [];
                let arr = {
                    product_id:0,
                    username:'',
                    order_name:'',
                    order_descript:'',
                    order_url:'',
                    order_price:0,
                    order_count:0,
                    order_spec:'',
                    order_color:'',
                    order_address:''
                };
                let orderList = this.$store.state.orderCart.listCart;
                orderList.forEach((item,index) => {
                    if(item.order_select){
                        arr.product_id = item.product_id;
                        arr.username = item.username;
                        arr.order_name = item.order_name;
                        arr.order_descript = item.order_descript;
                        arr.order_url = item.order_url;
                        arr.order_price = item.order_price;
                        arr.order_count = item.order_count;
                        arr.order_spec = item.order_spec;
                        arr.order_color = item.order_color;
                        arr.order_address  = item.order_address;
                        orderCartList.push(arr);
                    }
                });
                //console.log(orderCartList);
                this.$store.dispatch('addPayCart',orderCartList).then(res => {
                    this.$message.success("生成订单成功！");
                });
            },

            //
            handelScroll:function () {
                if(this.$refs.orderFlag.getBoundingClientRect().top > 474){
                    this.isFixed = true;
                }else{
                    this.isFixed = false;
                }
                //console.log('距离顶部高度',this.$refs.orderFlag.getBoundingClientRect().top)
            }
        },
        computed:{
            sumPrice(){
                let price = 0;
                this.$store.state.orderCart.listCart.forEach((item,index) => {
                    if(item.order_select){
                        price += item.order_price*item.order_count;
                    }
                });
                return "￥" + price.toFixed(2);
            },
            checkedAll(){
                let orderList = this.$store.state.orderCart.listCart;
                //console.log(orderList.every(item => item.order_select));
                //every方法是每一项为true时，才为true
                return orderList.every(item => item.order_select);
            },
            ischeckedCount(){
                let orderList = this.$store.state.orderCart.listCart;
                let count = 0;
                orderList.forEach(item => {
                    if(item.order_select){
                        count++;
                    }
                });
                return count;
            },
        },
        mounted() {
            //console.log(this.$store.state.orderCart.listCart[0].order_select);
            window.addEventListener('scroll', this.handelScroll);
        },
        //回调中移除监听
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style scoped lang="less">
    *{
        margin: 0;
        padding: 0;
    }

    .order-whole{
        width: 100%;
    }

    .order-header{
        height: 100px;
        padding-left: 140px;

        .header{
            width: 1185px;
            height: 60px;
            position: absolute;
            margin-top: 20px;
        }
        .tishi{
            background-color: #FFFDEE;
            padding-left: 20px;
            border: 0.5px solid #EDD28B;
            p{
                line-height: 60px;
                color: #FFA400;
                float: left;

                i{
                    color: #FFCC00;
                }
            }
            .login-btn{
                width: 80px;
                height: 30px;
                float: left;
                border: 0.5px solid;
                background-color: #E43F42;
                color: white;
                text-align: center;
                margin-top: 15px;
                line-height: 30px;
                border-radius: 5px;
                margin-left: 10px;
            }
        }

        .title{
            border-left: 4px solid #E43F42;
            padding-left: 50px;

            p{
                font-weight: bold;
                font-size: 30px;
                line-height: 60px;
                color: #E43F42;
                //color: #6a6a6a;
                float: left;
            }
            i{
                float: left;
                margin-left: 20px;
                font-size: 34px;
                line-height: 65px;
                //color: #6a6a6a;
                color: #E43F42;
            }
        }
    }

    .order-content{
        width: 100%;
        height: auto;

    }

    .content-header{
        width: 1205px;
        height: 50px;
        margin-left: 140px;
        //border-bottom: 0.5px solid #a2a2a2;

        .p-label{
            float: left;
            color: #E2231A;
            line-height: 40px;
            margin-top: 10px;
            font-weight: bold;
            border-bottom: 1px solid #E2231A;
        }
        .c-address{
            float: right;
            width: 400px;
            height: 40px;
            //border: 0.5px solid;
            line-height: 40px;
            margin-top: 10px;

            .g-function(){
                color: grey;
                margin-left: 20px;
                font-size: 14px;
                float: left;
                line-height: 30px;
            }
            //配送地址
            .order-delivery{
                float: left;
                width: 100%;
                height: 40px;
                //border: 0.5px solid red;

                .p1{
                    color: grey;
                    font-size: 14px;
                    float: right;
                    width: 70px;
                    line-height: 30px;
                }
                .p2{
                    float: right;
                    border: 0.5px solid #a5a5a5;
                    cursor: pointer;
                    padding-left: 5px;
                    padding-right: 5px;
                    font-size: 13px;
                    color: grey;
                    height: 30px;
                    line-height: 30px;
                }

            }
            .address-item{
                width: 500px;
                height: 280px;
                position: absolute;
                z-index: 99;
                box-shadow: 0 1px 2px 2px rgba(188, 188, 188, 0.4);
                border: 0.5px solid #a5a5a5;
                background-color: white;
                cursor: pointer;
                margin-top: 30px;
                margin-left: -101px;

                .item-select{
                    margin-top: 10px;
                    float: left;
                    padding-left: 5px;

                    p{
                        border: 0.5px solid #a5a5a5;
                        color: #5E69AD;
                        font-size: 13px;
                        padding-left: 5px;
                        padding-right: 3px;
                        height: 20px;
                        line-height: 20px;
                        margin-left: 10px;
                        cursor: pointer;
                        float: left;
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

                    .d{
                        position: absolute;
                        background-color: white;
                        border-top: 2px solid #E43033;

                        ul{
                            width: 460px;
                            margin-top: 10px;
                            margin-left: 10px;
                            //border: 2px solid #E43033;

                            li{
                                list-style: none;
                                float: left;
                                margin-left: 10px;
                                width: 80px;
                                height: 25px;
                                line-height: 25px;
                                text-align: center;
                                margin-top: 5px;
                                font-size: 13px;
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

    .content{
        height: 400px;
        width: 100%;
        .con-1{
            width: 1205px;
            height: 50px;
            background-color: #F3F3F3;
            margin-left: 140px;
            margin-top: 1px;
            //border: 0.5px solid;

            .el-checkbox2{
                //width: 40px;
                line-height: 50px;
                text-align: center;
                margin-left: 14px;
                float: left;
            }

            p{
                float: left;
                font-size: 13px;
                color: grey;
                line-height: 50px;
            }
            .p1{margin-left: 90px}
            .p2{margin-left: 490px}
            .p3{margin-left: 75px}
            .p4{margin-left: 90px}
            .p5{margin-left: 165px}
        }
        .con-2{
            width: 1205px;
            height: 40px;
            margin-left: 140px;
            border-bottom: 2px solid #AAAAAA;

            .el-checkbox1{
                width: 40px;
                line-height: 40px;
                text-align: center;
                float: left;
            }
            p{
                background-color: #E2231A;
                color: white;
                font-size: 13px;
                float: left;
                height: 20px;
                width: 60px;
                margin-top: 10px;
                text-align: center;
            }
        }
        .con-3{
            width: 79.3%;
            //height: auto;
            margin-left: 140px;
            //border: 0.5px solid grey;
            .box{
                margin-left: 450px;
                margin-top: 50px;
                margin-bottom: 50px;
                img{
                    width: 250px;
                    height: 200px;
                }
                p{
                    color: grey;
                    font-size: 14px;
                    margin-left: 80px;
                }
            }

            .order-item{
                border-left: 0.5px solid #e5e5e5;
                border-bottom: 0.5px solid #999999;
                border-right: 0.5px solid #e5e5e5;
                .c3-title{
                    //width: 98%;
                    height: 40px;
                    margin-left: 40px;
                    border-bottom: 0.5px solid #e5e5e5;

                    p{
                        line-height: 40px;
                        font-size: 13px;
                        color: grey;
                    }
                }

                .c3-con{
                    height: 120px;
                    //border-bottom: 0.5px solid;
                    //flex: auto;
                    .div-g(){
                        height: 100px;
                        float: left;
                        margin-top: 10px;
                        //border: 0.5px solid;
                    }

                    .el-checkbox{
                        width: 40px;
                        line-height: 120px;
                        text-align: center;
                        //border: 0.5px solid;
                        float: left;
                    }
                    .d-img{
                        .div-g();
                        width: 100px;
                        border: 0.5px solid #dcdcdc;
                        //margin-left: 10px;
                        img{
                            width: 99px;
                            height: 99px;
                            margin-left: 0.5px;
                            margin-top: 0.5px;
                        }
                    }

                    .order-name{
                        .div-g();
                        width: 220px;
                        margin-left: 10px;

                        p{
                            margin-top: 5px;
                            font-size: 13px;
                            color: #3a3a3a;
                        }
                        i{
                            font-size: 20px;
                            float: left;
                            color: #E2231A;
                            margin-top: 10px;
                        }
                        .p-i{
                            float: left;
                            color: #E2231A;
                            margin-top: 10px;
                            line-height: 20px;
                            margin-left: 3px;
                        }
                    }

                    .order-spec{
                        .div-g();
                        width: 220px;
                        margin-left: 20px;
                        p{
                            font-size: 13px;
                            color: grey;
                            margin-top: 5px;
                        }
                    }

                    .price{
                        .div-g();
                        width: 80px;
                        margin-left: 40px;
                        line-height: 100px;
                        text-align: center;
                        font-size: 14px;
                        color: grey;
                    }

                    .el-input{
                        .div-g();
                        margin-left: 40px;
                        margin-top: 45px;
                    }

                    .t-Price{
                        .div-g();
                        width: 80px;
                        margin-left: 40px;
                        font-weight: bold;
                        line-height: 100px;
                        text-align: center;
                        font-size: 14px;
                        color: #333333;
                    }

                    .edit{
                        .div-g();
                        width: 140px;
                        float: right;
                        text-align: center;
                        color: #7A6E6E;
                        .el-button{
                            height: 15px;
                            margin-top: 20px;
                            border: none;
                        }

                        i{
                            color: grey;
                            //margin-top: 20px;
                        }
                        i:hover{
                            cursor: pointer;
                            color: #E2231A;
                        }

                        p{
                            color: grey;
                            font-size: 13px;
                            margin-top: 10px;
                        }
                        p:hover{
                            cursor: pointer;
                            color: #E2231A;
                        }
                    }
                }
            }

            .order-total{
                //margin-left: 140px;
                width: 100%;
                height: 50px;
                margin-top: 20px;
                border: 0.5px solid #e3e3e3;

                .el-checkbox3{
                    //width: 40px;
                    line-height: 50px;
                    text-align: center;
                    margin-left: 14px;
                    float: left;
                }

                .left{
                    float: left;
                    line-height: 50px;
                    font-size: 13px;
                    color: grey;
                    margin-left: 10px;
                }
                .left:hover{
                    cursor: pointer;
                    color: #E64347;
                }
                .right{
                    float: right;
                }

                .end-btn{
                    width: 100px;
                    height: 50px;
                    background-color: #E64347;
                    cursor: pointer;

                    p{
                        line-height: 50px;
                        text-align: center;
                        color: white;
                        font-size: 18px;
                        font-weight: bold;
                    }
                }

                .d-total-price{
                    width: 150px;
                    height: 50px;
                    //border: 0.5px solid;
                    p{
                        font-size: 13px;
                    }
                    .p1{
                        color: grey;
                        span{
                            color: #E2231A;
                            font-weight: bold;
                            font-size: 15px;
                        }
                    }
                    .p2{
                        color: #4c4c4c;
                        margin-left: 20px;
                        margin-top: 5px;
                    }
                }

                .p-des{
                    line-height: 50px;
                    width: 200px;
                    //border: 0.5px solid;
                    font-size: 13px;
                    color: grey;
                    text-align: center;
                }
            }
            .is_fixed{
                position: fixed;
                bottom: 0;
                z-index: 999;
                width: 79.3%;
                background-color: white;
            }


        }
        .d-flag{
            //margin-left: 140px;
        }
    }

    .content-none{
        width: 1205px;
        height: 400px;
        margin-left: 140px;
        //border: 0.5px solid;

        .box{
            margin-top: 100px;
            margin-left: 400px;
            //border: 0.5px solid;
            img{
                margin-left: 100px;
            }
            p{
                color: grey;
            }
        }
    }
</style>