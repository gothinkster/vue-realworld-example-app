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
                <a class="nav-link"
                  :class="{ active: listConfig.type === 'feed' }" v-on:click="setListTo('feed')">
                  Your Feed
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link"
                  :class="{ active: listConfig.type === 'all' }"
                  v-on:click="setListTo('all')">
                  Global Feed
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" v-if="listConfig.filters.tag">
                  <i class="ion-pound"></i> {{ listConfig.filters.tag }}
                </a>
              </li>
            </ul>
          </div>
          <div
            v-if="isLoading" class="article-preview">
            Loading articles...
          </div>
          <rwv-article-preview
            v-else
            v-for="(article, index) in articles"
            :article="article"
            :key="article.title + index">
          </rwv-article-preview>
          <VPagination
            :pages="pages"
            :currentPage.sync="currentPage"
          />
        </div>
        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>
            <div class="tag-list">
              <rwv-tag
                v-for="(tag, index) in tags"
                :onClick="setListTo"
                :name="tag"
                :key="tag.name + index">
              </rwv-tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RwvTag from '@/components/VTag'
import RwvArticlePreview from '@/components/VArticlePreview'
import VPagination from '@/components/VPagination'
import { FETCH_ARTICLES, FETCH_TAGS } from '@/store/actions.type'
import { IS_AUTHENTICATED } from '@/store/getters.type'

export default {
  name: 'Home',
  components: {
    RwvTag,
    RwvArticlePreview,
    VPagination
  },
  data () {
    return {
      listConfig: {
        type: 'all', // default query type
        filters: {
          offset: 0
        }
      },
      currentPage: 1
    }
  },
  computed: {
    pages () {
      if (this.isLoading) {
        return []
      }
      return [ ...Array(Math.ceil(this.articlesCount / 10)).keys() ].map(e => e + 1)
    },
    articlesCount () {
      return this.$store.state.home.articlesCount
    },
    isLoading () {
      return this.$store.state.home.isLoading
    },
    isAuth () {
      return this.$store.getters[IS_AUTHENTICATED]
    },
    articles () {
      return this.$store.state.home.articles
    },
    tags () {
      return this.$store.state.home.tags
    }
  },
  watch: {
    currentPage (newValue) {
      this.listConfig.filters.offset = (newValue - 1) * 10
      this.$store.dispatch(FETCH_ARTICLES, this.listConfig)
    }
  },
  beforeMount () {
    this.$store.dispatch(FETCH_ARTICLES, this.listConfig)
    this.$store.dispatch(FETCH_TAGS)
  },
  methods: {
    setListTo (type, filters = {}) {
      this.listConfig.type = type
      this.listConfig.filters = filters
      this.resetPagination()
      this.$store.dispatch(FETCH_ARTICLES, this.listConfig)
    },
    resetPagination () {
      this.listConfig.offset = 0
      this.currentPage = 1
    }
  }
}
</script>
