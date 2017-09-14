import Vue from 'vue'
import { API_URL } from '@/common/config'

export default class ApiService {

  static get (resource, params = '') {
    if (typeof resource !== 'string') {
      throw new Error('[RWV] ApiService.get() first parameter must be a string')
    }
    return Vue.axios
      .get(`${API_URL}/${resource}/${params}`)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  }
}

export const TagsService = {
  get () {
    return ApiService.get('tags')
  }
}
export const ArticlesService = {
  get (slug) {
    return ApiService.get('articles', slug)
  }
}
