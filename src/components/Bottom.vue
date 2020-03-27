<template>
    <div>
        <div class="bottom">
            <div class="top1">
                <div class="box">
                    <div class="box1"><i class="el-icon-shopping-cart-1 el"></i></div>
                    <div class="box2">
                        <p>新手入门</p>
                        <ul>
                            <li><a>购物流程</a></li>
                            <li><a>会员介绍</a></li>
                            <li><a>常见问题</a></li>
                            <li><a>发票说明</a></li>
                            <li><a>联系客服</a></li>
                        </ul>
                    </div>
                </div>
                <div class="box">
                    <div class="box1"><i class="el-icon-present el"></i></div>
                    <div class="box2">
                        <p>配送服务</p>
                        <ul>
                            <li><a>配送范围及运费</a></li>
                            <li><a>配送进度查询</a></li>
                            <li><a>自提服务</a></li>
                            <li><a>商品验货与签收</a></li>
                        </ul>
                    </div>
                </div>
                <div class="box">
                    <div class="box1"><i class="el-icon-notebook-1 el"></i></div>
                    <div class="box2">
                        <p>支付方式</p>
                        <ul>
                            <li><a>货到付款</a></li>
                            <li><a>在线支付</a></li>
                        </ul>
                    </div>
                </div>
                <div class="box">
                    <div class="box1"><i class="el-icon-mobile-phone el"></i></div>
                    <div class="box2">
                        <p>售后服务</p>
                        <ul>
                            <li><a>退换货政策</a></li>
                            <li><a>退换货流程</a></li>
                            <li><a>退款说明</a></li>
                        </ul>
                    </div>
                </div>
                <div class="box">
                    <div class="box1"><i class="el-icon-s-custom el"></i></div>
                    <div class="box2">
                        <p>商家支持</p>
                        <ul>
                            <li><a>商家入驻</a></li>
                            <li><a>商家规则</a></li>
                            <li><a>商家常见问题</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="bot">
                <ul class="ul-1">
                    <li><a>关于我们</a><span>|</span></li>
                    <li><a>联系我们</a><span>|</span></li>
                    <li><a>加盟合作</a><span>|</span></li>
                    <li><a>诚征英才</a><span>|</span></li>
                    <li><a>友情链接</a><span>|</span></li>
                    <li><a>新零售合作</a></li>
                </ul>
                <ul class="ul-2">
                    <li style="width: 200px;"><a style="color:#727272">常州工学院 朱士洲 版权所有</a><span>|</span></li>
                    <li><a style="color:#727272"> 客服电话：000-000-0000</a><span>|</span></li>
                    <li style="width: 200px"><a>常州工学院辽河路校区666号</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    export default {

    }
</script>

<style scoped lang="less">
    @theme-color:#FF6700;

    *{
        margin: 0;
        padding: 0;
    }
    .li-sty(){
        list-style: none;
        float: left;
    }
    .a-sty(){
        color: #ff1815;
        cursor: pointer;
    }

    .bottom{
        width: 1500px;
        height: 300px;
        background-color: #e8e8e8;
        margin-top: 20px;
        padding-top: 5px;
    }

    .top1{
        height: 200px;
        margin-left: 140px;
        margin-right: 170px;
        margin-top: 20px;
        padding-left: 80px;

        .box{
            width: 200px;
            height: 190px;
            //border: 0.5px solid;
            margin-top: 5px;
            float: left;
            margin-left: 15px;

            .box1{
                width: 40px;
                height: 40px;
                //border: 0.5px solid;
                background-color: #333333;
                border-radius: 20px;
                text-align: center;
                float: left;

                .el{
                    color: white;
                    font-size: 30px;
                    line-height: 40px;
                }
            }
            .box2{
                float: left;
                width: 155px;

                p{
                    margin-top: 10px;
                    margin-left: 20px;
                }
                li{
                    list-style: none;
                    margin-left: 20px;
                    margin-top: 5px;
                    a{
                        font-size: 13px;
                        color: #4d4d4d;
                    }
                    a:hover{
                        .a-sty();
                    }
                }
            }
        }
    }
    .bot{
        height: 100px;
        margin-left: 140px;
        margin-right: 170px;
        padding-left: 80px;
        span{
            color: #919191;
            margin-left: 10px;
            font-size: 10px;
        }
        ul{
            height: 30px;
        }
        a{
            font-size: 12px;
            color: #404040;
        }
        a:hover{
            .a-sty();
        }

        .ul-1{
            margin-left: 320px;
            li{
                .li-sty();
                width: 80px;
                height: 20px;
                text-align: center;
            }
        }
        .ul-2{
            margin-left: 300px;
            width: 600px;
            li{
                .li-sty();
                width: 160px;
            }
        }
    }
</style>