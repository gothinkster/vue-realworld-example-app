import { mount } from "@vue/test-utils";
import Vuex from "vuex";
// import { createRouter, createWebHashHistory } from "vue-router";

import Comment from "../../src/components/Comment.vue";

describe("Comment", () => {
  it("should render correct contents", () => {
    const store = new Vuex.Store({
      getters: {
        currentUser: () => ({
          username: "user-3518518"
        })
      }
    });

    const wrapper = mount(Comment, {
      global: {
        plugins: [store]
      },
      props: {
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
    expect(wrapper.vm).toBeTruthy();
  });
});
