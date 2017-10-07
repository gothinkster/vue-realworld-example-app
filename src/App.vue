<template>
  <div id="app">
    <rwv-header></rwv-header>
    <router-view></router-view>
    <rwv-footer></rwv-footer>
  </div>
</template>

<script>
import RwvHeader from '@/components/VHeader'
import RwvFooter from '@/components/VFooter'

export default {
  name: 'app',
  components: {
    RwvHeader,
    RwvFooter
  }
}
</script>

<style>
</style>
