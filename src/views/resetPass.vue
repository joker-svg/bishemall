<template>
    <div class="register-box">
        <div class="reg">
            <div class="reg-top">
                <img src="../assets/img/Lo.jpg">
                <p class="reg-p1">毕设商城</p>
                <p class="reg-p2">密码重置</p>
            </div>
            <div class="reg-con">
                <div class="con-title">
                    <p class="title-p1">您好，感谢您来到毕设商城</p>
                    <p class="title-p2">
                        如有账号，请点击
                        <router-link to="/login">登录</router-link>
                    </p>
                </div>

                <div class="con-cont">
                    <el-steps :active="active" finish-status="success">
                        <el-step title="步骤 1"></el-step>
                        <el-step title="步骤 2"></el-step>
                        <el-step title="步骤 3"></el-step>
                    </el-steps>

                    <div class="border-box">
                        <div v-show="showList[0]">
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

                                <el-form-item label="手机号：" prop="phone" class="el-item">
                                    <el-input
                                            placeholder="请输入11位手机号码"
                                            v-model.number="ruleForm.phone"
                                            autocomplete="off">
                                    </el-input>
                                </el-form-item>

                            </el-form>
                        </div>
                        <div v-show="showList[1]">
                            <el-form :model="ruleForm1" status-icon :rules="rules1" ref="ruleForm" label-width="100px" class="demo-ruleForm">

                                <el-form-item label="新密码" prop="newPass">
                                    <el-input type="password"
                                              placeholder="请输入新密码"
                                              v-model="ruleForm1.newPass"
                                              autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="确认密码" prop="checkPass">
                                    <el-input type="password"
                                              placeholder="请再次输入密码"
                                              v-model="ruleForm1.checkPass"
                                              autocomplete="off"></el-input>
                                </el-form-item>
                            </el-form>
                        </div>
                        <div v-show="showList[2]">
                            <h3 style="color: red;margin-left: 170px">密码重置成功</h3>
                        </div>
                    </div>

                    <el-button v-show="show"
                               class="next"
                               style="margin-top: 12px;"
                               @click="next">
                            下一步
                    </el-button>
                    <el-button v-show="!show"
                               class="next"
                               style="margin-top: 12px;"
                               @click="end">
                        完成
                    </el-button>
                </div>
            </div>
        </div>
        <div class="bo">
            <Bottom></Bottom>
        </div>
    </div>
</template>

<script>
    import Bottom from "../components/Bottom";
    export default {
        components:{
            Bottom,
        },
        data(){
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
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入新密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入新密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return{
                show:true,
                active:0,
                ruleForm: {
                    username:'',
                    phone:'',
                },
                rules: {
                    username:[
                        {required:true,message:"请输入用户名",trigger:"blur"},
                        { min: 6, max:20, message: '6-20位字符', trigger: 'blur' },
                        { validator: validateUserName, trigger: 'blur' }
                    ],
                    phone:[
                        {required:true,message:"请输入11位手机号", trigger: 'blur'},
                        { type: 'number', message: '必须为数字'},
                        {validator: validatePhone, trigger: 'blur'}
                    ]
                },
                showList:[true,false,false],
                ruleForm1: {
                    newPass:'',
                    checkPass: '',
                },
                rules1: {
                    newPass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
            next() {
                if(this.active === 0){
                    this.showList[0]=false;
                    this.showList[1]=true;
                    this.active++;
                    // this.$axios({
                    //     url:"/api/user/isUser",
                    //     method:"POST",
                    //     data:this.ruleForm
                    // }).then(res => {
                    //     if(res.data){
                    //         this.showList[0]=false;
                    //         this.showList[1]=true;
                    //         this.active++;
                    //     }else{
                    //         this.$message.error("信息错误！！")
                    //     }
                    // });
                }else if(this.active === 1){
                    this.showList[1]=false;
                    this.active++;
                    // this.$axios({
                    //     url:"/api/user/resetPass",
                    //     method:"POST",
                    //     data:this.ruleForm1
                    // }).then(res => {
                    //     if(res.data){
                    //         this.showList[1]=false;
                    //         this.active++;
                    //     }else{
                    //         this.$message.error("密码重置失败！！")
                    //     }
                    // });

                }else if(this.active++ > 1){
                    this.showList[2]=true;
                    this.show = false;
                    this.$message.success("密码重置成功！")
                }

            },
            end(){
                this.$router.push('/login');
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

    .register-box{
        background-color: #F9F9F8;
        width: 1500px;
        padding-top: 20px;

        .reg{
            width: 1000px;
            height: 750px;
            margin-left: 280px;

            .reg-top{
                //margin-top: 20px;
                height: 100px;
                img{
                    width: 80px;
                    height: 80px;
                    float: left;
                }

                .reg-p1{
                    font-size: 26px;
                    float: left;
                    width: 60px;
                    color: grey;
                    margin-top: 5px;
                    margin-left: 5px;
                }
                .reg-p2{
                    font-size: 26px;
                    font-weight: bold;
                    float: left;
                    width: 140px;
                    height: 60px;
                    line-height: 60px;
                    text-align: center;
                    border-left: 2px solid #dadada;
                    margin-left: 20px;
                    margin-top: 10px;
                    color: #7a7a7a;
                }
            }
            .reg-con{
                border: 0.5px solid #d0d0d0;
                width: 100%;
                height: 650px;
                background-color: white;

                .con-title{
                    width: 100%;
                    height: 50px;
                    border-bottom: 0.5px solid #d0d0d0;
                    p{
                        float: left;
                        line-height: 50px;
                    }

                    .title-p1{
                        color: #ff2528;
                        margin-left: 20px;
                    }
                    .title-p2{
                        color: grey;
                        font-size: 13px;
                        float: right;
                        margin-right: 20px;
                        a{
                            text-decoration: none;
                            color: blue;
                        }
                        a:hover{
                            color: @theme-color;
                        }
                    }
                }
                .con-cont{
                    .el-steps{
                        width: 90%;
                        margin-left: 5%;
                        margin-top: 50px;
                    }

                    .border-box{
                        width: 400px;
                        height: 150px;
                        //border: 0.5px solid;
                        margin-top: 100px;
                        margin-left: 30%;

                        .el-form{
                            width: 95%;
                        }

                        .el-form-item{
                            margin-top: 20px;
                        }
                    }

                    .next{
                        width: 100px;
                        height: 40px;
                        margin-left: 48%;
                    }
                }
            }
        }

        .bo{
            width: 100%;
            background-color: #E8E8E8;
        }
    }
</style>