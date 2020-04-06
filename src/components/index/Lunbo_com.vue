<template>
    <div class="lun-box">
        <div class="block">
            <el-carousel height="455px">
                <el-carousel-item v-for="item in list" :key="item.id">
                    <img v-bind:src="item.idview" alt="" style="width: 100%;height: 455px">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="lun">
            <div class="leftbar">
                <ul>
                    <li :class="{active1:isTrue[index].hide}" v-for="(item,index) in aside" :key="item.id"  @mouseover="boxshow(index)" @mouseout="boxhide(index)">
                        <router-link to="/">{{item.idname}}</router-link>
                        <i class="el-icon-arrow-right"></i>
                    </li>
                </ul>
            </div>
            <!--        <div class="rightlun">-->
            <!--            <el-carousel :interval="4000" type="card" height="380px">-->
            <!--                <el-carousel-item v-for="item in list" :key="item.id">-->
            <!--                    <img v-bind:src="item.idview" alt="">-->
            <!--                </el-carousel-item>-->
            <!--            </el-carousel>-->
            <!--        </div>-->
            <!--盒子-->
            <div class="box1" :class="{active:isTrue[index].hide}" v-for="(item , index) in 9"
                 @mouseover="boxshow(index)" @mouseout="boxhide(index)">
                <div class="box1-left">
                    <ul>
                        <li v-for="(item,index) in content">
                            <img v-bind:src="item.psrc" alt="">
                            <p>{{item.name}}</p>
                        </li>
                    </ul>
                </div>
                <div class="box1-right">

                </div>
            </div>
        </div>

    </div>

</template>

<script>

    export default {

        data(){
            return{
                //图片尺寸500*380
                list:[
                    {id:0,idview:require("../../assets/img/L1.jpg")},
                    {id:1,idview:require("../../assets/img/L2.jpg")},
                    {id:2,idview:require("../../assets/img/L1.jpg")},
                    {id:3,idview:require("../../assets/img/L2.jpg")},
                    {id:4,idview:require("../../assets/img/L1.jpg")},
                ],
                aside:[{id:0,idname:"手机 电话卡"},{id:1,idname:"电视 盒子"},{id:2,idname:"笔记本 平板"},
                    {id:3,idname:"家电 插线板"}, {id:4,idname:"智能 路由器"},{id:5,idname:"显示器 配件"},
                    {id:6,idname:"耳机 音箱"},{id:7,idname:"出行 穿戴"},{id:8,idname:"生活 箱包"}],
                isTrue:[{hide:false},{hide:false},{hide:false},{hide:false},{hide:false},{hide:false},
                    {hide:false},{hide:false},{hide:false}],
                content:[{id:0,kinds:"手机 电话卡",name:"Readmi Note8",psrc:require("../../assets/img/b.jpg")},
                    {id:1,kinds:"手机 电话卡",name:"Readmi Note8",psrc:require("../../assets/img/b.jpg")},
                    {id:2,kinds:"手机 电话卡",name:"Readmi Note8",psrc:require("../../assets/img/b.jpg")},
                    {id:3,kinds:"手机 电话卡",name:"Readmi Note8",psrc:require("../../assets/img/b.jpg")},
                    {id:4,kinds:"手机 电话卡",name:"Readmi Note8",psrc:require("../../assets/img/b.jpg")},
                    {id:5,kinds:"手机 电话卡",name:"Readmi Note8",psrc:require("../../assets/img/b.jpg")},
                    {id:0,kinds:"手机 电话卡",name:"Readmi Note8",psrc:require("../../assets/img/b.jpg")},
                    {id:1,kinds:"手机 电话卡",name:"Readmi Note8",psrc:require("../../assets/img/b.jpg")},
                    {id:2,kinds:"手机 电话卡",name:"Readmi Note8",psrc:require("../../assets/img/b.jpg")},
                    {id:3,kinds:"手机 电话卡",name:"Readmi Note8",psrc:require("../../assets/img/b.jpg")},
                    {id:4,kinds:"手机 电话卡",name:"Readmi Note8",psrc:require("../../assets/img/b.jpg")},
                    {id:5,kinds:"手机 电话卡",name:"Readmi Note8",psrc:require("../../assets/img/b.jpg")}]
            }
        },
        methods:{
            boxshow:function (index) {
                this.isTrue[index].hide=!this.isTrue[index].hide;
            },
            boxhide:function (index) {
                this.isTrue[index].hide=!this.isTrue[index].hide;
            }
        }
    }
</script>
<style scoped lang="less">
    @theme-color:#FF6700;

    .block{
        height: 455px;
        margin-right: 40px;
        width: 1480px;
        position: absolute;
    }


    *{
        margin: 0;
        padding: 0;
    }
    .lun-box{
        height: 455px;
        margin-right: 40px;
    }
    .lun{
        width: 1206px;
        height: 410px;
        margin-left: 140px;
        position: absolute;
        z-index: 9;

        .leftbar{
            z-index: 9;
            float: left;
            width: 240px;
            height: 410px;
            background-color: #407B9D;
            margin-top: 20px;
            border-radius: 10px;

            ul{
                margin-top: 25px;
            }
            li{
                width: 240px;
                height: 40px;
                list-style: none;
                a{
                    text-decoration: none;
                    margin-left: 30px;
                    line-height: 40px;
                    color: white;
                }
            }
            li:hover{
                background-color: @theme-color;
                cursor: pointer;
            }
        }

        .rightlun{
            float: left;
            border-bottom: 0.5px solid #d6d6d6;
            border-top: 0.5px solid #e4e4e4;
            width: 965px;
            height: 410px;
            background-color: #fbfbfb;
        }
    }

    .box1{
        margin-left: 240px;
        width: 965px;
        height: 410px;
        position: absolute;
        z-index: 9;
        background-color: white;
        box-shadow: 4px 6px 6px rgba(0,0,0,0.4);
        border-top: 0.5px solid #ececec;
        //box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        display: none;
        cursor: pointer;
        margin-top: 20px;
        border-radius: 10px;

        a{
            color: white;
            text-decoration: none;
            margin-left: 20px;
        }
        a:hover{
            color: @theme-color;
        }

        .box1-left{
            float: left;
            width: 720px;
            height: 360px;
            margin-top: 25px;
            margin-left: 20px;
            li{
                list-style: none;
                float: left;
                width: 220px;
                height: 100px;
                img{
                    float: left;
                }
            }
            p{
                line-height: 50px;
                margin-left: 10px;
                float: left;
                color: #616161;
                font-size: 14px;
            }
        }
        .box1-right{
            float: left;
            border: 0.5px solid;
            width: 200px;
            height: 360px;
            margin-top: 25px;
        }
    }

    .active{
        display: block;
    }
    .active1{
        background-color: @theme-color;
    }

    .el-carousel__item h3 {
        color: @theme-color;
        font-size: 14px;
        opacity: 0.75;
        line-height: 440px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
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