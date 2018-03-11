import Vue from 'vue'
import Router from 'vue-router'

import Programme from '@views/Programme.vue'
import Inscription from '@views/Inscription.vue'
import Festival from '@views/Festival.vue'
import Info from '@views/Info.vue'
import Contact from '@views/Contact.vue'
import Accueil from '@views/Accueil.vue'
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
      path: 'accueil',
      name: 'accueil',
      component: Accueil
    },
    {
      path: 'programme',
      name: 'programme',
      component: Programme
    },
    {
      path: 'inscription',
      name: 'inscription',
      component: Inscription
    },
    {
      path: 'info',
      name: 'info',
      component: Info
    },
    {
      path: 'festival',
      name: 'festival',
      component: Festival
    },
    {
      path: 'contact',
      name: 'contact',
      component: Contact
    }
  ]
})
