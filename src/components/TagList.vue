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
  name: 'RwvTagList',
  props: ['name', 'onClick']
}
</script>
