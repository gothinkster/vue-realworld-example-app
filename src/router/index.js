import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        {
          path: "",
          name: "home",
          component: () =>
            import(/* webpackPreload: true */ "@/views/HomeGlobal")
        },
        {
          path: "my-feed",
          name: "home-my-feed",
          component: () =>
            import(/* webpackPrefetch: true */ "@/views/HomeMyFeed")
        },
        {
          path: "tag/:tag",
          name: "home-tag",
          component: () => import(/* webpackPrefetch: true */ "@/views/HomeTag")
        }
      ]
    },
    {
      name: "login",
      path: "/login",
      component: () => import(/* webpackPrefetch: true */ "@/views/Login")
    },
    {
      name: "register",
      path: "/register",
      component: () => import(/* webpackPrefetch: true */ "@/views/Register")
    },
    {
      name: "settings",
      path: "/settings",
      component: () => import(/* webpackPrefetch: true */ "@/views/Settings")
    },
    // Handle child routes with a default, by giving the name to the
    // child.
    // SO: https://github.com/vuejs/vue-router/issues/777
    {
      path: "/@:username",
      component: () => import(/* webpackPrefetch: true */ "@/views/Profile"),
      children: [
        {
          path: "",
          name: "profile",
          component: () =>
            import(/* webpackPrefetch: true */ "@/views/ProfileArticles")
        },
        {
          name: "profile-favorites",
          path: "favorites",
          component: () =>
            import(/* webpackPrefetch: true */ "@/views/ProfileFavorited")
        }
      ]
    },
    {
      name: "article",
      path: "/articles/:slug",
      component: () => import(/* webpackPrefetch: true */ "@/views/Article"),
      props: true
    },
    {
      name: "article-edit",
      path: "/editor/:slug?",
      props: true,
      component: () => import(/* webpackPrefetch: true */ "@/views/ArticleEdit")
    }
  ]
});
