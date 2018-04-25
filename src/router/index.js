import Vue from 'vue'
import Router from 'vue-router'
import MainCard from '@/components/MainCard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      mode: 'history',
      path: '/',
      name: 'MainCard',
      component: MainCard
    }
  ]
})
