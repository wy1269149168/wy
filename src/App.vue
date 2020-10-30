<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  provide(){
    return{
      reload: this.reload
    }
  },
  data(){
    return{
      isRouterAlive:true
    }
  },
  methods:{
    reload(){
      this.isRouterAlive=false
      this.$nextTick(function () {
        this.isRouterAlive=true

      })
    }
  }
}
</script>

<style>
  /*body{*/
  /*  background: url("../static/40e24a135712521f215abf8999ffa3aa.jpg") no-repeat;*/
  /*  background-size: cover;*/
  /*}*/
</style>
