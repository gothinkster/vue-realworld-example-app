// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
import { CHECK_AUTH } from './store/actions.type'

import ApiService from '@/common/api.service'
import DateFilter from '@/common/date.filter'
import ErrorFilter from '@/common/error.filter'

Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.filter('error', ErrorFilter)

ApiService.init()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  beforeMount () {
    this.$store.dispatch(CHECK_AUTH)
  }
})
