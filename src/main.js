// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from '@/router'
import store from '@/store'
import { CHECK_AUTH } from '@/store/actions.type'

import ApiService from '@/common/api.service'
import DateFilter from '@/common/date.filter'
import ErrorFilter from '@/common/error.filter'

import { abilitiesPlugin } from '@casl/vue'
import defineAbilitiesFor from '@/config/ability'

Vue.config.productionTip = false
Vue.filter('date', DateFilter)
Vue.filter('error', ErrorFilter)

Vue.use(abilitiesPlugin, defineAbilitiesFor)

ApiService.init()

router.beforeEach((to, from, next) => {
  // skip for index
  if (to === '/' || to === '') {
    next()
  }

  // if requires auth
  /**
   * same as
   *
   * if (to.matched.some(function(route){
   *  return route.meta.auth
   * }) {
   *  ...
   * }
   */
  to.matched.some(route => {
    if (route.meta.auth) {
      store.dispatch(CHECK_AUTH)
        .then((ctx) => {
          const abilities = defineAbilitiesFor(ctx)
          const canNavigate = abilities.can(route.meta.action || 'read', route.meta.auth)
          if (!canNavigate) {
            return next('/')
          } else {
            next()
          }
        })
    } else {
      next()
    }
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
