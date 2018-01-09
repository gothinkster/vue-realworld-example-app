<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{article.title}}</h1>
        <RwvArticleMeta
          :article="article"
          :actions="true"
        ></RwvArticleMeta>
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
              v-for="(tag, index) of article.tagList"
              :key="tag + index">
              <RwvTag :name="tag" className="tag-default tag-pill tag-outline"></RwvTag>
            </li>
          </ul>
        </div>
      </div>
      <hr/>
      <div class="article-actions">
        <RwvArticleMeta
          :article="article"
          :actions="true"
        ></RwvArticleMeta>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <RwvCommentEditor
            v-if="isAuth"
            :slug="slug"
            :userImage="user.image">
          </RwvCommentEditor>
          <p v-else>
            <router-link :to="{name: 'login'}">Sign in</router-link>
            or
            <router-link :to="{ name: 'register' }">sign up</router-link>
            to add comments on this article.
          </p>
          <RwvComment
            v-for="(comment, index) in comments"
            :slug="slug"
            :comment="comment"
            :key="index">
          </RwvComment>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown'
  import { mapGetters } from 'vuex'
  import store from '@/store'
  import RwvArticleMeta from '@/components/ArticleMeta'
  import RwvComment from '@/components/Comment'
  import RwvCommentEditor from '@/components/CommentEditor'
  import RwvTag from '@/components/VTag'
  import { FETCH_ARTICLE, FETCH_COMMENTS } from '@/store/actions.type'
  import {
    GET_ARTICLE,
    GET_COMMENTS,
    GET_CURRENT_USER,
    IS_AUTHENTICATED
  } from '@/store/getters.type'

  export default {
    name: 'rwv-article',
    props: {
      slug: {
        type: String,
        required: true
      }
    },
    components: {
      RwvArticleMeta,
      RwvComment,
      RwvCommentEditor,
      RwvTag,
      VueMarkdown
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
      ...mapGetters({
        article: [GET_ARTICLE],
        comments: [GET_COMMENTS],
        user: [GET_CURRENT_USER],
        isAuth: [IS_AUTHENTICATED]
      })
    }
  }
</script>
