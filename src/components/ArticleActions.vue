<template>
  <!-- Used when user is also author -->
  <span v-if="canModify">
    <router-link
      class="btn btn-sm btn-outline-secondary"
      :to="{ name: 'article-edit', params: { slug: this.article.slug } }">
      <i class="ion-edit"></i>&nbsp;Edit Article
    </router-link>
    &nbsp;&nbsp;
    <button
      class="btn btn-outline-danger btn-sm"
      v-on:click="deleteArticle(article.slug)">
      <i class="ion-trash-a"></i>&nbsp;Delete Article
    </button>
  </span>
  <!-- Used in ArticleView when not author -->
  <span v-else>
    <button
      class="btn btn-sm btn-outline-secondary"
      v-on:click="toggleFollow(profile.following)">
      <i class="ion-plus-round"></i>
      &nbsp;
      {{ profile.following ? 'Unfollow' : 'Follow' }} {{article.author.username}}
    </button>
    &nbsp;&nbsp;
    <button
      class="btn btn-sm"
      v-on:click="toggleFavorite(article.slug)"
      :class="{
        'btn-primary': article.favorited,
        'btn-outline-primary': !article.favorited
      }">
      <i class="ion-heart"></i>&nbsp;
      {{
        article.favorited
        ? 'Unfavorite Article'
        : 'Favorite Article'
      }}
      <span class="counter">
        ({{article.favoritesCount}})
      </span>
    </button>
  </span>
</template>

<script>
import { mapGetters } from 'vuex'
import { FAVORITE_ADD, FAVORITE_REMOVE, ARTICLE_DELETE, FETCH_PROFILE_FOLLOW, FETCH_PROFILE_UNFOLLOW } from '@/store/actions.type'

export default {
  name: 'RwvArticleActions',
  props: {
    article: { type: Object, required: true },
    canModify: { type: Boolean, required: true }
  },
  computed: {
    ...mapGetters([
      'profile',
      'isAuthenticated'
    ])
  },
  methods: {
    toggleFavorite (slug) {
      if (!this.isAuthenticated) return
      const action = this.article.favorited
        ? FAVORITE_REMOVE
        : FAVORITE_ADD
      this.$store.dispatch(action, slug)
    },
    toggleFollow (following) {
      if (!this.isAuthenticated) return
      const action = following ? FETCH_PROFILE_UNFOLLOW : FETCH_PROFILE_FOLLOW
      this.$store.dispatch(action, {
        username: this.profile.username
      })
    },
    editArticle (slug, article) {
      this.$router.push({
        name: 'article-edit',
        params: { slug, previousArticle: article }
      })
    },
    deleteArticle (slug) {
      this.$store
        .dispatch(ARTICLE_DELETE, slug)
        .then((res) => {
          this.$router.push('/')
        })
    }
  }
}
</script>
