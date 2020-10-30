<template>
  <body id="poster">
    <div id = "loginMain">
      <el-form :model="ruleForm"  status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm test" style="">
        <h1 style="text-align: center">欢迎登录</h1>
        <el-form-item label="用户名" prop="name" >
          <el-input type="text" v-model="ruleForm.name" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass" >
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item class="login_btn">
          <el-button type="primary" @click="login">提交</el-button>
          <el-button  >注册</el-button>

        </el-form-item>
      </el-form>
    </div>
  </body>
</template>
<script>
  export default {
    data() {

      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }  else {
          callback();
        }
      };
      return {
        ruleForm: {
          name: '',
          pass: ''

        },
        rules: {
          name: [
            { validator: validatePass, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass2, trigger: 'blur' }
          ]

        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.login();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      login(){

        this.$axios.post('/login', {
          userName: this.ruleForm.name,
          passWord: this.ruleForm.pass
        }).then(successResponse=>{
          console.log(successResponse)
          if (successResponse.status===200){
            sessionStorage.setItem("token","true")
            sessionStorage.setItem("username",successResponse.data.userName);
            // this.defined.setUserName(successResponse.data.userName);
            this.$router.replace({name:"index"})
          }
        }).catch(failResponse=>{

        })
      }
    }
  }
</script>
<style>
  #poster{
    background: url("../../static/40e24a135712521f215abf8999ffa3aa.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  body{
    margin: 0;
  }
  .test{
    width: 80%;
    margin: auto;
    /* color: aliceblue; */
   /* background-color: white;*/
  }
  .login_btn{
    margin-left: 40px;
    /*text-align: center;*/
  }
  #loginMain{
    background-color: white;
    width: 500px;
    height: 300px;
    position: absolute;
    left: 200px;
    top: 200px;
    border-radius: 15px;
    opacity: 95%;

  }
</style>
