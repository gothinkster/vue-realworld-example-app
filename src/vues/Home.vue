<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li v-if="isAuth" class="nav-item">
                <a class="nav-link disabled" href="">Your Feed</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="">Global Feed</a>
              </li>
            </ul>
          </div>
        <article-preview
          v-for="(article, index) in articles"
          :article="article"
          :key="article.title">
        </article-preview>
        </div>
        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>
            <div class="tag-list">
              <tag
                v-for="(tag, index) in tags"
                :name="tag"
                :key="tag.name">
              </tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tag from '@/components/Tag'
import ArticlePreview from '@/components/ArticlePreview'
import { FETCH_ARTICLES, FETCH_TAGS } from '@/store/actions.type'

export default {
  name: 'home',
  components: {
    Tag,
    ArticlePreview
  },
  beforeMount () {
    this.$store.dispatch(FETCH_ARTICLES)
    this.$store.dispatch(FETCH_TAGS)
  },
  computed: {
    isAuth () {
      return this.$store.state.auth.isAuthenticated
    },
    articles () {
      return this.$store.state.home.articles
    },
    tags () {
      return this.$store.state.home.tags
    }
  }
}
</script>
