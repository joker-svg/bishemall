<template>
    <div class="search-div">
        <div class="icon">
            <img v-bind:src="imgSrc" alt="">
        </div>
        <div class="menubar">
            <ul>
                <li v-for="item in menu"><router-link to="/">{{item}}</router-link></li>
            </ul>
        </div>
        <div class="search">
            <input class="content" v-model="inputin" placeholder="请输入内容" type="search">
            <input type="submit" class="btnSearch" value="">

        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                inputin:'',
                imgSrc:require("../../assets/img/log.png"),
                menu:["手机","电视","笔记本","家电","路由器","智能硬件"]
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
        //border: 0.5px solid;
    }

    .search-div{
        width: 100%;
        height: 100px;
        //background-color: #d7d7d7;
    }

    .icon{
        .bao;
        width: 50px;
        margin-left: 140px;
    }
    .menubar{
        .bao;
        width: 447px;
        margin-left: 200px;
        li{
            list-style: none;
            float: left;
            line-height: 50px;
            margin-left: 30px;
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
        .bao;
        width: 310px;
        margin-left: 150px;
        .content{
            height: 50px;
            width: 310px;
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
</style>