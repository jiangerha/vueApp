// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import store from './store/store'

import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './http'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'

import { AlertPlugin, ToastPlugin, Actionsheet, XHeader, Tabbar, TabbarItem, Toast, Swiper, Panel } from 'vux'
// 公共样式
import '../src/assets/scss/common.css'

Vue.use(Vuex)
Vue.use(XHeader, AlertPlugin, ToastPlugin, VueI18n)
Vue.component('actionsheet', Actionsheet)
Vue.component('XHeader', XHeader)
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.component('toast', Toast)
Vue.component('swiper', Swiper)
Vue.component('panel', Panel)

Vue.config.productionTip = false

// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  components: { App },
  template: '<App/>'
})
