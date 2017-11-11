<template>
  <div class="profile-page">
    <RwvArticleList :author="author"></RwvArticleList>
  </div>
</template>
<script>
  import RwvArticleList from '@/components/ArticleList'

  export default {
    name: 'RwvProfileArticles',
    components: {
      RwvArticleList
    },
    computed: {
      author () {
        return this.$route.params.username
      }
    }
  }
</script>
