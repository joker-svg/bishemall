<template>
    <div class="index-intro">
        <div class="intro-title">
            <img src="../../assets/img/c10.png" alt="">
            <p class="p1">猜你喜欢</p>
            <p class="p2">Guess you like</p>
        </div>
        <div class="intro-content">

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

    *{
        margin: 0;
        padding: 0;
    }

    .index-intro{
        width: 100%;
        height: 400px;
        background-color: #f7f7f7;
        margin-top: 20px;
        padding-top: 10px;
    }

    .intro-title{
        width: 500px;
        height: 40px;
        margin-left: 140px;
        //margin-top: 40px;
        //border: 0.5px solid;
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
            //width: 100px;
        }
        .p2{
            font-size: 14px;
            color: #727f8f;
            margin-left: 10px;
        }
    }
</style>