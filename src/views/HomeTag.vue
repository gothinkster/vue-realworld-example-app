<template>
  <div class="home-tag"><RwvArticleList :tag="tag"></RwvArticleList></div>
</template>

<script>
import RwvArticleList from "@/components/ArticleList";

export default {
  name: "RwvHomeTag",
  components: {
    RwvArticleList
  },
  computed: {
    tag() {
      return this.$route.params.tag;
    }
  }
};
</script>
