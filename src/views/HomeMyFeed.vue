<template>
  <div class="home-my-feed">
    <rwv-article-list type="feed"></rwv-article-list>
  </div>
</template>
<script>
  import RwvArticleList from '@/components/ArticleList'

  export default {
    name: 'rwv-home-my-feed',
    components: {
      RwvArticleList
    }
  }
</script>
