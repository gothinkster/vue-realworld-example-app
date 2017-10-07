import Vue from 'vue'
import Router from 'vue-router'

import RwvHome from '@/views/Home'
import RwvLogin from '@/views/Login'
import RwvRegister from '@/views/Register'
import RwvProfile from '@/views/Profile'
import RwvSettings from '@/views/Settings'
import RwvArticle from '@/views/Article'
import RwvArticleEdit from '@/views/ArticleEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: RwvHome
    },
    {
      name: 'login',
      path: '/login',
      component: RwvLogin
    },
    {
      name: 'register',
      path: '/register',
      component: RwvRegister
    },
    {
      name: 'settings',
      path: '/settings',
      component: RwvSettings
    },
    {
      name: 'profile',
      path: '/profiles/:username',
      component: RwvProfile,
      props: true
    },
    {
      name: 'article',
      path: '/articles/:slug',
      component: RwvArticle,
      props: true
    },
    {
      name: 'article-edit',
      path: '/editor/:slug?',
      component: RwvArticleEdit
    }
  ]
})
