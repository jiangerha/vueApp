/**
 * Created by superman on 17/2/16.
 * http配置
 */

import axios from 'axios'
import qs from 'qs'
// import store from './store/store'
// import * as types from './store/types'
// import router from './router'

// axios 配置
axios.defaults.timeout = 5000
// axios.defaults.baseURL = 'http://116.62.45.61:8888/services/'
axios.defaults.baseURL = 'http://192.168.0.24/rest/s1/'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded;utf-8'
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器
axios.interceptors.response.use((res) => {
  if (!res) {
    console.log(res)
    return Promise.reject(res)
  }
  return res
}, (error) => {
  console.log('错误')
  return Promise.reject(error)
})

export default axios
