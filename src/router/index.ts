import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import HomeGlobal from "@/views/HomeGlobal.vue";

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
          component: HomeGlobal
        },
        {
          path: "my-feed",
          name: "home-my-feed",
          component: () =>
            import(
              /* webpackChunkName: "MyFeed", webpackPrefetch: true */ "@/views/HomeMyFeed.vue"
            )
        },
        {
          path: "tag/:tag",
          name: "home-tag",
          component: () =>
            import(
              /* webpackChunkName: "HomeTag", webpackPrefetch: true */ "@/views/HomeTag.vue"
            )
        }
      ]
    },
    {
      name: "login",
      path: "/login",
      component: () =>
        import(
          /* webpackChunkName: "Login", webpackPrefetch: true */ "@/views/Login.vue"
        )
    },
    {
      name: "register",
      path: "/register",
      component: () =>
        import(
          /* webpackChunkName: "Register", webpackPrefetch: true */ "@/views/Register.vue"
        )
    },
    {
      name: "settings",
      path: "/settings",
      component: () =>
        import(
          /* webpackChunkName: "Settings", webpackPrefetch: true */ "@/views/Settings.vue"
        )
    },
    // Handle child routes with a default, by giving the name to the
    // child.
    // SO: https://github.com/vuejs/vue-router/issues/777
    {
      path: "/@:username",
      component: () =>
        import(
          /* webpackChunkName: "Profile", webpackPrefetch: true */ "@/views/Profile.vue"
        ),
      children: [
        {
          path: "",
          name: "profile",
          component: () =>
            import(
              /* webpackChunkName: "ProfileArticles", webpackPrefetch: true */ "@/views/ProfileArticles.vue"
            )
        },
        {
          name: "profile-favorites",
          path: "favorites",
          component: () =>
            import(
              /* webpackChunkName: "ProfileFavorited", webpackPrefetch: true */ "@/views/ProfileFavorited.vue"
            )
        }
      ]
    },
    {
      name: "article",
      path: "/articles/:slug",
      component: () =>
        import(
          /* webpackChunkName: "Article", webpackPrefetch: true */ "@/views/Article.vue"
        ),
      props: true
    },
    {
      name: "article-edit",
      path: "/editor/:slug?",
      props: true,
      component: () =>
        import(
          /* webpackChunkName: "ArticleEdit", webpackPrefetch: true */ "@/views/ArticleEdit.vue"
        )
    }
  ]
});
