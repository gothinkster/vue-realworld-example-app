<template>
  <div class="profile-page">
    <RwvArticleList :favorited="favorited" :items-per-page="5">
    </RwvArticleList>
  </div>
</template>

<script>
import RwvArticleList from "@/components/ArticleList";

export default {
  name: "RwvProfileFavorited",
  components: {
    RwvArticleList
  },
  computed: {
    favorited() {
      return this.$route.params.username;
    }
  }
};
</script>
