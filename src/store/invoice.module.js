import { InvoiceService } from "@/common/api.service";
import { FETCH_INVOICES } from "./actions.type";
import { FETCH_START, FETCH_END } from "./mutations.type";

const state = {
  invoices: [],
  isLoaded: false
};

const getters = {
  invoices(state) {
    return state.invoices;
  },
  isLoaded(state) {
    return state.isLoaded;
  }
};

const actions = {
  [FETCH_INVOICES]({ commit }) {
    commit(FETCH_START);
    return InvoiceService.get()
      .then(({ data }) => {
        commit(FETCH_END, data);
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [FETCH_START](state) {
    state.isLoaded = false;
  },
  [FETCH_END](state, { invoices }) {
    state.invoices = invoices;
    state.isLoaded = true;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
