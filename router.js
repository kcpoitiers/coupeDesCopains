import Vue from 'vue'
import Router from 'vue-router'

import Programme from '@views/Programme.vue'
import Contact from '@views/Contact.vue'
import Home from '@views/Home.vue'
import Entrance from '@views/Entrance.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'entrance',
      component: Entrance
    },
    {
      path: 'home',
      name: 'home',
      component: Home
    },
    {
      path: 'programme',
      name: 'programme',
      component: Programme
    },
    {
      path: 'contact',
      name: 'contact',
      component: Contact
    }
  ]
})
