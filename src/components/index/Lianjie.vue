<template>
    <div class="home">
        <div class="box1">
            <div class="box1-child b1 st1" style="margin-left: 5px">

            </div>
            <div class="box1-child b1 st1">

            </div>
            <div class="box1-child st1">

            </div>
            <div class="box1-child b2" style="margin-left: 5px">

            </div>
            <div class="box1-child b2">

            </div>
            <div class="box1-child b3">

            </div>
        </div>
        <div class="box2" v-for="(item,index) in timg">
            <img v-bind:src="item.src" alt="">
        </div>

    </div>
</template>

<script>

    export default {
        data(){
            return{
                timg:[{id:0,src:require("../../assets/img/t01.jpg")},
                    {id:0,src:require("../../assets/img/t02.jpg")},
                    {id:0,src:require("../../assets/img/t03.jpg")}]
            }
        }
    }
</script>

<style scoped lang="less">

    @line-color: #686868;

    *{
        margin: 0;
        padding: 0;
    }

    .home{
        width: 100%;
        height: 160px;
        margin-top: 20px;
        /*float: left;*/

        .box1{
            margin-left: 140px;
            width: 240px;
            height: 160px;
            float: left;
            background-color: #5F5750;

            .box1-child{
                width: 76px;
                height: 70px;
                float: left;
            }
            .b1{
                border-right: 0.5px solid @line-color;
            }
            .st1{
                margin-top: 10px;
            }
            .b2{
                border-right: 0.5px solid @line-color;
                border-top: 0.5px solid @line-color;
            }
            .b3{
                border-top: 0.5px solid @line-color;
            }
        }
        .box2{
            margin-left: 22px;
            width: 300px;
            height: 160px;
            float: left;

            img{
                width: 300px;
                height: 160px;
            }
        }
    }
</style>