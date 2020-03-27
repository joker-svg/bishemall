<template>
    <div>
        <div class="index-intro">
            <div class="intro-title">
                <div class="i-t"></div>
                <p class="p1">特惠特价</p>

                <div class="intro-s">
                    <div class="i-con i-c">
                        <i class="el-icon-right" @click="right_scroll"></i>
                    </div>
                    <div class="i-con">
                        <i class="el-icon-back" @click="left_scroll"></i>
                    </div>
                </div>
            </div>
            <div class="intro-content">
                <div class="box" :style="{left:box_left}" ref="box">
                    <div class="intro-good" v-for="(item,index) in 19"
                         :class="{'g0':index===0,'g1':index > 0,'g2':index%3===0,'g3':index%3===1,'g4':index%3===2}">
                        <img src="../../assets/img/intro02.jpg" alt="">
                        <p class="intro-p1 p4">全面屏电视E55A</p>
                        <p class="intro-p2 p4">全面屏设计，人工智能语音{{item}}</p>
                        <p class="intro-p3">￥55.0</p>
                        <p class="intro-p4">￥65.0</p>
                        <div class="s-save">
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

    export default {
        data(){
            return{
                box_left: '0',
                box: 0,
                //box_width: '2600px'
            }
        },
        methods:{
            right_scroll:function () {
                //var f = this.$refs.box.getBoundingClientRect().width + this.box;
                var f = 19*244.5 + this.box;
                 if(f > 0)
                 {
                     if(f < 2450)
                     {
                         this.box = this.box-f+1222.5;
                         this.box_left = this.box + 'px';
                     }
                     else{
                         this.box = this.box - 1222.5;
                         this.box_left = this.box + 'px';
                     }
                 }
                //console.log(this.$refs.box.getBoundingClientRect().left)
            },
            left_scroll:function () {
                if(this.box < 0)
                {
                    if(this.box >= -1225)
                    {
                        this.box = 0;
                        this.box_left = this.box + 'px';
                    }
                    else{
                        this.box = this.box + 1225;
                        this.box_left = this.box + 'px';
                    }
                }
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
        height: 430px;
        background-color: #f7f7f7;
        margin-top: 3px;
        padding-top: 10px;

    }

    .intro-title{
        width: 1205px;
        height: 40px;
        margin-left: 140px;
        border-bottom: 0.5px solid #cdcdcd;

        //标题
        .i-t{
            width: 3px;
            height: 40px;
            background-color: @theme-color;
            float: left;
        }

        .p1{
            font-size: 20px;
            margin-left: 10px;
            color: #3b3b3b;
            float: left;
            line-height: 40px;
        }

        //右边-左右按钮
        .intro-s{
            width: 110px;
            height: 40px;
            margin-left: 200px;
            float: right;
            margin-right: 5px;

            .i-con{
                width: 35px;
                height: 24px;
                border: 0.5px solid #a2a2a2;
                float: right;
                margin-top: 5px;
                text-align: center;
                color: grey;

                .el-icon-right .el-icon-back{
                    line-height: 24px;
                    font-size: 18px;
                }
                .el-icon-back:hover{
                    color: @theme-color;
                    cursor: pointer;
                }
                .el-icon-right:hover{
                    color: @theme-color;
                    cursor: pointer;
                }
            }
        }
    }

    //商品
    .intro-content{
        width: 1230px;
        height: 350px;
        margin-left: 140px;
        overflow: hidden;
        //border: 0.5px solid;
        position: relative;

        .box{
            height: 350px;
            //border: 0.5px solid red;
            position: absolute;
            transition: left 1.5s;
        }
        .g0{
            margin-left: 0;
        }
        .g1{
            margin-left: 22px;
        }
        .g2{
            border-top: 1px solid #E53935;
        }
        .g3{
            border-top: 1px solid #2196F3;
        }
        .g4{
            border-top: 1px solid @theme-color;
        }

        .intro-good{
            width:222.5px;
            height: 320px;
            float: left;
            margin-top: 20px;
            background-color: white;
            cursor: pointer;

            img{
                width: 200px;
                height: 200px;
                margin-left: 11px;
                margin-top: 5px;
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
                margin-top: 25px;
                width: 50px;
                float: left;
            }
            .intro-p4{
                color: grey;
                margin-left: 5px;
                margin-top: 28px;
                width: 20px;
                float: left;
                text-decoration: line-through;
                font-size: 14px;
            }

            //收藏
            .s-save{
                float: left;
                border: 0.5px solid #e2e2e2;
                border-radius: 10px;
                width: 70px;
                height: 20px;
                margin-top: 25px;
                margin-left: 35px;
                color: grey;

                .el-icon-star-off{
                    margin-left: 8px;
                    line-height: 20px;
                    float: left;
                }
                p{
                    font-size: 12px;
                    padding-left: 28px;
                    line-height: 20px;
                    //border: 0.5px solid;
                }
            }
            .s-save:hover{
                color: @theme-color;
            }
        }
        .intro-good:hover{
            box-shadow: 2px 2px 0 rgba(0,0,0,0.2),0 0 6px rgba(0, 0, 0, 0.4);
        }
    }
</style>