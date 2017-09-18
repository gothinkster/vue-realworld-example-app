import ApiService from '@/common/api.service'
import JwtService from '@/common/jwt.service'
import { LOGIN, LOGOUT, CHECK_AUTH } from './actions.type'
import { SET_AUTH, PURGE_AUTH } from './mutations.type'

const onRejected = (error) => { throw new Error(error) }

export const state = {
  user: {},
  isAuthenticated: !!JwtService.getToken()
}

export const actions = {
  [LOGIN] (context, credentials) {
    ApiService
      .post('users/login', {user: credentials})
      .then(({ data }) => {
        context.commit(SET_AUTH, data.user)
      })
      .catch(onRejected)
  },
  [LOGOUT] (context) {
    context.commit(PURGE_AUTH)
  },
  [CHECK_AUTH] (context) {
    if (JwtService.getToken()) {
      ApiService.setHeader()
      ApiService
        .get('user')
        .then(({ data }) => {
          context.commit(SET_AUTH, data.user)
        })
        .catch(onRejected)
    } else {
      context.commit(PURGE_AUTH)
    }
  }
}

export const mutations = {
  [SET_AUTH] (state, user) {
    state.isAuthenticated = true
    state.user = user
    JwtService.saveToken(state.user.token)
  },
  [PURGE_AUTH] (state) {
    state.isAuthenticated = false
    state.user = null
    JwtService.destroyToken()
  }
}

export default {
  state,
  actions,
  mutations
}
