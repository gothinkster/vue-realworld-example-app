import { ArticlesService } from '@/common/api.service'
import { FETCH_ARTICLE } from './actions.type'
import { SET_ARTICLE } from './mutations.type'

export const state = {
  article: {}
}

export const actions = {
  [FETCH_ARTICLE] (context, articleSlug) {
    return ArticlesService.get(articleSlug)
      .then(({ data }) => {
        console.log('action', data, articleSlug)
        context.commit(SET_ARTICLE, data.article)
      })
      .catch((error) => {
        throw new Error(error)
      })
  }
}

/* eslint no-param-reassign: ["error", { "props": false }] */
export const mutations = {
  [SET_ARTICLE] (state, article) {
    state.article = article
  }
}

export default {
  state,
  actions,
  mutations
}
