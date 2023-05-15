import { mount } from "@vue/test-utils";

import router from "../../../src/router/index";
import VTag from "../../../src/components/VTag.vue";

const createWrapper = () => {
  return mount(VTag, {
    global: {
      plugins: [router]
    },
    props: {
      name: "Foo",
      className: ""
    }
  });
};

describe("VTag", () => {
  it("should update the route on click", async () => {
    const wrapper = createWrapper();
    const routerBefore = wrapper.vm.$route.path;
    wrapper.find("a").trigger("click");
    //next tick
    expect(wrapper.vm.$route.path).not.toBe(routerBefore);
  });
});
