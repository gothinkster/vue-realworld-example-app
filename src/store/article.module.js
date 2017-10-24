import { ArticlesService, CommentsService, FavoriteService } from '@/common/api.service'
import {
  FETCH_ARTICLE,
  FETCH_COMMENTS,
  COMMENT_CREATE,
  COMMENT_DESTROY,
  FAVORITE_ADD,
  FAVORITE_REMOVE } from './actions.type'
import {
  SET_ARTICLE,
  SET_COMMENTS,
  UPDATE_ARTICLE_IN_LIST } from './mutations.type'

export const state = {
  article: {},
  comments: []
}

export const actions = {
  [FETCH_ARTICLE] (context, articleSlug) {
    return ArticlesService.get(articleSlug)
      .then(({ data }) => {
        context.commit(SET_ARTICLE, data.article)
      })
  },
  [FETCH_COMMENTS] (context, articleSlug) {
    return CommentsService.get(articleSlug)
      .then(({ data }) => {
        context.commit(SET_COMMENTS, data.comments)
      })
  },
  [COMMENT_CREATE] (context, payload) {
    return CommentsService
      .post(payload.slug, payload.comment)
      .then(() => { context.dispatch(FETCH_COMMENTS, payload.slug) })
  },
  [COMMENT_DESTROY] (context, payload) {
    return CommentsService
      .destroy(payload.slug, payload.commentId)
      .then(() => {
        context.dispatch(FETCH_COMMENTS, payload.slug)
      })
  },
  [FAVORITE_ADD] (context, payload) {
    return FavoriteService
      .add(payload)
      .then(({ data }) => {
        // Update list as well. This allows us to favorite an article in the Home view.
        context.commit(
          UPDATE_ARTICLE_IN_LIST,
          data.article,
          { root: true }
        )
        context.commit(SET_ARTICLE, data.article)
      })
  },
  [FAVORITE_REMOVE] (context, payload) {
    return FavoriteService
      .remove(payload)
      .then(({ data }) => {
        // Update list as well. This allows us to favorite an article in the Home view.
        context.commit(
          UPDATE_ARTICLE_IN_LIST,
          data.article,
          { root: true }
        )
        context.commit(SET_ARTICLE, data.article)
      })
  }
}

/* eslint no-param-reassign: ["error", { "props": false }] */
export const mutations = {
  [SET_ARTICLE] (state, article) {
    state.article = article
  },
  [SET_COMMENTS] (state, comments) {
    state.comments = comments
  }
}

export default {
  state,
  actions,
  mutations
}
