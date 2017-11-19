<template>
  <div>
    <div v-if="isLoading" class="article-preview">
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
</template>

<script>
  import RwvTag from '@/components/VTag'
  import RwvArticlePreview from '@/components/VArticlePreview'
  import VPagination from '@/components/VPagination'
  import { FETCH_ARTICLES, FETCH_TAGS } from '@/store/actions.type'
  import { GET_ARTICLE_COUNT, GET_ARTICLES, GET_ARTICLES_IS_LOADING } from '@/store/getters.type'

  export default {
    name: 'RwvArticleList',
    components: {
      RwvTag,
      RwvArticlePreview,
      VPagination
    },
    props: {
      type: {
        type: String,
        required: false,
        default: 'all'
      },
      author: {
        type: String,
        required: false
      },
      tag: {
        type: String,
        required: false
      },
      favorited: {
        type: String,
        required: false
      }
    },
    data () {
      return {
        currentPage: 1
      }
    },
    computed: {
      listConfig () {
        const { type } = this
        const filters = {
          offset: (this.currentPage - 1) * 10
        }
        if (this.author) {
          filters.author = this.author
        }
        if (this.tag) {
          filters.tag = this.tag
        }
        if (this.favorited) {
          filters.favorited = this.favorited
        }
        return {
          type,
          filters
        }
      },
      pages () {
        if (this.isLoading || this.articlesCount <= 10) {
          return []
        }
        return [...Array(Math.ceil(this.articlesCount / 10)).keys()].map(e => e + 1)
      },
      articlesCount () {
        return this.$store.getters[GET_ARTICLE_COUNT]
      },
      isLoading () {
        return this.$store.getters[GET_ARTICLES_IS_LOADING]
      },
      isAuth () {
        return this.$store.state.auth.isAuthenticated
      },
      articles () {
        return this.$store.getters[GET_ARTICLES]
      }
    },
    watch: {
      currentPage (newValue) {
        this.listConfig.filters.offset = (newValue - 1) * 10
        this.$store.dispatch(FETCH_ARTICLES, this.listConfig)
      }
    },
    mounted () {
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
