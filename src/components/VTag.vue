<template>
  <router-link
    :to="{ name: 'home-tag', params: { tag: name } }"
    :class="className"
  >
    <span v-text="name"></span>
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
  }
};
</script>
