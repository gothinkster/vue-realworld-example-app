<template>
  <!-- Used when user is also author -->
  <span v-if="canModify">
    <router-link class="btn btn-sm btn-outline-secondary" :to="editArticleLink">
      <ion-icon name="pencil-outline"></ion-icon>
      <span>&nbsp;Edit Article</span>
    </router-link>
    <span>&nbsp;&nbsp;</span>
    <button class="btn btn-outline-danger btn-sm" @click="deleteArticle">
      <ion-icon name="trash-outline"></ion-icon>
      <span>&nbsp;Delete Article</span>
    </button>
  </span>
  <!-- Used in ArticleView when not author -->
  <span v-else>
    <button class="btn btn-sm btn-outline-secondary" @click="toggleFollow">
      <ion-icon name="add-circle"></ion-icon> <span>&nbsp;</span>
      <span>{{ followUserLabel }}</span>
    </button>
    <span>&nbsp;&nbsp;</span>
    <button
      class="btn btn-sm"
      @click="toggleFavorite"
      :class="toggleFavoriteButtonClasses"
    >
      <ion-icon name="heart"></ion-icon> <span>&nbsp;</span>
      <span>{{ favoriteArticleLabel }} </span> <span>&nbsp;</span>
      <span class="counter">{{ favoriteCounter }} </span>
    </button>
  </span>
</template>

<script>
import { mapGetters } from "vuex";
import {
  FAVORITE_ADD,
  FAVORITE_REMOVE,
  ARTICLE_DELETE,
  FETCH_PROFILE_FOLLOW,
  FETCH_PROFILE_UNFOLLOW
} from "@/store/actions.type";

export default {
  name: "RwvArticleActions",
  props: {
    article: { type: Object, required: true },
    canModify: { type: Boolean, required: true }
  },
  computed: {
    ...mapGetters(["profile", "isAuthenticated"]),
    editArticleLink() {
      return { name: "article-edit", params: { slug: this.article.slug } };
    },
    toggleFavoriteButtonClasses() {
      return {
        "btn-primary": this.article.favorited,
        "btn-outline-primary": !this.article.favorited
      };
    },
    followUserLabel() {
      return `${this.profile.following ? "Unfollow" : "Follow"} ${
        this.article.author.username
      }`;
    },
    favoriteArticleLabel() {
      return this.article.favorited ? "Unfavorite Article" : "Favorite Article";
    },
    favoriteCounter() {
      return `(${this.article.favoritesCount})`;
    }
  },
  methods: {
    toggleFavorite() {
      if (!this.isAuthenticated) {
        this.$router.push({ name: "login" });
        return;
      }
      const action = this.article.favorited ? FAVORITE_REMOVE : FAVORITE_ADD;
      this.$store.dispatch(action, this.article.slug);
    },
    toggleFollow() {
      if (!this.isAuthenticated) {
        this.$router.push({ name: "login" });
        return;
      }
      const action = this.article.following
        ? FETCH_PROFILE_UNFOLLOW
        : FETCH_PROFILE_FOLLOW;
      this.$store.dispatch(action, {
        username: this.profile.username
      });
    },
    async deleteArticle() {
      await this.$store.dispatch(ARTICLE_DELETE, this.article.slug);
      this.$router.push("/");
    }
  }
};
</script>
