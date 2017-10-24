import {
  TagsService,
  ArticlesService } from '@/common/api.service'
import {
  FETCH_ARTICLES,
  FETCH_TAGS } from './actions.type'
import {
  FETCH_START,
  FETCH_END,
  SET_TAGS,
  UPDATE_ARTICLE_IN_LIST } from './mutations.type'

export const state = {
  tags: [],
  articles: [],
  isLoading: true,
  articlesCount: 0
}

export const actions = {
  [FETCH_ARTICLES] ({ commit }, params) {
    commit(FETCH_START)
    params.filters.limit = 10
    return ArticlesService.query(params.type, params.filters)
      .then(({ data }) => {
        commit(FETCH_END, data)
      })
      .catch((error) => {
        throw new Error(error)
      })
  },
  [FETCH_TAGS] ({ commit }) {
    return TagsService.get()
      .then(({ data }) => {
        commit(SET_TAGS, data.tags)
      })
      .catch((error) => {
        throw new Error(error)
      })
  }
}

/* eslint no-param-reassign: ["error", { "props": false }] */
export const mutations = {
  [FETCH_START] (state) {
    state.isLoading = true
  },
  [FETCH_END] (state, { articles, articlesCount }) {
    state.articles = articles
    state.articlesCount = articlesCount
    state.isLoading = false
  },
  [SET_TAGS] (state, tags) {
    state.tags = tags
  },
  [UPDATE_ARTICLE_IN_LIST] (state, data) {
    state.articles = state.articles.map((article) => {
      if (article.slug !== data.slug) { return article }
      // We could just return data, but it seems dangerous to
      // mix the results of different api calls, so we
      // protect ourselves by copying the information.
      article.favorited = data.favorited
      article.favoritesCount = data.favoritesCount
      return article
    })
  }
}

export default {
  state,
  actions,
  mutations
}
