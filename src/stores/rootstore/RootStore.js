import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  entered: false
}

const mutations = {
  ENTER_SITE: (state) => {
    state.entered = true
  }
}

const actions = {
  enterSite: (state) => {
    store.commit('ENTER_SITE')
  }
}

const getters = {
  entered: (state) => state.entered
}

let store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions,
  strict: true
})

global.store = store

export default store
