/**
 * Created by dora on 18/6/6.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import movie from './module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movie
  }
})
