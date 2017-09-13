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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
