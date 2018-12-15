import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import createNote from '@/views/createNote/createNote.vue'
import login from '@/views/login/login.vue'
import common from '@/common/common.js'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/create',
      name: 'createNote',
      component: createNote

    }
  ]
});

import store from '@/store/index.js';

console.log(store);

router.beforeEach((to, from, next) => {
  //to即将进入的目标路由对象，from当前导航正要离开的路由， next : 下一步执行的函数钩子
  if (to.path === '/login') {
    next();
    store.commit("toLogin");
  } // 如果即将进入登录路由，则直接放行
  else {   //进入的不是登录路由
    if (to.meta.requiresAuth && !common.getCookie('session')) {
      next({ path: '/login' });
      store.commit("toLogin");
    }
    //下一跳路由需要登录验证，并且还未登录，则路由定向到 登录路由
    else { next() }
  }
  //如果不需要登录验证，或者已经登录成功，则直接放行
})

export default router;
