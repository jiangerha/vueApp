import Vue from 'vue'
// import Router from 'vue-router'
import VueRouter from 'vue-router'
import * as types from '@/store/types'
import store from '@/store/store'
import home from '@/views/home'
import login from '@/views/login'
import books from '@/views/books'
import broadcast from '@/views/broadcast'
import user from '@/views/user'
import movie from '@/components/movie'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/books',
    name: 'books',
    component: books,
    // redirect: '/books/movie',
    children: [
      {
        path: '/books/movie',
        name: 'movie',
        component: movie
      }
    ]
  },
  {
    path: '/broadcast',
    name: 'broadcast',
    component: broadcast
  },
  {
    path: '/user',
    name: 'user',
    component: user
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('userInfo')) {
  store.commit(types.LOGIN, window.localStorage.getItem('userInfo'))
  console.log(window.localStorage.getItem('userInfo'))
}

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.userInfo) {
      console.log(store.state.userInfo)
      next()
    } else {
      next({
        path: '/login'
        // ,
        // query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router
