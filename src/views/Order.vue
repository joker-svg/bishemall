<template>
    <div>
        <div class="top">
            <Top></Top>
        </div>
        <Search></Search>

        <GouWu style="float:left"></GouWu>

        <Bottom class="bottom" style="float:left"></Bottom>
    </div>
</template>

<script>
    import Top from "../components/index/Top";
    import Search from "../components/index/Search";
    import Bottom from "../components/Bottom";
    import GouWu from "../components/user/GouWu";

    export default {
        components:{
            Top,
            Search,
            Bottom,
            GouWu
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
        background-color: #262626;
    }
    .bottom{
        width: 100%;
        height: 350px;
        background-color: #E8E8E8;
    }
</style>