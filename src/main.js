// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import store from './store/store'

import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
import '../src/assets/scss/common.css'
import { AlertPlugin, ToastPlugin, Actionsheet, XHeader, Tabbar, TabbarItem, Toast, Swiper } from 'vux'

Vue.use(Vuex)
Vue.use(XHeader, AlertPlugin, ToastPlugin, VueI18n)
Vue.component('actionsheet', Actionsheet)
Vue.component('XHeader', XHeader)
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.component('toast', Toast)
Vue.component('swiper', Swiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
