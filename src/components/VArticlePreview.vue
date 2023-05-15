<template>
  <div class="article-preview">
    <RwvArticleMeta isPreview :article="article" />
    <router-link :to="articleLink" class="preview-link">
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <span>Read more...</span>
      <TagList :tags="article.tagList" />
    </router-link>
  </div>
</template>

<script>
import RwvArticleMeta from "./ArticleMeta";
import TagList from "./TagList";

export default {
  name: "RwvArticlePreview",
  components: {
    RwvArticleMeta,
    TagList
  },
  props: {
    article: { type: Object, required: true }
  },
  computed: {
    articleLink() {
      return {
        name: "article",
        params: {
          slug: this.article.slug
        }
      };
    }
  }
};
</script>
