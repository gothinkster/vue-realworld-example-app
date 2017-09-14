<template>
  <div class="article-meta">
    <a href=""><img :src="article.author.image" /></a>
    <div class="info">
      <router-link
        :to="{name: 'profile', params: {'username': article.author.username}}"
        class="author">
        {{article.author.username}}
      </router-link>
      <span class="date">{{article.createdAt | date}}</span>
    </div>
    <button v-show="actions" class="btn btn-sm btn-outline-secondary">
      <i class="ion-plus-round"></i>
      &nbsp;
      Follow {{article.author.username}} <span class="counter">(10)</span>
    </button>
    &nbsp;&nbsp;
    <button v-show="actions" class="btn btn-sm btn-outline-primary">
      <i class="ion-heart"></i>
      &nbsp;
      Favorite Post <span class="counter">({{article.favoritesCount}})</span>
    </button>
    <button v-show="!actions" class="btn btn-outline-primary btn-sm pull-xs-right">
      <i class="ion-heart"></i> {{article.favoritesCount}}
    </button>
  </div>
</template>

<script>

export default {
  name: 'articleMeta',
  props: ['article', 'actions']
}
</script>
