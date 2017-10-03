import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import JwtService from '@/common/jwt.service'
import { API_URL } from '@/common/config'

const ApiService = {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL
  },

  setHeader () {
    Vue.axios.defaults.headers.common['Authorization'] = `Token ${JwtService.getToken()}`
  },

  query (resource, params) {
    return Vue.axios
      .get(resource, params)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  },

  get (resource, slug = '') {
    return Vue.axios
      .get(`${resource}/${slug}`)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  },

  post (resource, params) {
    return Vue.axios
      .post(`${resource}`, params)
  },

  delete (resource) {
    return Vue.axios
      .delete(resource)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  }
}

export default ApiService

export const TagsService = {
  get () {
    return ApiService.get('tags')
  }
}

export const ArticlesService = {
  query (queryFilters) {
    return ApiService.query('articles', { params: queryFilters })
  },
  get (slug) {
    return ApiService.get('articles', slug)
  }
}

export const CommentsService = {
  get (slug) {
    if (typeof slug !== 'string') {
      throw new Error('[RWV] CommentsService.get() article slug required to fetch comments')
    }
    return ApiService.get('articles', `${slug}/comments`)
  },

  post (slug, payload) {
    return ApiService.post(
      `articles/${slug}/comments`, { comment: { body: payload } })
  },

  destroy (slug, commentId) {
    return ApiService
      .delete(`articles/${slug}/comments/${commentId}`)
  }
}
