<template>
    <div>
        <div class="index-intro">
            <div class="intro-title">
                <img src="../../assets/img/c10.png" alt="">
                <p class="p1">猜你喜欢</p>
                <p class="p2">Guess you like</p>

                <div class="intro-s">
                    <p>查看全部</p>
                    <div class="i-con">
                        <i class="el-icon-right"></i>
                    </div>
                </div>
            </div>
            <div class="intro-content">
                <div class="intro-good" v-for="item in 10">
                    <img src="../../assets/img/intro01.jpg" alt="">
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
</template>

<script>

    export default {
        data(){
            return{

            }
        }
    }
</script>

<style scoped lang="less">
    @theme-color:#FF6700;

    *{
        margin: 0;
        padding: 0;
    }

    .index-intro{
        width: 100%;
        height: 730px;
        background-color: #f7f7f7;
        margin-top: 20px;
        padding-top: 10px;
    }

    .intro-title{
        width: 1205px;
        height: 40px;
        margin-left: 140px;
        //margin-top: 40px;
        border-bottom: 0.5px solid #cdcdcd;
        img{
            float: left;
            width: 30px;
            height: 30px;
            margin-top: 5px;
        }
        p{
            float: left;
            line-height: 40px;
        }
        .p1{
            font-size: 20px;
            margin-left: 10px;
            color: #3b3b3b;
            //width: 100px;
        }
        .p2{
            font-size: 14px;
            color: #727f8f;
            margin-left: 10px;
            float: left;
        }
        .intro-s{
            width: 110px;
            height: 40px;
            //border: 0.5px solid;
            margin-left: 200px;
            float: right;
            color: grey;

            .i-con{
                width: 24px;
                height: 24px;
                border: 0.5px solid;
                border-radius: 12px;
                float: right;
                margin-top: 5px;
                margin-right: 10px;
                text-align: center;

                .el-icon-right{
                    line-height: 24px;
                    font-size: 18px;
                }
            }

            p{
                float: left;
                line-height: 40px;
            }
        }
        .intro-s:hover{
            color: @theme-color;
            cursor: pointer;
        }
    }
    .intro-content{
        width: 1230px;
        margin-left: 118px;
        //margin-top: 10px;
        //border: 0.5px solid;

        .intro-good{
            width:222.5px;
            height: 300px;
            float: left;
            margin-left: 22px;
            margin-top: 20px;
            background-color: white;
            cursor: pointer;

            img{
                width: 200px;
                height: 200px;
                margin-left: 11px;
                margin-top: 2px;
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
                margin-top: 15px;
                width: 50px;
                //border: 0.5px solid;
                float: left;
            }
            .s-save{
                float: left;
                border: 0.5px solid #e2e2e2;
                border-radius: 10px;
                width: 70px;
                height: 20px;
                margin-top: 15px;
                margin-left: 55px;
                color: grey;

                .el-icon-star-off{
                    margin-left: 8px;
                    line-height: 20px;
                    float: left;

                    //font-size: 12px;
                }
                p{
                    font-size: 12px;
                    //width: 50px;
                    line-height: 20px;
                    padding-left: 28px;
                    //border: 0.5px solid;
                }
            }
            .s-save:hover{
                color: @theme-color;
            }
        }
        .intro-good:hover{
            //border: 0.5px solid grey;
            box-shadow: 2px 2px 0 rgba(0,0,0,0.2),0 0 6px rgba(0, 0, 0, 0.4);
        }
    }
</style>