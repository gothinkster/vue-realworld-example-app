import Vuex from "vuex";

import home from "./home.module";
import auth from "./auth.module";
import article from "./article.module";
import profile from "./profile.module";

export default Vuex.createStore({
  modules: {
    home,
    auth,
    article,
    profile
  }
});
