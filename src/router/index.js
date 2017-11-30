import Vue from 'vue'
import Router from 'vue-router'

import RwvHome from '@/views/Home'
import RwvLogin from '@/views/Login'
import RwvRegister from '@/views/Register'
import RwvProfile from '@/views/Profile'
import RwvProfileArticles from '@/views/ProfileArticles'
import RwvProfileFavorited from '@/views/ProfileFavorited'
import RwvSettings from '@/views/Settings'
import RwvArticle from '@/views/Article'
import RwvArticleEdit from '@/views/ArticleEdit'
import RwvHomeGlobal from '@/views/HomeGlobal'
import RwvHomeTag from '@/views/HomeTag'
import RwvHomeMyFeed from '@/views/HomeMyFeed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: RwvHome,
      children: [
        {
          path: '',
          name: 'home',
          component: RwvHomeGlobal
        },
        {
          path: 'my-feed',
          name: 'home-my-feed',
          component: RwvHomeMyFeed
        },
        {
          path: 'tag/:tag',
          name: 'home-tag',
          component: RwvHomeTag
        }
      ]
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
    // Handle child routes with a default, by giving the name to the
    // child.
    // SO: https://github.com/vuejs/vue-router/issues/777
    {
      path: '/@:username',
      component: RwvProfile,
      children: [
        {
          path: '',
          name: 'profile',
          component: RwvProfileArticles
        },
        {
          name: 'profile.favorites',
          path: 'favorites',
          component: RwvProfileFavorited
        }
      ]
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
      props: true,
      component: RwvArticleEdit
    }
  ]
})
