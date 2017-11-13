<template>
  <div class="article-meta">
    <a href=""><img :src="article.author.image"/></a>
    <div class="info">
      <router-link
        :to="{ name: 'profile', params: { 'username': article.author.username } }"
        class="author">
        {{ article.author.username }}
      </router-link>
      <span class="date">{{ article.createdAt | date }}</span>
    </div>

    <template v-if="isCurrentUser() && actions">
      <router-link class="btn btn-sm btn-outline-secondary" :to="{ name: 'article-edit', params: { slug: this.article.slug } }">
        <i class="ion-edit"></i>
        Edit Article
      </router-link>
      <a href="#" class="btn btn-outline-danger btn-sm">
        <i class="ion-trash-a"></i>
        Delete Article
      </a>
    </template>
    <template v-else>
      <button v-if="actions" class="btn btn-sm btn-outline-secondary">
        <i class="ion-plus-round"></i>
        Follow {{article.author.username}} <span class="counter">(10)</span>
      </button>
      <button
        class="btn btn-sm"
        v-show="actions"
        v-on:click="toggleFavorite"
        :class="{
          'btn-primary': article.favorited,
          'btn-outline-primary': !article.favorited
        }">
        <i class="ion-heart"></i>
        {{ article.favorited ? 'Unfavorite Article' : 'Favorite Article' }}
        <span class="counter">
        ({{article.favoritesCount}})
      </span>
      </button>
      <button
        class="btn btn-sm pull-xs-right"
        v-if="!actions"
        v-on:click="toggleFavorite"
        :class="{
          'btn-primary': article.favorited,
          'btn-outline-primary': !article.favorited
        }">
        <i class="ion-heart"></i>
        <span class="counter">
        {{ article.favoritesCount }}
      </span>
      </button>
    </template>
  </div>
</template>

<script>
  import { FAVORITE_ADD, FAVORITE_REMOVE } from '@/store/actions.type'
  import { GET_CURRENT_USER } from '@/store/getters.type'

  export default {
    name: 'RwvArticleMeta',
    props: {
      article: {
        type: Object,
        required: true
      },
      actions: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    computed: {
      user () {
        return this.$store.getters[GET_CURRENT_USER]
      }
    },
    methods: {
      isCurrentUser () {
        if (this.user.username && this.article.author.username) {
          return this.user.username === this.article.author.username
        }
        return false
      },
      toggleFavorite () {
        const action = this.article.favorited
          ? FAVORITE_REMOVE
          : FAVORITE_ADD
        this.$store.dispatch(action, this.article.slug)
      }
    }
  }
</script>
