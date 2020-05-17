<template>
    <div>
        <div class="search-div">
            <div class="icon">
<!--                <img v-bind:src="imgSrc" alt="">-->
                <p>{{nowDate}}</p>
            </div>
            <div class="menubar">
                <ul>
                    <li v-for="(item,index) in menu" @mouseover="boxshow(index)" @mouseout="boxhide(index)">
                        <router-link to="/">{{item}}</router-link>
                    </li>
                </ul>
            </div>
            <div class="search">
                <input class="content" v-model="inputIn" placeholder="请输入内容" type="search">
                <input type="submit" class="btnSearch" value="" @click="searchProduct">
            </div>

            <div v-for="(item ,index) in 6">
                <transition name="el-zoom-in-top">
                    <div v-show="isTrue[index].hide" class="transition-box" @mouseover="boxshow(index)" @mouseout="boxhide(index)">
                        <div class="picture-box" v-for="(item,index) in picture">
                            <img v-bind:src="item.psrc" alt="">
                            <p class="p01">{{item.describe}}</p>
                            <p class="p02">{{item.price}}元起</p>
                        </div>
                    </div>
                </transition>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                inputIn:'',
                imgSrc:require("../../assets/img/log.png"),
                menu:["手机","电视","笔记本","家电","路由器","智能硬件"],
                isTrue:[{hide:false},{hide:false},{hide:false},{hide:false},{hide:false},{hide:false}],
                show2: false,
                picture:[{kind:"手机",psrc:require("../../assets/img/top01.jpg"),describe:"华为荣耀20",price:2000},
                            {kind:"手机",psrc:require("../../assets/img/top01.jpg"),describe:"华为荣耀20",price:2000},
                            {kind:"手机",psrc:require("../../assets/img/top01.jpg"),describe:"华为荣耀20",price:2000},
                            {kind:"手机",psrc:require("../../assets/img/top01.jpg"),describe:"华为荣耀20",price:2000},
                            {kind:"手机",psrc:require("../../assets/img/top01.jpg"),describe:"华为荣耀20",price:2000},
                            {kind:"手机",psrc:require("../../assets/img/top01.jpg"),describe:"华为荣耀20",price:2000}],
                nowDate:"",
            }
        },
        methods:{
            currentTime() {
                setInterval(this.getDate,500);
            },
            getDate:function () {
                let dd = new Date().getDate();
                this.nowDate = dd;
            },
            boxshow:function (index) {
                this.isTrue[index].hide=!this.isTrue[index].hide;
                this.show2=!this.show2;
                //New.$emit()
            },
            boxhide:function (index) {
                this.isTrue[index].hide=!this.isTrue[index].hide;
                this.show2=!this.show2;
            },
            searchProduct:function () {
                if(this.inputIn === '手机'){
                    this.$router.push('/products/'+"phone");
                }else if(this.inputIn === '电脑'){
                    this.$router.push('/products/'+"computer");
                }else if(this.inputIn === '优惠'){
                    this.$router.push('/products/'+"discount");
                }else{
                    this.$router.push('/products/'+"0");
                }
            }
        },
        mounted() {
            this.currentTime();
        },
        beforeDestroy() {
            if (this.getDate) {
                console.log("销毁定时器");
                clearInterval(this.getDate); // 在Vue实例销毁前，清除时间定时器
            }
        }
    }
</script>

<style scoped lang="less">
    @theme-color:#FF6700;

    .bao(){
        float: left;
        height: 50px;
        margin-top: 25px;
        //border: 0.5px solid red;
    }

    .search-div{
        //width: 100%;
        width: 1500px;
        height: 100px;
        //border: 0.5px solid red;
    }

    .icon{
        .bao;
        width: 50px;
        margin-left: 140px;
        //border: 0.5px solid;
        background-color: #9d9d9d;

        p{
            line-height: 50px;
            width: 50px;
            text-align: center;
            font-size: 30px;
            font-weight: bold;
            color: white;
        }
    }
    .menubar{
        float: left;
        height: 100px;
        width: 447px;
        margin-left: 200px;
        li{
            list-style: none;
            float: left;
            height: 75px;
            margin-left: 30px;
            margin-top: 40px;
            //border: 0.5px solid;
        }
        a{
            text-decoration: none;
            color: #262626;
        }
        a:hover{
            color: @theme-color;
        }
    }
    .search{
        //.bao;
        float: left;
        height: 50px;
        margin-top: 25px;
        width: 310px;
        margin-left: 150px;
        .content{
            height: 50px;
            width: 310px;
            padding-left: 10px;
        }
        .content:focus{
            //border-color: @theme-color;
            border: 0.5px solid @theme-color;
            outline: none;
        }
        .btnSearch{
            width: 50px;
            height: 50px;
            position: absolute;
            border: 0.5px solid #bbbbbb;
            background-image: url("../../assets/img/7.png");
            //background-size: 45px 45px;
            //background-color: #FF6700;
        }
        .btnSearch:hover{
            background-color: @theme-color;
            cursor: pointer;
            background-image: url("../../assets/img/6.png");
        }
    }

    .transition-box {
        width: 90%;
        height: 220px;
        background-color: white;
        position: absolute;
        z-index: 98;
        margin-top: 100px;
        border-top: 0.5px solid @theme-color;
        box-shadow: 4px 2px 2px rgba(0,0,0,0.4);
        padding-left: 140px;
    }

    .picture-box{
        float: left;
        //border: 0.5px solid;
        margin-top: 19px;
        height: 195px;
        width: 205px;
        img{
            border-left: 1.5px solid #d3d3d3;
            //border-right: 1.5px solid #d3d3d3;
            text-align: center;
            width: 203px;
            //border: 0.5px solid;
            //margin-left: 3px;
            cursor: pointer;
        }
        p{
            //border: 0.5px solid;
            font-size: 12px;
            text-align: center;
            margin-top: 5px;
            cursor: pointer;
        }
        .p01{
            color: #656565;
        }
        .p02{
            color: @theme-color;
        }
    }
</style>