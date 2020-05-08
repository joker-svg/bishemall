<template>
    <div>
        <div class="top">
            <Top></Top>
        </div>
        <PayMoney style="float: left"></PayMoney>
        <Bottom class="bottom" style="float:left"></Bottom>
    </div>
</template>

<script>
    import Top from "../components/index/Top";
    import Bottom from "../components/Bottom";
    import PayMoney from "../components/user/PayMoney";
    export default {
        components:{
            Top,
            Bottom,
            PayMoney
        },
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
    .top{
        width: 100%;
        //padding-left: 20px;
        background-color: #262626;
    }
    .bottom{
        //width: 100%;
        width: 1518px;
        height: 350px;
        background-color: #E8E8E8;
    }
</style>