import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/vues/Home'
import Login from '@/vues/Login'
import Profile from '@/vues/Profile'
import Settings from '@/vues/Settings'
import ArticleEdit from '@/vues/ArticleEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: Profile
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/article/:id',
      name: 'article',
      component: ArticleEdit
    }
  ]
})
