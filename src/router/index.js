import Vue from 'vue'
import Router from 'vue-router'
import Share from '@/views/share'
import index from '@/views/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/share',
      name: 'share',
      component: Share
    }
  ]
})
