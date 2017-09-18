// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App'
import { API_URL } from '@/common/config'
import router from './router'
import store from './store'

import DateFilter from '@/common/date.filter'

Vue.config.productionTip = false

const http = axios.create({baseURL: API_URL})
Vue.use(VueAxios, http)

Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
