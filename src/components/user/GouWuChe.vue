<template>
    <div style="width: 100%;height: 100%">
        <div class="gou-lo">
            <div class="gou" v-if="loginShow">
                <div class="box">
                    <img src="../../assets/img/LT.png" alt="">
                    <p>您还未登录哦 /(ToT)/~~</p>
                    <p>请先登录再回来看看</p>
                </div>
            </div>
            <div class="lo" v-if="!loginShow">
                <div class="lo-1" v-show="gouContent">
                    <div class="box">
                        <img src="../../assets/img/empty.gif" alt="">
                        <p>购物车快饿扁了 /(ToT)/~~</p>
                        <p>去买些东西再回来看看</p>
                    </div>
                </div>
                <div class="lo-2" v-show="!gouContent">
                    <div class="gou-item"
                         v-for="(item,index) in 2"
                         :key="index">

                        <el-checkbox
                                v-model="checkAll"
                                @change="handleCheck"
                                class="checkbox">

                        </el-checkbox>
                        <div class="item-content">
                            <img src="../../assets/img/intro01.jpg" alt="" style="float: left">
                            <div class="c content-1" style="float: left">
                                <p class="p-name">全面屏电视E55A</p>
                                <p class="p-type">高清55寸</p>
                            </div>
                            <div class="c content-2">
                                <p class="p-price">￥55</p>
                                <el-input-number
                                        v-model="num"
                                        controls-position="right"
                                        @change="handleChange"
                                        size="small"
                                        style="width: 80px;height: 30px;float: right"
                                        :min="1" :max="10">

                                </el-input-number>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="elem-gou">
            <div class="ts">
                <p class="p1">共</p>
                <p class="p2">0</p>
                <p class="p3">件商品，总计：</p>
                <p class="p4">￥0</p>
            </div>
            <input type="button" value="查看购物车"></input>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                loginShow:false,
                gouContent:false,
                num: 1
            }
        },
        methods: {
            handleChange(value) {
                console.log(value);
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
                    display:flex;
                    align-content: center;

                    .checkbox{
                        line-height: 100px;
                        margin-left: 5px;
                    }
                    .item-content{
                        width: 250px;
                        height: 100px;

                        img{
                            width: 70px;
                            height: 70px;
                            margin-top: 15px;
                            margin-left: 5px;
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
        }
        input{
            width: 260px;
            height: 40px;
            margin-left: 10px;
            margin-top: 5px;
            color: white;
            background-color: #D62233;
            border: none;
            font-size: 16px;
            font-weight: bold;
        }
        input:hover{
            cursor: pointer;
            background-color: #d61725;
        }
    }
</style>