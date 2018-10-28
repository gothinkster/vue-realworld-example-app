<template>
  <div class="article-preview">
    <RwvArticleMeta
      isPreview
      :article="article"
    />
    <router-link
      :to="articleLink"
      class="preview-link"
    >
      <h1 v-text="article.title" />
      <p v-text="article.description" />
      <span>Read more...</span>
      <ul class="tag-list">
        <li
          class="tag-default tag-pill tag-outline"
          v-for="(tag, index) of article.tagList"
          :key="tag + index"
        >
          <span v-text="tag" />
        </li>
      </ul>
    </router-link>
  </div>
</template>

<script>
import RwvArticleMeta from "./ArticleMeta";

export default {
  name: "RwvArticlePreview",
  components: {
    RwvArticleMeta
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
