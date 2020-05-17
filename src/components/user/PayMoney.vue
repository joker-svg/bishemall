<template>
    <div class="payWhole">
        <div class="top">
            <p>收银台</p>
        </div>

        <div class="title">
            <div class="tishi">
                <p><i class="el-icon-check"></i>订单提交成功，请您尽快付款！</p>
            </div>
        </div>
        <div class="content">
            <div class="price">
                <p>
                    <span class="s1">应付金额：</span>
                    <span class="s2">￥{{cartMoney}}</span>
                    <span class="s3">详情</span>
                    <span class="s4 s3" @click="endPay">取消付款</span>
                </p>
            </div>

            <div class="pay">
                <div class="pay-title">
                    <p>第三方安全支付</p>
                </div>
                <div class="pay-btn">
                    <p>
                        <el-button type="text" @click="open"
                                  style="font-weight: bold;color: grey;">确认支付
                        </el-button>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                cartMoney:0
            }
        },
        methods:{
            open() {
                this.$prompt('请输入密码', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                }).then(({ value }) => {
                    if(value === '123456'){
                        this.$message({
                            type: 'success',
                            message: '支付成功 '
                        });
                        let rows = this.$store.state.payCart.orderPay.affectedRows;
                        let startId = this.$store.state.payCart.orderPay.insertId;
                        //console.log(rows,startId);
                        let arr= new Array();
                        for(var i = 0; i < rows;i++){
                            arr[i] = new Array();
                            arr[i][0] = 1;
                            arr[i][1] = startId+i;
                        }
                        this.$store.dispatch('updatePayCart',arr);
                        this.$router.push('/');
                    }else{
                        this.$message.error('密码输入错误');
                    }
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            },
            endPay:function () {
                this.$store.commit('clearCart');
                this.$router.push('/order');
            }
        },
        mounted() {
            if(parseInt(this.$route.params.money) === this.$store.state.payCart.totalPrice){
                this.cartMoney = parseInt(this.$route.params.money).toFixed(2);
            }else{
                this.$store.commit('clearCart');
                this.$router.push('/');
            }
        },
        computed:{

        },
        created() {

            // if(parseInt(this.$route.params.money) === this.$store.state.payCart.totalPrice){
            //     this.cartMoney = parseInt(this.$route.params.money).toFixed(2);
            // }else{
            //     // this.$store.commit('clearCart');
            //     // this.$router.push('/');
            // }
        }
    }
</script>

<style scoped lang="less">
*{
    margin: 0;
    padding: 0;
}
.payWhole{
    width: 100%;
}

    .top{
        width: 69.3%;
        margin-left: 20.3%;
        height: 100px;
        //border: 0.5px solid;

        p{
            line-height: 50px;
            margin-top: 35px;
            font-size: 36px;
            font-weight: bold;
            color: grey;
            margin-left: 20px;
            width: 120px;
            //border-bottom: 2px solid;
        }
    }

    .title{
        width: 100%;
        height: 50px;
        border-top: 0.5px solid #ebebeb;

        .tishi{
            width: 65%;
            height: 50px;
            margin-left: 20.3%;
            border-bottom: 2px solid #D5AF82;
            p{
                line-height: 40px;
                margin-top: 5px;
                font-size: 26px;
                color: #333333;

                i{
                    font-size: 36px;
                    font-weight: bold;
                    color: blue;
                    margin-top: 10px;
                    margin-right: 20px;
                }
            }
        }
    }

    .content{
        width: 65%;
        margin-left: 20.3%;
        height: 300px;
        background-color: #FEF9EE;
        margin-top: 10px;

        .price{
            width: 100%;
            height: 50px;
            p{
                line-height: 50px;
                .s1{
                    margin-left: 5.6%;
                }
                .s2{
                    color: red;
                    font-size: 20px;
                    margin-right: 20px;
                }
                .s3{
                    font-size: 13.5px;
                    color: blue;
                    cursor: pointer;
                    margin-left: 50px;
                }
                .s3:hover{
                    color: red;
                }
                .s4:hover{
                    color: red;
                }
            }
        }

        .pay{
            width: 90%;
            margin-left: 5%;
            height: 150px;
            border: 0.5px solid #D5AF82;
            background-color: white;
            margin-top: 10px;

            .pay-title{
                width: 90%;
                margin-left: 5%;
                height: 40px;
                border-bottom: 0.5px solid #D5AF82;
                p{
                    line-height: 40px;
                    color: #6D4433;
                    font-weight: bold;
                }
            }
            .pay-btn{
                width: 90%;
                margin-left: 5%;
                height: 100px;

                p{
                    margin-top: 10px;
                    border: 0.5px solid #D5AF82;
                    height: 40px;
                    line-height: 40px;
                    width: 20%;
                    text-align: center;
                    font-weight: bold;
                    color: grey;
                }
            }
        }
    }
</style>