import Vue from 'vue'
// import Router from 'vue-router'
import VueRouter from 'vue-router'
import * as types from '@/store/types'
import store from '@/store/store'
import home from '@/views/home'
import mailList from '@/views/mailList'
import DongDong from '@/views/DongDong'
import charge from '@/views/charge'
import personal from '@/views/personal'
import login from '@/views/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    // meta: {
    //   requireAuth: true
    // },
    component: login
  },
  {
    path: '/mailList',
    name: 'mailList',
    // meta: {
    //   requireAuth: true
    // },
    component: mailList
  },
  {
    path: '/DongDong',
    name: 'DongDong',
    meta: {
      requireAuth: true
    },
    component: DongDong
  },
  {
    path: '/charge',
    name: 'charge',
    meta: {
      requireAuth: true
    },
    component: charge
  },
  {
    path: '/personal',
    name: 'personal',
    meta: {
      requireAuth: true
    },
    component: personal
  }
]

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(r => r.meta.requireAuth)) {
//     if (store.state.token) {
//       next()
//     } else {
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath}
//       })
//     }
//   } else {
//     next()
//   }
// })

export default router
