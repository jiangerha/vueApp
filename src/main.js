// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import store from './store/store'

import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './http'
import Vuex from 'vuex'
import VueMaterial from 'vue-material'
import scroll from './components/scroll'
// 公共样式

import '../node_modules/vue-material/dist/vue-material.css'
// import '../node_modules/vue-material/dist/theme/black-green-dark.css'
import '../src/assets/scss/reset.css'

Vue.use(Vuex)
Vue.use(VueMaterial)
Vue.component('scroll', scroll)
Vue.config.productionTip = false

// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  components: { App },
  template: '<App/>'
})
