<template>
  <div class="article-preview">
    <RwvArticleMeta isPreview :article="article" />
    <router-link :to="articleLink" class="preview-link">
      <h1 v-text="article.title" />
      <p v-text="article.description" />
      <p v-text="shortBody" />
      <span class="subtext">Read more...</span>
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
    shortBody() {
      let result = "";
      const value = this.article.body;
      if (value.length < 100) return value;
      const words = value.slice(0, 150).split(" ");
      for (let word of words) {
        if (result.length + word.length > 98) break;
        if (result.length > 0) result += " ";
        result += word;
      }
      return result + " ...";
    },
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
