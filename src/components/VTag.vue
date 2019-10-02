<template>
  <router-link :to="homeLink" :class="className">
    {{ name }}
  </router-link>
</template>

<script>
export default {
  name: "RwvTag",
  props: {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: "tag-pill tag-default"
    }
  },
  computed: {
    homeLink() {
      let linkObj = { name: "home-tag", params: { tag: this.name } };
      return linkObj;
    }
  }
};
</script>
