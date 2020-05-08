<template>
    <div class="whole">
        <h3>我的订单</h3>

        <div class="header">
            <div class="fen-lei">
                <p>
                    <span class="s1">
                        订单类型：
                        <span @click="getCart" style="cursor: pointer">
                            全部订单
                        </span>
                    </span>
                    <span class="s2">
                        订单状态：
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                                    style="padding-left: 10px;color: grey"
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </span>
                </p>
            </div>
            <div class="h-item">
                <p>
                    <span class="item-1">
                        订单号商品
                    </span>
                    <span class="item-2">
                        订单金额
                    </span>
                    <span class="item-3">
                        操作
                    </span>
                    <span class="item-4">
                        订单状态
                    </span>
                    <span class="item-5">
                        订单操作
                    </span>
                </p>
            </div>
        </div>
        <div class="content">
            <div class="c-cart" v-for="(item,index) in cartList">
                <div class="cart-top" @mouseover="moveIn(index)" @mouseout="moveOut(index)">
                    <p>
                        订单编号：<span class="cart-id">{{item.orderCart_id}}</span>
                        时间： <span class="cart-date">{{item.create_time}}</span>
                        <span class="sp" v-show="!item.orderCart_select" @click="deleteCart(index)">
                            <i class="el-icon-delete"></i>
                        </span>
                    </p>
                </div>
                <div class="cart-bottom">
                    <div class="con-1">
                        <div class="img-box">
                            <img :src="item.orderCart_url">
                        </div>

                        <div class="right">
                            <p>{{item.orderCart_name}} </p>
                            <p class="p2">{{item.orderCart_descript}}</p>
                        </div>
                    </div>
                    <div class="con-2">
                        <p class="p1">￥{{item.orderCart_price}}</p>
                        <p class="p2">在线支付</p>
                        <p class="p3">X {{item.orderCart_count}}</p>
                    </div>
                    <div class="con-3">
                        <p>查看订单</p>
                    </div>
                    <div class="con-4">
                        <p>{{item.showName}}</p>
                    </div>
                    <div class="con-5">
                        <p>
                            <i class="el-icon-service"></i>
                            联系客服
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components:{

        },
        data(){
            return{
                options: [{value: '待付款',label: '待付款'}, {value: '待发货',label: '待发货'},
                            {value: '待收货',label: '待收货' }, {value: '待评价',label: '待评价'}],
                value: '',
                deleteShow:false,
                cartList:[{
                    orderCart_id: '',
                    product_id: 0,
                    username: '',
                    orderCart_name: '',
                    orderCart_descript: '',
                    orderCart_url: '',
                    orderCart_price: 0,
                    orderCart_count: 0,
                    orderCart_spec: '',
                    orderCart_color: '',
                    orderCart_address: '',
                    orderCart_select: 0,
                    orderCart_pay: 0,
                    orderCart_delivery: 0,
                    orderCart_receive: 0,
                    create_time: ''
                }]
            }
        },
        methods:{
            moveIn:function (index) {
                this.cartList[index].orderCart_select = 0;
                this.deleteShow = true;
            },
            moveOut:function (index) {
                this.cartList[index].orderCart_select = 1;
                this.deleteShow = false;
            },
            //查询全部订单
            getCart:function () {
                this.$axios({
                    url:"/api/pay/selectOrderCart",
                    method:"POST",
                    data:{
                        id:0
                    }
                }).then(res => {
                    //console.log(res.data);
                    this.cartList = res.data;
                    this.cartList.forEach((item,index) => {
                       if(item.orderCart_pay === 0){
                           this.$set(item, 'showName', '待付款');
                       }else if(item.orderCart_pay === 1){
                           if(item.orderCart_delivery === 0){
                               this.$set(item, 'showName', '待发货');
                           }else if(item.orderCart_delivery === 1){
                               if(item.orderCart_receive === 0){
                                   this.$set(item, 'showName', '待收货');
                               }else if(item.orderCart_receive === 1){
                                   this.$set(item, 'showName', '待评价');
                               }
                           }
                       }
                    });
                    //console.log('打印',this.cartList);
                })
            },

            //查询待付款订单
            getPayCart:function(){
                this.$axios({
                    url:"/api/pay/selectPayCart",
                    method:"POST",
                    data:{
                        id:0
                    }
                }).then(res => {
                    //console.log(res.data);
                    this.cartList = res.data;
                    this.cartList.forEach((item,index) => {
                        this.$set(item, 'showName', '待付款');
                    });
                    //console.log('打印',this.cartList);
                })
            },

            //查询待发货订单
            getDeliveryCart:function(){
                this.$axios({
                    url:"/api/pay/selectDelivery",
                    method:"POST",
                    data:{
                        id:0
                    }
                }).then(res => {
                    //console.log(res.data);
                    this.cartList = res.data;
                    this.cartList.forEach((item,index) => {
                        this.$set(item, 'showName', '待发货');
                    });
                    //console.log('打印',this.cartList);
                })
            },

            //查询待收货订单
            getReceiveCart:function(){
                this.$axios({
                    url:"/api/pay/selectReceive",
                    method:"POST",
                    data:{
                        id:0
                    }
                }).then(res => {
                    //console.log(res.data);
                    this.cartList = res.data;
                    this.cartList.forEach((item,index) => {
                        this.$set(item, 'showName', '待收货');
                    });
                    //console.log('打印',this.cartList);
                })
            },

            //查询待评价订单

            //删除订单
            deleteCart:function (index) {
                let cartId = this.cartList[index].orderCart_id;
                this.cartList.splice(index,1);

                this.$store.dispatch('deleteCart',{id:cartId}).then(res => {

                });
            }
        },
        created() {
            this.getCart();
        },
        watch:{
            "value":function (newVal, oldVal) {
                if(newVal === "待付款"){
                    this.getPayCart();
                    //console.log("待付款")
                }else if(newVal === "待发货"){
                    this.getDeliveryCart();
                    //console.log("待发货")
                }else if(newVal === "待收货"){
                    this.getReceiveCart();
                    //console.log("待收货")
                }else if(newVal === "待评价"){
                    //console.log("待评价")
                }
            }
        }
    }
