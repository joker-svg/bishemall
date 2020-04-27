<template>
    <div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          style="width: 250px"
        >
<!--    用户名输入框-->
            <el-form-item prop="username">
                <el-input
                    placeholder="用户名"
                    v-model="ruleForm.username">
                </el-input>
            </el-form-item>
<!--    密码输入框-->
            <el-form-item prop="password">
                <el-input
                    placeholder="密码"
                    type="password"
                    v-model="ruleForm.password">
                </el-input>
            </el-form-item>
<!--    验证码输入框-->
            <el-form-item prop="yanz">
                <el-input
                        class="yz-z"
                        placeholder="验证码"
                        v-model="ruleForm.yanz">
                </el-input>
                <div class="yz-y" @click="h_random">
                    <p>{{  random }}</p>
                </div>
            </el-form-item>

            <router-link
                to="/"
                class="link-forget">
                忘记密码？
            </router-link>

            <el-button
                class="btn-login"
                type="primary"
                @click="submitForm('ruleForm')">
                登录
            </el-button>
        </el-form>
    </div>
</template>

<script>
    import store from '../../store/modules/user'

    export default {
        store,
        data(){
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入验证码'));
                } else if (value !== this.random.toString()) {
                    //alert(this.random+"&&"+value);
                    callback(new Error('验证码错误!'));
                } else {
                    callback();
                }
            };
            return{
                random: '',
                ruleForm:{
                    username:"",
                    password:"",
                    yanz:""
                },
                rules:{
                    username:[
                        {required:true,message:"请输入用户名",trigger:"blur"}
                    ],
                    password:[
                        {required:true,message:"请输入密码",trigger:"blur"}
                    ],
                    yanz:[
                        {validator: validatePass, trigger: 'blur'}
                    ]
                }
            }
        },
        methods:{
            //提交登录事件
            submitForm:function (formName) {
                this.$refs[formName].validate((valid) => {

                    if (valid) {
                        //调用登录接口
                        this.$store.dispatch('login',this.ruleForm).then(res => {
                            this.$message.success("登录成功！");
                            this.$router.push({path:'/'});
                            //this.$router.replace({path:'/'});
                        });

                    } else {
                        console.log('error submit!!');
                        return false;
                    }

                });
            },
            //获取随机数
            h_random:function () {
                this.random = Math.floor(Math.random() *(9999-1000+1))+1000;
            },
        },
        mounted() {
            this.h_random();
        },
        beforeDestroy() {
            if (this.h_random) {
                //console.log("销毁定时器");
                clearInterval(this.h_random); // 在Vue实例销毁前，清除时间定时器
            }
        }
    }
</script>

<style scoped lang="less">
    @theme-color:#FF6700;
    *{
        margin: 0;
        padding: 0;
    }

    .yz-z{
        width: 125px;
        float: left;
    }

    .yz-y{
        width: 125px;
        height: 38px;
        background-color: grey;
        float: left;
        margin-top: 2px;
        border-radius: 5px;

        p{
            line-height: 38px;
            text-align: center;
            color: white;
            font-size: 20px;
            font-weight: bold;
            font-family: "隶书";
        }
    }
    .yz-y:hover{
        cursor: pointer;
    }
    .link-forget{
        float: right;
        text-decoration: none;
        font-size: 13px;color: grey
    }
    .link-forget:hover{
        color: @theme-color;
    }
    .btn-login{
        //background-color: #ff6559;
        background-color: #E6133C;
        width: 250px;
        margin-top: 10px;
    }
    .btn-login:hover{
        background-color: #ff7765;
    }


</style>