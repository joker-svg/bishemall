<template>
    <div>
        <Right-menu class="right"></Right-menu>
        <Top></Top>
        <Search></Search>
        <GoodsDetail></GoodsDetail>

        <Bottom></Bottom>
    </div>
</template>

<script>
    import Top from '../components/index/Top'
    import Search from "../components/index/Search";
    import RightMenu from "../components/index/RightMenu";
    import Bottom from "../components/Bottom";
    import GoodsDetail from "../components/goods/GoodsDetail";
    export default {
        components:{
            Top,
            Search,
            RightMenu,
            Bottom,
            GoodsDetail
        },
        data(){
            return{

            }
        },
        methods:{

        },
        mounted() {

        }
    }
</script>

<style scoped lang="less">
*{
    margin: 0;
    padding: 0;
}

    .right{
        position: relative;
        z-index: 101;
    }
</style>