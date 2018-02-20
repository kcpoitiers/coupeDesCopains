import Vue from 'vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

import App from './App.vue'
import RootStore from './stores/rootstore/RootStore'

Vue.use(VueMaterial)

// mount
var vm = new Vue({
  el: '#app',
  store: RootStore,
  render: h => h(App)
})

console.log(vm)
