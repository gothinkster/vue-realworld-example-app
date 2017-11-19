<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{article.title}}</h1>
        <rwv-article-meta
          :article="article"
          :actions="true"
        ></rwv-article-meta>
      </div>
    </div>
    <div class="container page">
      <div class="row article-content">
        <div class="col-xs-12">
          <vue-markdown
            :source="article.body">
          </vue-markdown>
          <ul class="tag-list">
            <li
            class="tag-default tag-pill tag-outline"
            v-for="(tag, index) of article.tagList"
            :key="tag + index">
            {{ tag }}
          </li>
        </ul>
        </div>
      </div>
      <hr/>
      <div class="article-actions">
        <rwv-article-meta
          :article="article"
          :actions="true"
        ></rwv-article-meta>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <rwv-comment-editor
            v-if="isAuth"
            :slug="slug"
            :userImage="user.image">
          </rwv-comment-editor>
          <p v-else>
            <router-link :to="{name: 'login'}">Sign in</router-link>
            or
            <router-link :to="{ name: 'register' }">sign up</router-link>
            to add comments on this article.
          </p>
          <rwv-comment
            v-for="(comment, index) in comments"
            :slug="slug"
            :comment="comment"
            :key="index">
          </rwv-comment>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown'
  import store from '@/store'
  import RwvArticleMeta from '@/components/ArticleMeta'
  import RwvComment from '@/components/Comment'
  import RwvCommentEditor from '@/components/CommentEditor'
  import { FETCH_ARTICLE, FETCH_COMMENTS } from '@/store/actions.type'
  import {
    GET_ARTICLE,
    GET_COMMENTS,
    GET_CURRENT_USER,
    IS_AUTHENTICATED
  } from '@/store/getters.type'

  export default {
    name: 'RwvArticle',
    props: {
      slug: {
        type: String,
        required: true
      }
    },
    components: {
      VueMarkdown,
      RwvArticleMeta,
      RwvComment,
      RwvCommentEditor
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
        return this.$store.getters[GET_ARTICLE]
      },
      comments () {
        return this.$store.getters[GET_COMMENTS]
      },
      user () {
        return this.$store.getters[GET_CURRENT_USER]
      },
      isAuth () {
        return this.$store.getters[IS_AUTHENTICATED]
      }
    }
  }
</script>
