import ApiService from "@/common/api.service";
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  CHECK_AUTH,
  UPDATE_USER
} from "./actions.type";
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from "./mutations.type";

const state = {
  errors: null,
  user: {}
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  jwt(_state, getters) {
    if (!getters.currentUser) return null;

    return getters.currentUser.token;
  },
  isAuthenticated(_state, getters) {
    return !!getters.jwt;
  }
};

const actions = {
  [LOGIN]({ commit }, credentials) {
    return new Promise(resolve => {
      ApiService.post("users/login", { user: credentials })
        .then(({ data }) => {
          commit(SET_AUTH, data.user);
          resolve(data);
        })
        .catch(({ response }) => {
          commit(SET_ERROR, response.data.errors);
        });
    });
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
  [REGISTER]({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.post("users", { user: credentials })
        .then(({ data }) => {
          commit(SET_AUTH, data.user);
          resolve(data);
        })
        .catch(({ response }) => {
          commit(SET_ERROR, response.data.errors);
          reject(response);
        });
    });
  },
  [CHECK_AUTH]({ commit, getters }) {
    if (getters.isAuthenticated) {
      ApiService.setHeader(getters.jwt);
      ApiService.get("user")
        .then(({ data }) => {
          commit(SET_AUTH, data.user);
        })
        .catch(({ response }) => {
          commit(SET_ERROR, response.data.errors);
        });
    } else {
      commit(PURGE_AUTH);
    }
  },
  [UPDATE_USER]({ commit }, payload) {
    const { email, username, password, image, bio } = payload;
    const user = {
      email,
      username,
      bio,
      image
    };
    if (password) {
      user.password = password;
    }

    return ApiService.put("user", user).then(({ data }) => {
      commit(SET_AUTH, data.user);
      return data;
    });
  }
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, user) {
    state.user = user;
    state.errors = {};
  },
  [PURGE_AUTH](state) {
    state.user = {};
    state.errors = {};
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
