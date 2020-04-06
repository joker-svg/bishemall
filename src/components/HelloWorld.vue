<template>
  <div class="header-menu">
    <form action="">
      用户名：<input type="text" name="username" v-model="userName"><br>
      密码：<input type="text" name="password" v-model="password"><br>
      <button type="button" @click="addUser">提交信息</button>
    </form>
    <form action="">
      <input type="text" v-model="keywords" placeholder="输入姓名查询">
      <button type="button" @click="selectUser">查询</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'

export default {
  name: 'HelloWorld',
  props:{
    msg: String
  },
  data(){
    return{
      userName:'',
      password:'',
      keywords:''
    }
  },
  methods:{
    addUser(){ //
      let username = this.userName;
      let password = this.password;
      axios.post('/api/user/addUser',{
        username,password
      }).then(res=>{
        alert('信息添加成功');
      }).catch(err=>{
        console.log(err)
      })
    },
    selectUser(){
      let username = this.keywords;
      axios.post('api/user/selectUser',{
        username
      }).then(res=>{
        let data = res.data[0];
        this.userName = data.username;
        this.password = data.password
      }).catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .header-image{
    height: 147px;
    img{
      width: 100%;
      margin-bottom: 0;
    }
  }

  .header-menu{
    height: 100px;
    border: solid;
    background-color: blue;
  }

</style>
