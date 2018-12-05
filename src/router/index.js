import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import createNote from '@/views/createNote/createNote.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/create',
      name: 'createNote',
      component: createNote

    }
  ]
})
