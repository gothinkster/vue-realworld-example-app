<template>
  <div id="app">
    <rwv-header></rwv-header>
    <router-view></router-view>
    <rwv-footer></rwv-footer>
  </div>
</template>

<script>
import RwvHeader from '@/components/Header'
import RwvFooter from '@/components/Footer'

export default {
  name: 'app',
  components: {
    RwvHeader,
    RwvFooter
  }
}
</script>

<style>
html, body, #app {
  height: 100%;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
