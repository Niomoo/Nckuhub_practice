import Vue from 'vue'
import Router from 'vue-router'
import Foodpanda from '@/components/Foodpanda'
import mainPage from '@/components/mainPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Foodpanda',
      component: Foodpanda
    },
    {
      path: '/mainPage',
      name: 'mainPage',
      component: mainPage
    }
  ]
})
