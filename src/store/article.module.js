import Vue from 'vue'
import { ArticlesService, CommentsService, FavoriteService } from '@/common/api.service'
import {
  FETCH_ARTICLE,
  FETCH_COMMENTS,
  COMMENT_CREATE,
  COMMENT_DESTROY,
  FAVORITE_ADD,
  FAVORITE_REMOVE,
  ARTICLE_PUBLISH,
  ARTICLE_EDIT,
  ARTICLE_EDIT_ADD_TAG,
  ARTICLE_EDIT_REMOVE_TAG,
  ARTICLE_DELETE,
  ARTICLE_RESET_STATE
} from './actions.type'
import {
  RESET_STATE,
  SET_ARTICLE,
  SET_COMMENTS,
  TAG_ADD,
  TAG_REMOVE,
  UPDATE_ARTICLE_IN_LIST
} from './mutations.type'

const initialState = {
  article: {
    author: {},
    title: '',
    description: '',
    body: '',
    tagList: []
  },
  comments: []
}

export const state = Object.assign({}, initialState)

export const actions = {
  [FETCH_ARTICLE] (context, articleSlug, prevArticle) {
    // avoid extronuous network call if article exists
    if (prevArticle !== undefined) {
      return context.commit(SET_ARTICLE, prevArticle)
    }
    return ArticlesService.get(articleSlug)
      .then(({ data }) => {
        context.commit(SET_ARTICLE, data.article)
        return data
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
  },
  [ARTICLE_PUBLISH] ({ state }) {
    return ArticlesService.create(state.article)
  },
  [ARTICLE_DELETE] (context, slug) {
    return ArticlesService.destroy(slug)
  },
  [ARTICLE_EDIT] ({ state }) {
    return ArticlesService.update(state.article.slug, state.article)
  },
  [ARTICLE_EDIT_ADD_TAG] (context, tag) {
    context.commit(TAG_ADD, tag)
  },
  [ARTICLE_EDIT_REMOVE_TAG] (context, tag) {
    context.commit(TAG_REMOVE, tag)
  },
  [ARTICLE_RESET_STATE] ({ commit }) {
    commit(RESET_STATE)
  }
}

/* eslint no-param-reassign: ["error", { "props": false }] */
export const mutations = {
  [SET_ARTICLE] (state, article) {
    state.article = article
  },
  [SET_COMMENTS] (state, comments) {
    state.comments = comments
  },
  [TAG_ADD] (state, tag) {
    state.article.tagList = state.article.tagList.concat([tag])
  },
  [TAG_REMOVE] (state, tag) {
    state.article.tagList = state.article.tagList.filter(t => t !== tag)
  },
  [RESET_STATE] () {
    for (let f in state) {
      Vue.set(state, f, initialState[f])
    }
  }
}

const getters = {
  article (state) {
    return state.article
  },
  comments (state) {
    return state.comments
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
