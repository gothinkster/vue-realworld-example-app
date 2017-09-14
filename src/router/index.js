import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/vues/Home'
import Login from '@/vues/Login'
import Profile from '@/vues/Profile'
import Settings from '@/vues/Settings'
import RwvArticle from '@/vues/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'settings',
      path: '/settings',
      component: Settings
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'profile',
      path: '/profiles/:username',
      component: Profile
    },
    {
      name: 'article',
      path: '/articles/:slug',
      component: RwvArticle,
      props: true
    }
  ]
})
