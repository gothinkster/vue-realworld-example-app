<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand"
        :to="{ name: 'home', params: {} }" >
        conduit
      </router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
         <!-- Add "active" class when you're on that page" -->
          <router-link class="nav-link active"
            :to="{ name: 'home', params: {} }">
            Home
          </router-link>
        </li>
       <li class="nav-item">
         <router-link class="nav-link"
           :to="{ name: 'article', params: {} }">
           <i class="ion-compose"></i>&nbsp;New Post
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
           :to="{ name: 'login', params: {} }">
           <i class="ion-compose"></i>Sign up
         </router-link>
       </li>
     </ul>
    </div>
  </nav>
 </template>
<script>
export default {
  name: 'rwvHeader'
}
</script>