</script>

<style scoped lang="less">
    *{
        margin:0;
        padding: 0;
    }
    .whole{
        width: 100%;
        h3{
            margin-left: 20px;
            margin-top: 10px;
            color: grey;
        }
    }

    .header{
        width: 95%;
        height: 100px;
        margin-left: 20px;
        margin-top: 20px;
        background-color: #F9F9F8;
        //border: 0.5px solid;

        .fen-lei{
            //border: 0.5px solid;
            width: 100%;
            height: 50px;
            p{
                line-height: 50px;
                font-size: 13.5px;
                color: grey;
                .s1{
                    margin-left: 10px;
                }
                .s2{
                    margin-left: 50px;

                    .el-select{
                        width: 150px;
                        height: 30px;
                    }
                }
            }
        }
        .h-item{
            //border: 0.5px solid;
            border-top: 2px solid #666666;
            height: 40px;
            margin-top: 10px;
            p{
                line-height: 40px;
                font-size: 13.5px;
                color: #676767;
            }
            .item-1{
                margin-left: 10px;
            }
            .item-2{
                margin-left: 32%;
            }
            .item-3{
                margin-left: 10%;
            }
            .item-4{
                margin-left: 12%;
            }
            .item-5{
                margin-left: 12%;
            }
        }
    }
    .content{
        width: 95%;
        margin-left: 20px;
        margin-top: 10px;
        .c-cart{
            width: 100%;
            height: 150px;
            border: 0.5px solid #E8E7E4;
            margin-bottom: 10px;

            .cart-top{
                width: 100%;
                height: 30px;
                padding-top: 10px;
                background-color: #F4F3F2;
                cursor: pointer;
                p{
                    border-left: 2px solid #E6133C;
                    font-size: 13px;
                    margin-left: 10px;
                    color: grey;
                    padding-left: 8px;
                }
                .cart-id{
                    color: #606060;
                    margin-right: 20%;
                }
                .sp{
                    float: right;
                    margin-right: 8%;
                }
                .sp:hover{
                    color: #FF6700;
                }
            }
            .cart-bottom{
                width: 100%;
                height: 120px;
            }
            //cart-bottom下的样式
            .p(){
                text-align: center;
                margin-top: 20px;
                font-size: 13.5px;
            }
            .con(){
                float: left;
                height: 110px;
                //border: 0.5px solid;
            }
            .con-1{
                .con();
                width: 35%;
                .img-box{
                    float: left;
                    width: 80px;
                    height: 80px;
                    margin-top: 15px;
                    margin-left: 10px;
                    border: 0.5px solid #DDDDDD;
                    img{
                        width: 79px;
                        height: 79px;
                        margin-left: 0.5px;
                        margin-top: 0.5px;
                    }
                }
                .right{
                    float: left;
                    margin-top: 20px;
                    margin-left: 15px;
                    p{
                        font-size: 13.5px;
                        color: grey;
                    }
                    .p2{
                        margin-top: 10px;
                    }
                }
            }
            .con-2{
                .con();
                width: 13%;
                margin-left: 10px;
                p{
                    font-size: 13.5px;
                    text-align: center;
                    color: grey;
                }
                .p1{
                    margin-top: 20px;
                    font-weight: bold;
                    color: #000000;
                }
                .p2,.p3{
                    margin-top: 5px;
                }
            }
            .con-3{
                .con();
                width: 15%;
                margin-left: 10px;
                p{
                    .p();
                }
                p:hover{
                    cursor: pointer;
                    color: red;
                }
            }
            .con-4{
                .con();
                width: 15%;
                margin-left: 10px;
                p{
                    .p();
                    color: red;
                }
            }
            .con-5{
                .con();
                width: 15%;
                margin-left: 30px;

                p{
                    .p();
                    border: 0.5px solid #DDDDDD;
                    background-color: #F6F6F6;
                    width: 75px;
                    color: grey;
                    padding-left: 2px;
                    padding-right: 2px;
                    margin-left: 25%;
                    cursor: pointer;
                }
            }
            ///cart-bottom下的样式结束
        }
    }
</style>