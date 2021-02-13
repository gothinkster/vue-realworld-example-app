import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";

import Comment from "../../src/components/Comment.vue";
import DateFilter from "../../src/common/date.filter";

const localVue = createLocalVue();
localVue.filter("date", DateFilter);
localVue.use(Vuex);
localVue.use(VueRouter);

describe("Comment", () => {
  it("should render correct contents", () => {
    const router = new VueRouter({
      routes: [
        {
          name: "profile",
          path: "/profile",
          component: null
        }
      ]
    });
    let store = new Vuex.Store({
      getters: {
        currentUser: () => ({
          username: "user-3518518"
        })
      }
    });

    const wrapper = mount(Comment, {
      localVue,
      store,
      router,
      propsData: {
        slug: "super-cool-comment-slug-1245781274",
        comment: {
          body: "body of comment",
          author: {
            image: "https://vuejs.org/images/logo.png",
            username: "user-3518518"
          },
          createdAt: "",
          id: 1245781274
        }
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
