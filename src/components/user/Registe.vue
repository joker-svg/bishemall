<template>
    <div style="width: 400px;height: 480px">
        <el-form :model="ruleForm"
                 status-icon
                 :rules="rules"
                 ref="ruleForm"
                 label-width="100px"
                 class="demo-ruleForm">

            <el-form-item label="用户名：" prop="username">
                <el-input
                        placeholder="6-20位字符，字母或者字母与数字组合"
                        v-model="ruleForm.username"
                        autocomplete="off">
                </el-input>
            </el-form-item>

            <el-form-item label="密码：" prop="password" class="el-item">
                <el-input
                    type="password"
                    v-model="ruleForm.password"
                    placeholder="8-20位字符，至少两种字符"
                    autocomplete="off">
                </el-input>
            </el-form-item>
            <el-form-item label="确认密码：" prop="checkPass" class="el-item">
                <el-input
                    type="password"
                    v-model="ruleForm.checkPass"
                    placeholder="请再次输入密码"
                    autocomplete="off">
                </el-input>
            </el-form-item>

            <el-form-item label="手机号：" prop="phone" class="el-item">
                <el-input
                    placeholder="请输入11位手机号码"
                    v-model.number="ruleForm.phone"
                    autocomplete="off">
                </el-input>
            </el-form-item>

            <el-form-item label="验证码：" prop="yanz" class="el-item">
                <el-input
                        placeholder="验证码"
                        v-model="ruleForm.yanz"
                        style="width: 160px;float: left"
                        autocomplete="off">
                </el-input>

                <div class="yz-y" @click="h_random">
                    <p>{{  random }}</p>
                </div>
            </el-form-item>

            <el-form-item label="邮箱：" prop="email" class="el-item">
                <el-input
                        placeholder="请输入邮箱地址"
                        v-model="ruleForm.email"
                        autocomplete="off">
                </el-input>
            </el-form-item>

            <el-checkbox v-model="checked" class="check el-item">
                <p>
                    我已阅读并同意,
                    <router-link to="/">《相关条约》</router-link>
                </p>
            </el-checkbox>
            <el-form-item class="el-item">
                <el-button
                    class="btn-login"
                    type="primary"
                    @click="submitForm('ruleForm')">
                    立即注册 完成绑定
                </el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
    export default {
        data(){
            var validateYanz = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入验证码'));
                } else if (value !== this.random.toString()) {
                    //alert(this.random+"&&"+value);
                    callback(new Error('验证码错误!'));
                } else {
                    callback();
                }
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if(value/1){
                        callback(new Error('请输入字母或数字与字母组合'));
                    }else{
                        if (this.ruleForm.checkPass !== '') {
                            this.$refs.ruleForm.validateField('checkPass');
                        }
                        callback();
                    }
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            var validatePhone = (rule, value, callback) =>{
                var str = value.toString();
                var len = str.length;
                if(len !== 11){
                    callback(new Error('手机号码位数错误'));
                    //callback(new Error(3));
                }else{
                    callback();
                }
            };
            var validateUserName = (rule, value, callback) =>{
                if(value/1){
                    callback(new Error('请输入字母或者数字与字母组合'));
                }else{
                    callback();
                }
            };
            return{
                checked: true,
                random: '',
                ruleForm: {
                    username:"",
                    password: '',
                    checkPass: '',
                    phone:"",
                    yanz:"",
                    email:""
                },
                rules: {
                    username:[
                        {required:true,message:"请输入用户名",trigger:"blur"},
                        { min: 6, max:20, message: '6-20位字符', trigger: 'blur' },
                        { validator: validateUserName, trigger: 'blur' }
                    ],
                    password: [
                        //{required:true,message:"请输入密码",trigger:"blur"},
                        { validator: validatePass, trigger: 'blur' },
                        { min: 8, max:20, message: '8-20位字符', trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    yanz:[
                        {validator: validateYanz, trigger: 'blur'}
                    ],
                    phone:[
                        {required:true,message:"请输入11位手机号", trigger: 'blur'},
                        { type: 'number', message: '必须为数字'},
                        {validator: validatePhone, trigger: 'blur'}
                    ],
                    email:[
                        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                        // { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
            //获取随机数
            h_random:function () {
                this.random = Math.floor(Math.random() *(9999-1000+1))+1000;
            },
            submitForm:function (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //调用注册接口
                        this.$axios({
                            url:"/api/user/addUser",
                            method:"POST",
                            data:this.ruleForm
                        }).then(res => {
                            //alert("注册成功");
                            console.log(res);
                            //调用store的方法，把用户数据传过去
                            //this.$store.commit('setUserInfo',res.data);
                            //this.$store.commit('setUserInfo',res.data);
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }

                });
            }
        },
        mounted() {
            this.h_random();
        },
    }
</script>

<style scoped lang="less">
    *{
        margin: 0;
        padding: 0;
    }
    .demo-ruleForm{
        .el-item{
            margin-top: 20px;
        }
        .yz-y{
            width: 125px;
            height: 38px;
            background-color: grey;
            float: left;
            margin-top: 2px;
            border-radius: 5px;
            margin-left: 14px;

            p{
                line-height: 38px;
                text-align: center;
                color: white;
                font-size: 20px;
                font-weight: bold;
                font-family: "隶书";
            }
        }

        .check{
            margin-left: 100px;
            p{
                color: #262626;
                font-size: 13px;
                a{
                    text-decoration: none;
                    color: blue;
                }
                a:hover{
                    cursor: pointer;
                    color: #FF6700;
                    text-decoration: blue;
                }
            }
        }

        .btn-login{
            width: 300px;
            height: 40px;
            font-size: 16px;
            background-color: #E6133C;
            border: none;
            margin-top: 30px;
        }
    }
</style>