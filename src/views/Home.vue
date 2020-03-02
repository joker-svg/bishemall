<template>
  <div class="home">
    <div class="header-image">
      <img alt="Vue logo" src="../assets/head.png">
    </div>
    <Top></Top>
    <Search></Search>
    <Lunbo></Lunbo>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Top from '@/components/index/Top.vue'
import Search from '@/components/index/Search.vue'
import Lunbo from '@/components/index/Lunbo.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Top,
    Search,
    Lunbo
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
    img{
      width: 100%;
      margin-bottom: 0;
    }
  }
</style>
