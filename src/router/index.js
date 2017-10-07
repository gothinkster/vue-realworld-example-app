import Vue from 'vue'
import Router from 'vue-router'

import RwvHome from '@/vues/Home'
import RwvLogin from '@/vues/Login'
import RwvRegister from '@/vues/Register'
import RwvProfile from '@/vues/Profile'
import RwvSettings from '@/vues/Settings'
import RwvArticle from '@/vues/Article'
import RwvArticleEdit from '@/vues/ArticleEdit'

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
