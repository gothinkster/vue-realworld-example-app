<template>
  <a
    href="#"
    v-on:click="onClick('tag', {tag: name})"
    class="tag-pill tag-default">
    {{name}}
  </a>
</template>
<script>
export default {
  name: 'RwvTag',
  props: {
    name: { type: String, required: true },
    onClick: { type: Function, required: true }
  }
}
</script>
