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
  get: ApiService.get('articles')
}
export const ArticlesService = {
  get: ApiService.get('articles')
}
