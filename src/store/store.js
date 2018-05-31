/**
 * Created by superman on 17/2/16.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: {},
    userInfo: null,
    title: ''
  },
  mutations: {
    [types.LOGIN]: (state, data) => {
      localStorage.userInfo = data
      state.userInfo = data
    },
    [types.LOGOUT]: (state) => {
      localStorage.removeItem('userInfo')
      state.userInfo = null
    },
    [types.TITLE]: (state, data) => {
      state.title = data
    }
  }
})
