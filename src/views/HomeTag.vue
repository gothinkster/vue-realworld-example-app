<template>
  <div class="home-tag">
    <rwv-article-list :tag="tag"></rwv-article-list>
  </div>
</template>
<script>
  import RwvArticleList from '@/components/ArticleList'

  export default {
    name: 'rwv-home-tag',
    components: {
      RwvArticleList
    },
    computed: {
      tag () {
        return this.$route.params.tag
      }
    }
  }
</script>
