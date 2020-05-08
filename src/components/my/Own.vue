<template>
    <div class="whole">
        <h3>个人资料</h3>

        <div class="header">
            <div class="img-box">
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </div>
            <div class="info-box">
                <div class="info-1">
                    <p>
                        用户名：{{$store.state.user.userInfo.user.username}}
                    </p>
                </div>
                <div class="info-2">
                    <p>
                        <span>手机</span>
                        ：{{$store.state.user.userInfo.user.phone}}
                    </p>
                    <p>
                        <span>邮箱</span>
                        ：{{$store.state.user.userInfo.user.email}}
                    </p>
                </div>
            </div>
        </div>

        <div class="content">
            <div class="left">
                <el-form :model="ruleForm"
                         :rules="rules"
                         ref="ruleForm"
                         label-width="100px"
                         class="demo-ruleForm">

                    <el-form-item label="呢称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>

                    <el-form-item label="性别" prop="sex">
                        <el-radio-group v-model="ruleForm.sex">
                            <el-radio label="男"></el-radio>
                            <el-radio label="女" style="margin-left: 20px"></el-radio>
                        </el-radio-group>
                    </el-form-item>


                    <el-form-item label="生日" required>
                        <el-col :span="24">
                            <el-form-item prop="date1">
                                <el-date-picker
                                        type="date"
                                        placeholder="选择日期"
                                        v-model="ruleForm.birthday"
                                        style="width: 100%;">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>

                    <el-form-item label="民族" prop="nation">
                        <el-select v-model="ruleForm.nation"
                                   placeholder="请选择民族">
                            <el-option label="汉族" value="汉族"></el-option>
                            <el-option label="黎族" value="黎族"></el-option>
                            <el-option label="苗族" value="苗族"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="星座" prop="region">
                        <el-select v-model="ruleForm.constellation" placeholder="请选择星座">
                            <el-option label="天蝎座" value="shanghai"></el-option>
                            <el-option label="射手座" value="beijing"></el-option>
                            <el-option label="白羊座" value="白羊座"></el-option>
                            <el-option label="处女座" value="处女座"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="学历" prop="region">
                        <el-select v-model="ruleForm.record" placeholder="请选择学历">
                            <el-option label="本科" value="本科"></el-option>
                            <el-option label="硕士" value="硕士"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="行业" prop="region">
                        <el-select v-model="ruleForm.trade" placeholder="请选择行业">
                            <el-option label="IT" value="IT"></el-option>
                            <el-option label="管理" value="管理"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="联系地址" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.address"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary"
                                   @click="submitForm('ruleForm')">
                                    立即保存
                        </el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>

            <div class="right">
                <h5>个人偏好</h5>
                <div class="flag">
                    <p v-for="(item,index) in itemFlag"
                       @click="checked(index)"
                       :class="{'active':itemFlag[index].is_select}">
                        {{item.name}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                ruleForm: {
                    name: '',
                    sex:'',
                    birthday:'',
                    nation: '',
                    constellation: '',
                    record: '',
                    trade: '',
                    address: '',
                    username:''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入呢称', trigger: 'blur' },
                        { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
                    ],
                    sex: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    birthday: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    nation: [
                        { required: true, message: '请选择民族', trigger: 'change' }
                    ],
                    constellation: [
                        { required: true, message: '请选择星座', trigger: 'change' }
                    ],
                    record: [
                        { required: true, message: '请选择学历', trigger: 'change' }
                    ],
                    trade: [
                        { required: true, message: '请选择行业', trigger: 'change' }
                    ],
                    address: [
                        { required: true, message: '请填写联系地址', trigger: 'blur' }
                    ]
                },
                userInfo:[],
                itemFlag:[{id:0,name:'电脑',is_select:false},{id:0,name:'手机',is_select:false},{id:0,name:'平板',is_select:false},
                            {id:0,name:'家电',is_select:false},{id:0,name:'户外',is_select:false},{id:0,name:'数码',is_select:false}]
            }
        },
        methods:{
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.ruleForm.username = this.$store.state.user.userInfo.user.username;
                        this.getUserInfo();
                        if(this.userInfo.length > 0){
                            this.$axios({
                                url:"/api/userInfo/updateUserInfo",
                                method:"POST",
                                data:this.ruleForm
                            }).then(res => {
                                alert('保存成功!');
                            })
                        }else{
                            this.$axios({
                                url:"/api/userInfo/insertUserInfo",
                                method:"POST",
                                data:this.ruleForm
                            }).then(res => {
                                alert('保存成功!');
                            });
                        }
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            getUserInfo:function () {
                let username = this.$store.state.user.userInfo.user.username;

                this.$axios({
                    url:"/api/userInfo/selectUserInfo",
                    method:"POST",
                    data:{
                        username:username
                    }
                }).then(res => {
                        this.userInfo = res.data;
                })
            },
            checked:function (index) {
                this.itemFlag[index].is_select = !this.itemFlag[index].is_select;
            }
        },

        created() {
            this.getUserInfo();
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
        h3{
            margin-left: 20px;
            margin-top: 10px;
            color: grey;
        }
    }

    .header{
        width: 95%;
        height: 150px;
        margin-left: 20px;
        margin-top: 20px;
        background-color: #F9F9F8;
        border-top: 1px solid #E1DFDA;

        .img-box{
            width: 80px;
            height: 80px;
            border: 0.5px solid #DDDDDD;
            border-radius: 40px;
            margin-top: 35px;
            margin-left: 10%;
            float: left;

            .el-avatar{
                width: 79px;
                height: 79px;
                margin-left: 0.5px;
                margin-top: 0.5px;
                border-radius: 39.5px;
            }
        }
        .info-box{
            float: left;
            margin-top: 35px;
            height: 80px;
            width: 50%;
            margin-left: 2%;
            //border: 0.5px solid;

            .info-1{
                float: left;
                height: 80px;
                width: 40%;
                //border: 0.5px solid;
                p{
                    color: grey;
                    line-height: 80px;
                }
            }
            .info-2{
                float: left;
                height: 80px;
                width: 50%;
                //border: 0.5px solid;
                p{
                    color: grey;
                    margin-top: 10px;
                    font-size: 14px;
                    span{
                        background-color: #BCC9B0;
                        color: white;
                        font-size: 13px;
                        padding: 2px;
                    }
                }
            }
        }
    }

    .content {
        width: 95%;
        height: 650px;
        margin-left: 20px;
        margin-top: 20px;
        //border: 0.5px solid;
    }

    .left{
        float: left;
        //width: 60%;
        margin-left: 10%;
        //border: 0.5px solid red;

        .el-form{
            width: 100%;
            .el-form-item{
                margin-top: 20px;
                .el-select{
                    width: 300px;
                }
                .el-button{
                    width: 100px;
                    height: 40px;
                }
            }
        }
    }
    .right{
        float: left;
        width: 30%;
        height: 500px;
        margin-top: 20px;
        margin-left: 10%;
        //border: 0.5px solid;
        h5{
            margin-left: 10%;
        }

        .flag{
            width: 80%;
            height: 300px;
            margin-left: 10%;
            margin-top: 20px;
            //border: 0.5px solid;

            p{
                width: 40%;
                height: 30px;
                border: 0.5px solid #EFEEEC;
                line-height: 30px;
                text-align: center;
                font-size: 13.5px;
                color: #666460;
                float: left;
                margin-left: 5%;
                margin-top: 10px;
            }
            p:hover{
                border: 0.5px solid red;
                cursor: pointer;
            }
            .active{
                border: 0.5px solid red;
            }
        }
    }
</style>