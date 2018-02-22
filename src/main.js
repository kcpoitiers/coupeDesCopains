import Vue from 'vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

import App from '@src/App.vue'
import RootStore from '@stores/rootstore/RootStore'
import router from '@/router'

Vue.use(VueMaterial)

// mount
var vm = new Vue({
  el: '#app',
  router,
  store: RootStore,
  render: h => h(App)
})

console.log(vm)
