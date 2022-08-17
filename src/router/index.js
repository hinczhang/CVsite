import Vue from 'vue'
import Router from 'vue-router'
import Mainpage from '@/views/MainPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'CV page',
      component: Mainpage
    }
  ]
})
