<template>
    <div class="whole">
        <div class="title-box">
            <div class="cart-title">
                <i class="el-icon-shopping-cart-2"></i>
                <p>订单确认</p>
            </div>
        </div>

        <div class="cart-con">
            <div class="tishi">
                <p>
                    <i class="el-icon-warning"></i>
                    您订单中的商品，请在
                    <span class="s1">1小时内完成支付</span>
                    ，超时您的订单将被取消。
                    <span class="s2" @click="backHome">返回首页</span>
                </p>
            </div>

            <div class="address">
                <div class="address-title">
                    <p class="p-left">收货人信息</p>
                    <p class="p-right">
                        <span>+添加新的收货人信息</span>
                        <span>|</span>
                        <span>管理</span>
                    </p>
                </div>

                <div class="address-content">

                    <div class="address-box"
                         v-show="addressBox[index].start"
                         v-for="(item,index) in addressBox">
                        <div class="add-before"
                             @click="addAddress(index)"
                             v-show="addressBox[index].befor">
                            <i class="el-icon-plus"></i>
                            <p>添加地址</p>
                        </div>
                        <div class="add-after"
                             @mouseover="editIn(index)"
                             @mouseout="editOut(index)"
                             v-show="addressBox[index].after">
                            <div class="left">
                                <p class="p1">朱士洲 15189048298</p>
                                <p class="p2">江苏省连云港市灌云县</p>
                                <p class="p2">同兴镇山北村</p>
                            </div>
                            <div class="right">
                                <p class="p1"

                                   v-show="addressBox[index].edit">编辑</p>
                                <p class="p2" v-show="addressBox[index].editShow">默认</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div class="order">
                <div class="order-title">
                    <p class="p-left">商品信息</p>
                    <p class="p-right">
                        <span @click="backGouWu">返回购物车修改</span>
                    </p>
                </div>

                <div class="order-content">
                    <div class="order-left" ref="divFlag">
                        <p class="left-p1">配送方式</p>
                        <div class="left-d">
                            <p class="d-p p1">物流配送</p>
                            <p class="d-p p2">门店自提</p>
                        </div>
                        <p class="left-p2">工作日双休日均可送货</p>
                        <p class="left-p3">(由平台合作快递为您送货)</p>
                    </div>

                    <div class="order-right">
                        <div class="cart-box"
                             :key="index"
                             v-for="(item,index) in $store.state.payCart.newCartList">
                            <div class="box-top">
                                <div class="top-img">
                                    <img :src="item.order_url" alt="">
                                </div>
                                <div class="top-descript">
                                    <p class="p1">{{item.order_name}}</p>
                                    <p class="p2">{{item.order_descript}}</p>
                                    <p class="p3">{{item.order_spec}}</p>
                                    <p class="p4">{{item.order_color}}</p>
                                </div>
                                <div class="top-price">
                                    <p>￥ {{item.order_price.toFixed(2)}}</p>
                                    <p class="pp">0.5kg</p>
                                </div>
                                <div class="top-count">
                                    <p>{{item.order_count}}</p>
                                </div>
                            </div>
                            <div class="box-middle">
                                <p>商品价格小计：<span>￥ {{item.order_price*item.order_count}}</span> 运费小计：免运费</p>
                            </div>
                            <div class="box-bottom">
                                <p><span>*</span>备注 (非必填)</p>
                                <el-input
                                        class="text-input"
                                        type="textarea"
                                        :rows="2"
                                        placeholder="请输入内容"
                                        v-model="textarea">
                                </el-input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fa-piao">
                <div class="fa-title">
                    <p class="fa-left">发票信息</p>
                </div>
                <div class="fa-content">
                    <div class="con">
                        <p class="p1">电子普通发票-个人-明细</p>
                        <p class="p2"><i class="el-icon-warning"></i>订单中的跨境商品暂不支持开发票</p>
                    </div>
                    <p class="p3"><i class="el-icon-warning"></i>提醒：使用优惠券、积分、预付费卡等支付的金额不开具发票。</p>
                </div>
            </div>

            <div class="cartBottom">
                <div class="cartPrice">
                    <p class="p1">商品总额：<span>￥{{allPrice}}</span></p>
                </div>
                <div class="cartPrice">
                    <p class="p2">运费总计：<span>￥0.00</span></p>
                </div>
                <div class="allPrice" :class="{'is_active':active}">
                    <p class="p-btn" @click="upCart">提交订单</p>
                    <p class="p-all">应付金额：<span>￥{{sumPrice}}</span></p>
                    <p class="my-address">江苏省连云港市灌云县同兴镇山北村 <span>15189048298</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                addressBox:[{start:true,befor:true,after:false,edit:false,editShow:true},
                            {start:true,befor:true,after:false,edit:false,editShow:false},
                            {start:true,befor:true,after:false,edit:false,editShow:false},
                            {start:true,befor:true,after:false,edit:false,editShow:false}
                            ],
                isMaster:false,
                textarea: '',
                discount:0,
                active:true
            }
        },
        methods:{
            backGouWu:function () {
                this.$store.commit('clearCart');
                this.$router.push({path:'/order'})
            },
            backHome:function () {
                this.$store.commit('clearCart');
                this.$router.push({path:'/'})
            },
            addAddress:function (index) {
                this.addressBox[index].befor = false;
                this.addressBox[index].after = true;
            },
            editIn:function (index) {
                this.addressBox[index].edit = true;
                this.addressBox[index].editShow = false;
            },
            editOut:function (index) {
                this.addressBox[index].edit = false;
            },
            handelScroll:function () {
                if(this.$refs.divFlag.getBoundingClientRect().top > -46.5){
                    this.active = true;
                }else{
                    this.active = false;
                }
                //console.log('距离顶部高度',this.$refs.divFlag.getBoundingClientRect().top)

            },
            upCart:function () {
                let price = 0;
                this.$store.state.payCart.newCartList.forEach((item,index) => {
                    price += item.order_price*item.order_count;
                });

                let orderCartList = this.$store.state.payCart.newCartList;
                if(this.$store.state.payCart.newCartList.length>0){
                    this.$store.dispatch('addPayCart',orderCartList).then(res => {
                        this.$store.state.payCart.totalPrice = price;
                        this.$message.success("订单提交成功！");
                        this.$router.push('/pay/'+price);
                    });
                }
            }
        },
        computed:{
            sumPrice(){
                let price = 0;
                this.$store.state.payCart.newCartList.forEach((item,index) => {
                    price += item.order_price*item.order_count;
                });
                price -= this.discount;
                return price.toFixed(2);
            },
            allPrice(){
                let price = 0;
                this.$store.state.payCart.newCartList.forEach((item,index) => {
                    price += item.order_price*item.order_count;
                });
                return price.toFixed(2);
            },
            //
        },
        mounted() {
            //console.log(this.$store.state.orderCart.listCart[0].order_select);
            window.addEventListener('scroll', this.handelScroll,);
        },
        //回调中移除监听
        destroyed() {
            window.removeEventListener('scroll', this.handelScroll,);
            console.log("移除");
        }
    }
