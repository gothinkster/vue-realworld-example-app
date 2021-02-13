import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        {
          path: "",
          name: "home",
          component: () =>
            import(/* webpackPreload: true */ "@/views/HomeGlobal.vue")
        },
        {
          path: "my-feed",
          name: "home-my-feed",
          component: () =>
            import(/* webpackPrefetch: true */ "@/views/HomeMyFeed.vue")
        },
        {
          path: "tag/:tag",
          name: "home-tag",
          component: () =>
            import(/* webpackPrefetch: true */ "@/views/HomeTag.vue")
        }
      ]
    },
    {
      name: "login",
      path: "/login",
      component: () => import(/* webpackPrefetch: true */ "@/views/Login.vue")
    },
    {
      name: "register",
      path: "/register",
      component: () =>
        import(/* webpackPrefetch: true */ "@/views/Register.vue")
    },
    {
      name: "settings",
      path: "/settings",
      component: () =>
        import(/* webpackPrefetch: true */ "@/views/Settings.vue")
    },
    // Handle child routes with a default, by giving the name to the
    // child.
    // SO: https://github.com/vuejs/vue-router/issues/777
    {
      path: "/@:username",
      component: () =>
        import(/* webpackPrefetch: true */ "@/views/Profile.vue"),
      children: [
        {
          path: "",
          name: "profile",
          component: () =>
            import(/* webpackPrefetch: true */ "@/views/ProfileArticles.vue")
        },
        {
          name: "profile-favorites",
          path: "favorites",
          component: () =>
            import(/* webpackPrefetch: true */ "@/views/ProfileFavorited.vue")
        }
      ]
    },
    {
      name: "article",
      path: "/articles/:slug",
      component: () =>
        import(/* webpackPrefetch: true */ "@/views/Article.vue"),
      props: true
    },
    {
      name: "article-edit",
      path: "/editor/:slug?",
      props: true,
      component: () =>
        import(/* webpackPrefetch: true */ "@/views/ArticleEdit.vue")
    }
  ]
});
