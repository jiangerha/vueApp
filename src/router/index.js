import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import mailList from '@/views/mailList'
import DongDong from '@/views/DongDong'
import charge from '@/views/charge'
import personal from '@/views/personal'
import loginOuter from '@/components/loginOuter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'loginOuter',
      component: loginOuter
    },
    {
      path: '/mailList',
      name: 'mailList',
      component: mailList
    },
    {
      path: '/DongDong',
      name: 'DongDong',
      component: DongDong
    },
    {
      path: '/charge',
      name: 'charge',
      component: charge
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    }
  ]
})
