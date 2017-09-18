<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand"
        :to="{ name: 'home', params: {} }" >
        conduit
      </router-link>
      <ul v-if="!isAuthenticated" class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link class="nav-link active"
            :to="{ name: 'home', params: {} }">
            Home
          </router-link>
        </li>
         <li class="nav-item">
           <router-link class="nav-link"
             :to="{ name: 'login', params: {} }">
             <i class="ion-compose"></i>Sign in
           </router-link>
         </li>
         <li class="nav-item">
           <router-link class="nav-link"
             :to="{ name: 'register', params: {} }">
             <i class="ion-compose"></i>Sign up
           </router-link>
         </li>
       </ul>
       <ul v-else class="nav navbar-nav pull-xs-right">
         <li class="nav-item">
           <router-link class="nav-link active"
             :to="{ name: 'home', params: {} }">
             Home
           </router-link>
         </li>
         <li class="nav-item">
           <router-link class="nav-link"
             :to="{ name: 'article-edit' }">
             <i class="ion-compose"></i>&nbsp;New Article
           </router-link>
         </li>
         <li class="nav-item">
           <router-link class="nav-link"
             :to="{ name: 'settings', params: {} }">
             <i class="ion-gear-a"></i>&nbsp;Settings
           </router-link>
         </li>
         <li class="nav-item">
           <router-link class="nav-link"
           :to="{ name: 'profile', params: {} }">
           {{userName}}
         </router-link>
        </li>
      </ul>
    </div>
  </nav>
 </template>
<script>
export default {
  name: 'rwvHeader',
  computed: {
    isAuthenticated () {
      return this.$store.state.auth.isAuthenticated
    },
    userName () {
      return this.$store.state.auth.user.username
    }
  }
}
</script>
