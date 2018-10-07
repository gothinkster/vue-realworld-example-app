<template>
  <div class="article-preview">
    <rwv-article-meta
      :article="article"
      :isPreview="true">
    </rwv-article-meta>
    <router-link
      :to="{name: 'article', params: {'slug': article.slug}}"
      class="preview-link">
      <h1>{{article.title}}</h1>
      <p>{{article.description}}</p>
      <span>Read more...</span>
      <ul class="tag-list">
        <li class="tag-default tag-pill tag-outline"
         v-for="(tag, index) of article.tagList"
         :key="tag + index">
         {{ tag }}
        </li>
      </ul>
    </router-link>
  </div>
</template>

<script>
import RwvArticleMeta from "@/components/ArticleMeta";

export default {
  name: "RwvArticlePreview",
  props: {
    article: { type: Object, required: true }
  },
  components: {
    RwvArticleMeta
  }
};
</script>
