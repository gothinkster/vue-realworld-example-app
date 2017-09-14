<template>
  <div class="article-preview">
    <div class="article-meta">
      <a href="profile.html"><img v-bind:src="article.author.image" /></a>
      <div class="info">
        <router-link
          :to="{name: 'profile', params: {'id': article.author.username}}"
          class="author">
          {{article.author.username}}
        </router-link>
        <span class="date">{{article.createdAt | date}}</span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i> {{article.favoritesCount}}
      </button>
    </div>
    <router-link
      :to="{name: 'article', params: {'id': article.slug}}"
      class="preview-link">
      <h1>{{article.title}}</h1>
      <p>{{article.description}}</p>
      <span>Read more...</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ArticlePreview',
  props: ['article']
}
</script>
