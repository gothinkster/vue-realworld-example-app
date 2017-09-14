<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{article.title}}</h1>
        <article-meta
          :article="article"
          :actions="true"
        ></article-meta>
      </div>
    </div>
    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12">
          {{article.body}}
        </div>
      </div>
      <hr />
      <div class="article-actions">
        <article-meta
          :article="article"
          :actions="true">
        </article-meta>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <form class="card comment-form">
            <div class="card-block">
              <textarea
                class="form-control"
                placeholder="Write a comment..."
                rows="3">
              </textarea>
            </div>
            <div class="card-footer">
              <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
              <button class="btn btn-sm btn-primary">
               Post Comment
              </button>
            </div>
          </form>
          <rwv-comment
            v-for="(comment, index) in comments"
            :comment="comment"
            :key="index">
          </rwv-comment>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import ArticleMeta from '@/components/ArticleMeta'
import RwvComment from '@/components/Comment'

import { FETCH_ARTICLE, FETCH_COMMENTS } from '@/store/actions.type'

export default {
  name: 'RwvArticle',
  props: ['slug'],
  components: {
    ArticleMeta,
    RwvComment
  },
  beforeRouteEnter (to, from, next) {
    Promise.all([
      store.dispatch(FETCH_ARTICLE, to.params.slug),
      store.dispatch(FETCH_COMMENTS, to.params.slug)
    ]).then((data) => {
      next()
    })
  },
  computed: {
    article () {
      return this.$store.state.article.article
    },
    comments () {
      return this.$store.state.article.comments
    }
  }
}
</script>
