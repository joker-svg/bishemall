<template>
    <div class="lun">
        <div class="leftbar">
            <ul>
                <li :class="{active1:isTrue[index].hide}" v-for="(item,index) in aside" :key="item.id" @m @mouseover="boxshow(index)" @mouseout="boxhide(index)">
                    <router-link to="/">{{item.idname}}</router-link>
                    <i class="el-icon-arrow-right"></i>
                </li>
            </ul>
        </div>
        <div class="rightlun">
            <el-carousel :interval="4000" type="card" height="380px">
                <el-carousel-item v-for="item in list" :key="item.id">
                    <img v-bind:src="item.idview" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <!--盒子-->
        <div class="box1" :class="{active:isTrue[index].hide}" v-for="(item , index) in 9"
             @mouseover="boxshow(index)" @mouseout="boxhide(index)">
            {{item}}
        </div>
<!--        <div class="box1" :class="{active:isTrue[1].hide}">-->
<!--            2-->
<!--        </div>-->
<!--        <div class="box1" :class="{active:isTrue[2].hide}">-->
<!--            3-->
<!--        </div>-->
<!--        <div class="box1" :class="{active:isTrue[3].hide}">-->
<!--            4-->
<!--        </div>-->
<!--        <div class="box1" :class="{active:isTrue[4].hide}">-->
<!--            5-->
<!--        </div>-->
<!--        <div class="box1" :class="{active:isTrue[5].hide}">-->
<!--            6-->
<!--        </div>-->
<!--        <div class="box1" :class="{active:isTrue[6].hide}">-->
<!--            7-->
<!--        </div>-->
<!--        <div class="box1" :class="{active:isTrue[7].hide}">-->
<!--            8-->
<!--        </div>-->
<!--        <div class="box1" :class="{active:isTrue[8].hide}">-->
<!--            9-->
<!--        </div>-->


    </div>
</template>

<script>
    export default {
        data(){
            return{
                //图片尺寸500*380
                list:[
                    {id:0,idview:require("../../assets/img/lun06.jpg")},
                    {id:1,idview:require("../../assets/img/lun05.jpg")},
                    {id:2,idview:require("../../assets/img/lun01.jpg")},
                    {id:3,idview:require("../../assets/img/lun02.jpg")},
                    {id:4,idview:require("../../assets/img/lun03.jpg")},
                ],
                aside:[{id:0,idname:"手机 电话卡"},{id:1,idname:"电视 盒子"},{id:2,idname:"笔记本 平板"},
                    {id:3,idname:"家电 插线板"}, {id:4,idname:"智能 路由器"},{id:5,idname:"显示器 配件"},
                    {id:6,idname:"耳机 音箱"},{id:7,idname:"出行 穿戴"},{id:8,idname:"生活 箱包"}],
                isTrue:[{hide:false},{hide:false},{hide:false},{hide:false},{hide:false},{hide:false},
                    {hide:false},{hide:false},{hide:false}]
            }
        },
        methods:{
            boxshow:function (index) {
                this.isTrue[index].hide=!this.isTrue[index].hide;
            },
            boxhide:function (index) {
                this.isTrue[index].hide=!this.isTrue[index].hide;
            },
            bshow:function (index) {
                this.isTrue[index].hide=!this.isTrue[index].hide;
            },
            bhide:function (index) {
                this.isTrue[index].hide=!this.isTrue[index].hide;
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
    .lun{
        width: 1206px;
        //width: 78.7%;
        height: 410px;
        //border: 0.5px solid;
        margin-left: 140px;
        //margin-left: 9%;
        margin-top: 10px;

        .leftbar{
            float: left;
            width: 240px;
            //width: 20%;
            height: 410px;
            //border: 0.5px solid;
            //background-color: #407B9D;
            background-color: #407B9D;
            //opacity: 0.5;
            ul{
                margin-top: 25px;
            }
            li{
                width: 240px;
                height: 40px;
                //background-color: #FF6700;
                //border: 0.5px solid;
                list-style: none;
                a{
                    text-decoration: none;
                    margin-left: 30px;
                    line-height: 40px;
                    color: white;
                    //border: 0.5px solid;
                    //width: 150px;
                }
            }
            li:hover{
                background-color: @theme-color;
                cursor: pointer;
            }
        }

        .rightlun{
            float: left;
            //border:0.5px solid #eeeeee;
            border-bottom: 0.5px solid #d6d6d6;
            border-top: 0.5px solid #e4e4e4;
            width: 965px;
            //width: 100%;
            height: 410px;
            background-color: #fbfbfb;
        }
    }

    .box1{
        margin-left: 240px;
        width: 965px;
        height: 410px;
        position: absolute;
        z-index: 99;
        background-color: white;
        box-shadow: 4px 0px 2px rgba(0,0,0,0.4);
        display: none;
        cursor: pointer;
        //opacity: 0.9;
    }

    .active{
        display: block;
    }
    .active1{
        background-color: @theme-color;
    }

    .el-carousel__item h3 {
        //color: #475669;
        color: @theme-color;
        font-size: 14px;
        opacity: 0.75;
        line-height: 440px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
        //background-color: @theme-color;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .el-icon-arrow-right{
        color: white;
        float: right;
        font-weight: bold;
        line-height: 40px;
        margin-right: 20px;
    }
</style>