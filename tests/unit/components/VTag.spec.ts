import { mount, createLocalVue } from "@vue/test-utils";

import router from "../../../src/router/index";
import VTag from "../../../src/components/VTag";

const localVue = createLocalVue();
const createWrapper = () => {
  return mount(VTag, {
    localVue,
    router,
    propsData: {
      name: "Foo"
    }
  });
};

describe("VTag", () => {
  it("should update the route on click", async () => {
    const wrapper = createWrapper();
    const routerBefore = wrapper.vm.$route.path;
    wrapper.find("a").trigger("click");
    await localVue.nextTick();
    expect(wrapper.vm.$route.path).not.toBe(routerBefore);
  });
});
