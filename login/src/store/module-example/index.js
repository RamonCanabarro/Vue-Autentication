import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)
export default new Vuex.Store({
  namespaced: true,
  getters,
  actions,
  state: {
    Login: {
      list: []
    }
  },
  mutations: {
    ADD_LOGIN(state, obj) {
      state.Login.list.unshift(obj)
    }
  }
})