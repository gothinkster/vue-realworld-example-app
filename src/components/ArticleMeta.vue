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
    <button v-show="actions" v-on:click="toggleFavorite" class="btn btn-sm"
            :class="{'btn-primary': article.favorited, 'btn-outline-primary': !article.favorited}">
      <i class="ion-heart"></i>
      &nbsp;
      {{article.favorited ? 'Unfavorite Article' : 'Favorite Article'}} <span class="counter">({{article.favoritesCount}})</span>
    </button>
    <button v-show="!actions" v-on:click="toggleFavorite" class="btn btn-outline-primary btn-sm pull-xs-right">
      <i class="ion-heart"></i> {{article.favoritesCount}}
    </button>
  </div>
</template>

<script>
import { FAVORITE_ADD, FAVORITE_REMOVE } from '@/store/actions.type'

export default {
  name: 'RwvArticleMeta',
  props: {
    article: { type: Object, required: true },
    actions: { type: Boolean, required: false }
  },
  methods: {
    toggleFavorite () {
      console.log(this.article)
      const action = this.article.favorited ? FAVORITE_REMOVE : FAVORITE_ADD
      this.$store.dispatch(action, this.article.slug)
    }
  }
}
</script>
