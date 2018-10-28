<template>
  <div class="article-preview">
    <RwvArticleMeta
      isPreview
      :article="article"
    />
    <router-link
      :to="articleLink"
      class="preview-link">
      <h1>{{article.title}}</h1>
      <p>{{article.description}}</p>
      <span>Read more...</span>
      <ul class="tag-list">
        <li class="tag-default tag-pill tag-outline"
         v-for="(tag, index) of article.tagList"
         :key="tag + index">
         <span>{{ tag }}</span>
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
