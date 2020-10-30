import Vue from "vue";
import VueRouter from "vue-router";

import Main from "../components/Main";
import Login from "../components/Login";
import UserList from "../components/UserList";
import addUser from "../components/addUser";
import addSuccess from "../components/addSuccess";
import UpdateStudent from "../components/UpdateStudent";
import Main_mr from "../components/Main_mr";


Vue.use(VueRouter);

const router = new VueRouter({

  routes: [
    {
      path: '/main',
      name: 'main',
      component: Main,
      meta:{
        requireAuth:true
      },
      children:[
        {
          path: '/',
          redirect: 'index',

          meta:{
            requireAuth:true
          }
        },
        {
          path: '/index',
          name: "index",
          component:Main_mr,
          meta:{
            requireAuth:true
          }
        },

        {
          path: '/userList',
          name: 'userList',
          component: UserList,
          meta:{
            requireAuth:true
          }

        },
        {
          path: '/addUser',
          name: 'addUser',
          component: addUser,
          meta:{
            requireAuth:true
          }
        },
        {
          path: '/addSuccess',
          name: 'addSuccess',
          component: addSuccess,
          meta:{
            requireAuth:true
          }
        },{
          path: '/UpdateStudent',
          name: 'UpdateStudent',
          component: UpdateStudent,
          meta:{
            requireAuth:true
          }
        }

      ]

    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
});
export default router

router.beforeEach((to,from,next)=>{
  if (to.meta.requireAuth){
    if (sessionStorage.getItem('token')==='true'){
      next()
    }else {
      next({
        path: '/login'
      })
    }
  }else {
    if (sessionStorage.getItem('token')==='true'){
      next('/index');
    }else{
      next();
    }
  }
})
