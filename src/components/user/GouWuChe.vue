<template>
    <div style="width: 100%;height: 100%">
        <div class="gou-lo">
            <div class="gou" v-if="!this.$store.state.user.userInfo.token">
                <div class="box">
                    <img src="../../assets/img/LT.png" alt="">
                    <p>您还未登录哦 /(ToT)/~~</p>
                    <p>请先登录再回来看看</p>
                </div>
            </div>

            <div class="lo" v-else>

                <div class="lo-1" v-if="this.$store.state.orderCart.listCart.length===0">
                    <div class="box">
                        <img src="../../assets/img/empty.gif" alt="">
                        <p>购物车快饿扁了 /(ToT)/~~</p>
                        <p>去买些东西再回来看看</p>
                    </div>
                </div>

                <div class="lo-2" v-else>
                    <div class="gou-item"
                         @mouseover="deleteOver(index)"
                         @mouseout="deleteOut(index)"
                         v-for="(item,index) in this.$store.state.orderCart.listCart"
                         :key="index">

                        <div class="item-content" >
                            <img :src="item.order_url" alt="" style="float: left">
                            <div class="c content-1" style="float: left;">
                                <p class="p-name">{{item.order_name}}</p>
                                <p class="p-type">{{item.order_spec}}</p>
                            </div>
                            <div class="c content-2">
                                <p class="p-price">￥{{item.order_price}}</p>
                                <el-input-number
                                        v-model="$store.state.orderCart.listCart[index].order_count"
                                        controls-position="right"
                                        @change="handleChange(index)"
                                        size="small"
                                        style="width: 80px;height: 30px;float: right"
                                        :min="1" :max="10">
                                </el-input-number>
                            </div>
                        </div>

                        <div class="delete"
                             v-show="item.order_master"
                             @click="deleteClick(index)">
                            <i class="el-icon-circle-close"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="elem-gou">
            <div class="ts">
                <p class="p1">共</p>
                <p class="p2">{{$store.state.orderCart.listCart.length}}</p>
                <p class="p3">件商品，总计：</p>
                <p class="p4">￥{{$store.state.orderCart.totalPrice}}</p>
                <p class="p5" @click="deleteAll">清空</p>
            </div>
            <div>
                <input type="button" value="查看购物车" @click="toOrder"></input>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                num: 1,
                list_cart:this.$store.state.orderCart.listCart,
                totalPrice:0
            }
        },
        methods: {
            handleChange(index) {
                //this.$store.state.orderCart.listCart[index].order_count;
                this.getTotalPrice();
            },

            selectCart:function () {
                let username = this.$store.state.user.userInfo.user.username;
                //console.log(username);
                this.$store.dispatch('selectCart',{username:username});
                this.getTotalPrice();
            },

            getTotalPrice:function () {
                this.$store.dispatch('totalPrice');
            },
            deleteClick:function (index) {
                //this.list_cart.splice(index,1);
                let order_id = this.$store.state.orderCart.listCart[index].order_id
                this.$store.state.orderCart.listCart.splice(index,1);
                this.getTotalPrice();

                this.$store.dispatch('deleteCart',{
                    orderId: order_id
                });
            },
            deleteOver:function (index) {
                this.$store.state.orderCart.listCart[index].order_master = 1;
            },
            deleteOut:function (index) {
                this.$store.state.orderCart.listCart[index].order_master = 0;
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
            toOrder:function () {
                this.$router.push({path:'/order'})
            }
        },
        mounted() {
            if(this.$store.state.user.userInfo.token){
                this.selectCart();
                //this.getTotalPrice();
            }
        },
        created() {
            if(this.$store.state.user.userInfo.token){
                this.selectCart();
                //console.log(this.$store.state.user.userInfo.token);
                //this.getTotalPrice();
            }
        }
    }
</script>

<style scoped lang="less">
    *{
        margin: 0;
        padding: 0;
    }
    .bo(){
        width: 100%;
        height: 580px;
        background-color: white;
    }

    .gou-lo{
        .bo();
        .gou{
            .bo();
            padding-top: 250px;
            position: absolute;
            img{
                margin-left: 110px;
                width: 70px;
                height: 70px;
            }
            p{
                color: grey;
                text-align: center;
                margin-top: 5px;
            }
        }
        .lo{
            .bo();

            .lo-1{
                .bo();
                position: absolute;
                .box{
                    width: 100%;
                    height: 150px;
                    margin-top: 250px;

                    img{
                        width: 130px;
                        height: 100px;
                        margin-left: 70px;
                    }
                    p{
                        color: grey;
                        text-align: center;
                        margin-top: 5px;
                    }
                }
            }
            .lo-2{
                .bo();
                //background-color: #ececec;
                padding-top: 5px;
                overflow-y: auto;
                overflow-x: hidden;

                .gou-item{
                    width: 270px;
                    height: 100px;
                    background-color: #ececec;
                    border-radius: 10px;
                    margin-left: 10px;
                    margin-right: 10px;
                    margin-top: 5px;
                    //display:flex;
                    align-content: center;

                    .item-content{
                        width: 240px;
                        height: 100px;
                        float: left;
                        padding-left: 10px;

                        img{
                            width: 70px;
                            height: 70px;
                            margin-top: 15px;
                            margin-left: 5px;
                            //background-color: white;
                        }

                        .c{
                            height: 35px;
                            //margin-top: 15px;
                            //border: 0.5px solid;
                            margin-left: 5px;
                            float: left;
                            p{
                                //float: left;
                                //border: 0.5px solid;
                                font-size: 13px;
                                height: 20px;
                                line-height: 20px;
                            }
                        }
                        .content-1{
                            width: 150px;
                            height: 40px;
                            margin-top: 15px;
                        }
                        .content-2{
                            width: 150px;
                            .p-price{
                                float: left;
                                line-height: 35px;
                                height: 35px;
                                font-size: 16px;
                                color: #FF6700;
                            }
                        }
                    }

                    .delete{
                        float: left;
                        width: 20px;
                        height: 100px;
                        border-radius: 0 10px 10px 0;
                        background-color: #e3e3e3;

                        .el-icon-circle-close{
                            line-height: 100px;
                            width: 20px;
                            text-align: center;
                            color: grey;
                        }
                    }
                    .delete:hover{
                        cursor: pointer;
                        background-color: #e5e5e5;
                        i{
                            color: red;
                        }
                    }
                }
                .gou-item:hover{
                    cursor: pointer;
                }
            }
            .lo-2::-webkit-scrollbar{
                width: 10px;
                height: 2px;
            }
        }
    }


    .elem-gou{
        width: 100%;
        height: 100px;
        //position: fixed;
        position: relative;
        //margin-top: 10px;
        bottom: 0;
        z-index: 999;
        background-color: #F2F2F2;
        .ts{
            width: 100%;
            height: 30px;
            padding-left: 10px;
            p{
                float: left;
                margin-top: 5px;
                line-height: 30px;
                font-size: 13px;
            }
            .p2{
                color: red;
                margin-left: 2px;
                margin-right: 2px;
            }
            .p4{
                color: red;
            }
            .p5{
                float: right;
                margin-right:35px;
                color: #9e9e9e;
            }
            .p5:hover{
                cursor: pointer;
                color: #767676;
            }
        }
        input{
            width: 260px;
            height: 40px;
            margin-left: 10px;
            margin-top: 5px;
            //float: left;
            color: white;
            background-color: #D62233;
            border: none;
            font-size: 16px;
            font-weight: bold;
            //position: fixed;
        }
        input:hover{
            cursor: pointer;
            background-color: #d61725;
        }
    }
</style>