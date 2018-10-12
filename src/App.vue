<template>
  <div id="app">
    <rwv-header></rwv-header>
    <router-view></router-view>
    <rwv-footer></rwv-footer>
  </div>
</template>

<script>
import RwvHeader from "@/components/TheHeader";
import RwvFooter from "@/components/TheFooter";

export default {
  name: "App",
  components: {
    RwvHeader,
    RwvFooter
  }
};
</script>

<style>
</style>
