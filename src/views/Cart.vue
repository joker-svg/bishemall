<template>
    <div>
        <div class="top">
            <Top></Top>
        </div>
        <NewOrderCart style="float:left"></NewOrderCart>

        <Bottom class="bottom" style="float:left"></Bottom>
    </div>
</template>

<script>
    import Top from "../components/index/Top";
    import Bottom from "../components/Bottom";
    import NewOrderCart from "../components/user/NewOrderCart";
    export default {
        components:{
            Top,
            Bottom,
            NewOrderCart
        },
        data(){
            return{

            }
        },
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