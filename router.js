import Vue from 'vue'
import Router from 'vue-router'

import Programme from '@views/Programme.vue'
import Home from '@views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: './',
      name: 'entrance'
      // component: Home
    },
    {
      path: './home',
      name: 'home',
      component: Home
    },
    {
      path: './programme',
      name: 'programme',
      component: Programme
    }
  ]
})
