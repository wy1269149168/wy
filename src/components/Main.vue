
<template>
  <el-container style="height: 552px; border: 1px solid #eee">
    <el-aside width="200px" >
      <el-row class="tac">
        <el-col :span="12" style="width: 200px;">
          <el-menu
            default-active="2"
            @close="handleClose"
            @open="handleOpen"
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            router
            style="height: 550px"
            text-color="#fff">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-custom"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
<!--                <el-menu-item :index="{name:'userList',params:{userName:userName}}">用户列表</el-menu-item>-->
<!--                <el-menu-item :index="{name:'addUser',params:{userName:userName}}">添加用户</el-menu-item>-->
                <el-menu-item index="/userList" >用户列表</el-menu-item>
                <el-menu-item index="/addUser" >添加用户</el-menu-item>
              </el-menu-item-group>

            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-house"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">设置</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click=""></el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>

          </el-dropdown-menu>
        </el-dropdown>
        <span>{{username}}</span>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>

    </el-container>


  </el-container>


</template>
<script>
  export default {

    name: "Main",
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },

      logout(){
        console.log(sessionStorage.getItem("token"))
        sessionStorage.setItem("token", 'false');
        this.defined.setUserName("");
        this.$router.replace({name:"login"})
      }
    },
    data() {
      return {
        username: sessionStorage.getItem("username")
      }
    }
  }
</script>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
