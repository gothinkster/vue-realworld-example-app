import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/vues/Home'
import Login from '@/vues/Login'
import Profile from '@/vues/Profile'
import Settings from '@/vues/Settings'
import Article from '@/vues/Article'

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
      path: '/profile/:username',
      component: Profile
    },
    {
      name: 'article',
      path: '/article/:slug',
      component: Article,
      props: true
    }
  ]
})
