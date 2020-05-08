<template>
  <div class="home" id="top">
<!--    <HelloWorld></HelloWorld>-->
    <!--右侧侧边栏-->
    <RightMenu style="float: right"></RightMenu>
    <!--顶部图片-->
    <div class="header-image">
      <img alt="Vue logo" src="../assets/head.png">
    </div>
    <!--顶部菜单栏-->
    <Top></Top>
    <!--搜索-->
    <Search></Search>
    <!--轮播图-->
    <Lunbo_com></Lunbo_com>
    <!--特点链接-->
    <Lianjie></Lianjie>

    <Introduction></Introduction>
    <Discount></Discount>
    <Goods></Goods>

    <!--底部-->
    <Bottom></Bottom>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue';
import Top from '../components/index/Top.vue';
import Search from '../components/index/Search.vue';
import Lunbo from '../components/index/Lunbo.vue';
import RightMenu from "../components/index/RightMenu";
import Lianjie from "../components/index/Lianjie";
import Bottom from "../components/Bottom";
import Introduction from "../components/index/Introduction";
import Discount from "../components/index/Discount";
import Goods from "../components/index/Goods";
import Lunbo_com from "../components/index/Lunbo_com";
import Login from "../components/user/Login";

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Top,
    Search,
    Lunbo,
    RightMenu,
    Lianjie,
    Bottom,
    Introduction,
    Discount,
    Goods,
    Lunbo_com,
    Login
  },
    created() {
        this.$store.commit('clearCart');
    }
}
</script>

<style scoped lang="less">
*{
  margin: 0;
  padding: 0;
}
  .header-image{
    height: 118px;
    //width: 100%;
    //float: left;
    img{
      margin-bottom: 0;
      width: 1500px;
      height: 118px;
    }
  }
</style>