</script>

<style scoped lang="less">
    *{
        margin: 0;
        padding: 0;
    }

    .whole{
        width: 100%;
    }

    .title-box{
        //border: 0.5px solid;
        width: 99.9%;
        //width: 1500px;
        .cart-title{
            //width: 500px;
            width: 79.3%;
            height: 100px;
            //margin-left: 160px;
            margin-left: 10.5%;
            margin-top: 20px;

            i{
                line-height: 90px;
                float: left;
                font-size: 50px;
                border-left: 5px solid;
                color: #E43F42;
                padding-left: 20px;
            }

            p{
                float: left;
                line-height: 100px;
                margin-left: 30px;
                font-size: 26px;
                font-weight: bold;
                color: #666666;
            }
        }
    }

    .cart-con{
        width: 100%;
        //width: 1500px;
        border-top: 0.5px solid #d5d5d5;
        margin-top: 10px;

        .tishi{
            width: 79.3%;
            height: 40px;
            border: 0.5px solid #EDD28B;
            margin-left: 10.6%;
            margin-top: 10px;
            background-color: #FFFDEE;

            p{
                line-height: 40px;
                font-size: 14px;
                color: #565656;
                .el-icon-warning{
                    color: #fffb36;
                    margin-right: 10px;
                    margin-left: 20px;
                    font-size: 20px;
                }
                .s1{
                    color: #E6133C;
                }
                .s2{
                    border: 0.5px solid #EDD28B;
                    float: right;
                    height: 26px;
                    margin-top: 6px;
                    line-height: 26px;
                    margin-right: 10px;
                    width: 80px;
                    text-align: center;
                    color: #E6133C
                }
            }
        }

        .address{
            width: 79.3%;
            margin-left: 10.6%;
            height: 175px;
            //border: 0.2px solid grey;

            .address-title{
                width: 100%;
                height: 30px;
                border-bottom: 3px solid #CCCCCC;
                margin-top: 10px;

                .p-left{
                    float: left;
                    line-height: 30px;
                    font-weight: bold;
                    color: #333333;
                }
                .p-right{
                    float: right;
                    line-height: 30px;
                    font-size: 13px;
                    margin-right: 10px;
                    color: #666666;

                    span{
                        margin-left: 5px;
                    }
                    span:hover{
                        //text-decoration: ;
                        cursor: pointer;
                        color: blue;
                        border-bottom: 0.5px solid blue;;
                    }
                }
            }

            .address-content{
                background-color: #FCFCFC;
                width: 100%;
                height: 130px;
                border: 0.5px solid #ededed;

                .address-box{
                    //width: 240px;
                    width: 20%;
                    height: 80px;
                    border: 3px solid #F3F3F3;
                    float: left;
                    //margin-left: 45px;
                    margin-left: 4%;
                    margin-top: 10px;

                    .add-before{
                        width: 100%;
                        height: 100%;
                        cursor: pointer;
                        //position: absolute;

                        .el-icon-plus{
                            font-size: 36px;
                            color: #e1e1e1;
                            //margin-left: 6.5%;
                            margin-left: 41%;
                            margin-top: 10px;
                            position: relative;
                        }

                        p{
                            color: #e1e1e1;
                            //margin-left: 5.5%;
                            margin-left: 35%;
                        }
                    }

                    .add-after{
                        //position: absolute;
                        width: 96%;
                        height: 89%;
                        background-color: white;
                        cursor: pointer;

                        .left{
                            width: 78%;
                            float: left;
                            padding-left: 10px;
                            padding-top: 10px;
                            .p1{
                                font-size: 14px;
                                margin-bottom: 5px;
                            }
                            .p2{
                                font-size: 13px;
                                color: grey;
                            }
                        }
                        .right{
                            float: right;
                            width: 16%;
                            margin-right: -9px;
                            p{
                                font-size: 13px;
                                height: 20px;
                                color: white;
                                background-color: #E6133C;
                                text-align: center;
                                line-height: 20px;
                                cursor: pointer;
                            }
                            .p2{
                                background-color: #CCCCCC;
                            }
                        }
                    }
                }
            }
        }

        .order{
            width: 79.3%;
            margin-left: 10.6%;
            height: auto;

            .order-title{
                width: 100%;
                height: 30px;
                border-bottom: 3px solid #CCCCCC;
                margin-top: 10px;

                .p-left{
                    float: left;
                    line-height: 30px;
                    font-weight: bold;
                    color: #333333;
                }
                .p-right{
                    float: right;
                    line-height: 30px;
                    font-size: 13px;
                    margin-right: 10px;
                    color: #666666;

                    span{
                        margin-left: 5px;
                    }
                    span:hover{
                        //text-decoration: ;
                        cursor: pointer;
                        color: blue;
                        border-bottom: 0.5px solid blue;;
                    }
                }
            }

            .order-content{
                background-color: #FCFCFC;
                width: 100%;
                //height: 200px;
                .order-left{
                    width: 30%;
                    height: 400px;
                    //border: 0.5px solid;
                    float: left;
                    background-color: #FCFCFC;

                    .left-p1{
                        line-height: 30px;
                        font-weight: bold;
                        color: #333333;
                        margin-top: 10px;
                        margin-left: 20px;
                    }
                    .left-d{
                        margin-top: 10px;
                        width: 100%;
                        height: 45px;
                        .d-p{
                            width: 35%;
                            height: 40px;
                            //background-color: grey;
                            margin-left: 20px;
                            text-align: center;
                            line-height: 40px;
                            font-weight: bold;
                            float: left;
                        }

                        .p1{
                            border: 2px solid #E6133C;

                        }

                        .p2{
                            background-color: #F3F3F3;
                            color: #CECCCC;
                        }
                    }
                    .left-p2{
                        color: #333333;
                        margin-left: 20px;
                        font-size: 13.5px;
                        margin-top: 20px;
                    }
                    .left-p3{
                        color: #bfbfbf;
                        margin-left: 20px;
                        font-size: 13px;
                        margin-top: 20px;
                    }
                }
                .order-right{
                    width: 69%;
                    height: auto;
                    float: left;
                    //border:0.5px solid red;

                    .cart-box{
                        width: 100%;
                        height: 270px;
                        border-top: 2px solid #CCCCCC;
                        box-shadow: -10px 0 0 0 rgba(222, 222, 222, 0.2);
                        background-color: #FCFCFC;

                        .box-top{
                            margin-top: 20px;
                            width: 100%;
                            height: 90px;
                            border-top: 0.5px solid #dbdbdb;
                            border-bottom: 0.5px solid #dbdbdb;

                            .top-img{
                                width: 70px;
                                height: 70px;
                                margin-left: 3.5%;
                                margin-top: 10px;
                                float: left;
                                border: 0.5px solid #dcdcdc;
                                img{
                                    width: 69px;
                                    height: 69px;
                                    margin-left: 0.5px;
                                    margin-top: 0.5px;
                                }
                            }
                            .top-descript{
                                width: 40%;
                                height: 70px;
                                margin-left: 4%;
                                //border: 0.5px solid;
                                float: left;
                                margin-top: 10px;

                                p{
                                    font-size: 13px;
                                    margin-top: 5px;
                                    color: grey;
                                    margin-left: 5px;
                                }
                                .p3{
                                    float: left;
                                }
                                .p4{
                                    float: left;
                                    margin-left: 20px;
                                }
                            }

                            .top-price{
                                height: 70px;
                                width: 15%;
                                margin-left: 4%;
                                float: left;
                                margin-top: 10px;
                                //border: 0.5px solid;
                                font-size: 14px;

                                p{
                                    //line-height: 70px;
                                    color: #FA4D4D;
                                    text-align: center;
                                    margin-top: 5px;
                                }
                                .pp{
                                    text-align: center;
                                    margin-top: 5px;
                                    color: #a7a7a7;
                                    font-size: 13px;
                                }
                            }

                            .top-count{
                                height: 70px;
                                width: 15%;
                                margin-left: 4%;
                                float: left;
                                margin-top: 10px;
                                //border: 0.5px solid;

                                p{
                                    //line-height: 70px;
                                    text-align: center;
                                    margin-top: 5px;
                                    font-size: 14px;
                                    color: grey;
                                }
                            }
                        }
                        .box-middle{
                            width: 100%;
                            height: 40px;
                            border-bottom: 0.5px solid #dbdbdb;
                            p{
                                font-size: 13px;
                                color: grey;
                                line-height: 40px;
                                float: right;
                                margin-right: 20px;
                                span{
                                    color: red;
                                    margin-right: 20px;
                                    font-size: 16px;
                                }
                            }
                        }
                        .box-bottom{
                            width: 100%;
                            height: 120px;
                            //border: 0.5px solid;

                            p{
                                font-size: 13.5px;
                                color: grey;
                                margin-left: 2.5%;
                                margin-top: 10px;
                                span{
                                    color: red;
                                    margin-right: 5px;
                                }
                            }
                            .text-input{
                                width: 80%;
                                //height: 90px;
                                margin-left: 4%;
                                margin-top: 10px;
                            }
                        }
                    }
                }
            }
        }

        .fa-piao{
            width: 79.3%;
            margin-left: 10.6%;
            height: 150px;
            border-top: 0.5px solid #dbdbdb;
            float: left;
            margin-top: 20px;

            .fa-title{
                width: 100%;
                height: 30px;
                border-bottom: 3px solid #CCCCCC;
                margin-top: 10px;

                .fa-left{
                    float: left;
                    line-height: 30px;
                    font-weight: bold;
                    color: #333333;
                }
            }
            .fa-content{
                background-color: #FCFCFC;
                width: 100%;
                height: 105px;
                border-bottom: 3px solid #CCCCCC;
                //border: 0.5px solid red;

                .con{
                    width: 100%;
                    height: 50px;
                    //border: 0.5px solid;
                    .p1{
                        float: left;
                        font-size: 13.5px;
                        line-height: 50px;
                        color: grey;
                        margin-left: 20px;
                    }
                    .p2{
                        float: left;
                        background-color: #FFFDEE;
                        border: 0.5px solid #EDD28B;
                        height: 30px;
                        margin-top: 10px;
                        line-height: 30px;
                        font-size: 13px;
                        padding-right: 10px;
                        margin-left: 50px;
                        color: #444444;
                        i{
                            margin-left: 10px;
                            margin-right: 10px;
                            color: #fffb36;
                        }
                    }
                }

                .p3{
                    margin-left: 20px;
                    margin-top: 10px;
                    height: 30px;
                    line-height: 30px;
                    font-size: 13px;
                    color: #444444;
                    background-color: #FFFDEE;
                    border: 0.5px solid #EDD28B;
                    i{
                        margin-left: 20px;
                        margin-right: 10px;
                        color: #fffb36;
                    }
                }
            }
        }

        .cartBottom{
            width: 79.3%;
            margin-left: 10.6%;
            height: 163px;
            //border-top: 0.5px solid #dbdbdb;
            float: left;
            margin-top: 20px;
            //border: 0.5px solid;

            .cartPrice{
                width: 100%;
                height: 40px;
                border-top: 0.5px solid #e5e5e5;
                //border: 0.5px solid;
                p{
                    float: right;
                    color: grey;
                    height: 40px;
                    line-height: 40px;
                    //font-size: 16px;
                    span{
                        margin-right: 10px;
                        font-size: 18px;
                        color: #333333;
                    }
                }
                .p1{
                    float: right;
                    span{
                        margin-left: 30px;
                    }
                }
                .p2{
                    float: right;
                    span{
                        margin-left: 73px;
                    }
                }
            }
            .allPrice{
                width: 100%;
                height: 70px;
                border-top: 0.5px solid #e5e5e5;
                //border: 0.5px solid;
                margin-top: 10px;
                p{
                    float: right;
                }
                .p-btn{
                    width: 200px;
                    height: 70px;
                    text-align: center;
                    line-height: 70px;
                    color: white;
                    background-color: #E6133C;
                    font-size: 24px;
                    font-weight: bold;
                    cursor: pointer;
                }
                .p-all{
                    height: 70px;
                    line-height: 70px;
                    color: grey;
                    span{
                        color: #E6133C;
                        font-weight: bold;
                        font-size: 18px;
                        margin-right: 20px;
                    }
                }
                .my-address{
                    line-height: 70px;
                    font-size: 13px;
                    color: grey;
                    margin-right: 20px;

                    span{
                        margin-right: 20px;
                    }
                }
            }
            .is_active{
                position: fixed;
                bottom: 0;
                z-index: 999;
                width: 78.5%;
                background-color: white;
            }
        }
    }
</style>