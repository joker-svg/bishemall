<template>
    <div class="whole">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/center' }">个人中心</el-breadcrumb-item>
            <el-breadcrumb-item>我的信息</el-breadcrumb-item>
            <el-breadcrumb-item>安全中心</el-breadcrumb-item>
            <el-breadcrumb-item>忘记密码</el-breadcrumb-item>
        </el-breadcrumb>

        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="原密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="新密码" prop="newPass">
                <el-input type="password" v-model="ruleForm.newPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data(){
            var validatePass1 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入原密码'));
                } else {
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
                ruleForm: {
                    pass: '',
                    newPass:'',
                    checkPass: '',
                },
                rules: {
                    pass: [
                        { validator: validatePass1, trigger: 'blur' }
                    ],
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
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // if(this.pass === this.$store.state.user.userInfo.user.password){
                        //     this.$axios({
                        //         url: "/api/user/updateUser",
                        //         method: "POST",
                        //         data: this.ruleForm
                        //     }).then(res => {
                        //         this.$message.success("密码修改成功！")
                        //     });
                        // }
                        // else{
                        //     this.$message.error("原密码输入错误！")
                        // }
                    } else {
                        console.log('密码格式输入有错!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped lang="less">
    *{
        margin: 0;
        padding: 0;
    }

    .whole{
        width: 100%;
        height: 500px;

        .el-breadcrumb{
            margin-left: 2%;
            margin-top: 15px;
            font-size: 16px;
        }

        .el-form{
            width: 40%;
            margin-left: 25%;
            margin-top: 100px;

            .el-form-item{
                margin-top: 15px;
            }

            .el-button{
                width: 48%;
                height: 40px;
                margin-top: 40px;
            }
        }
    }

</style>