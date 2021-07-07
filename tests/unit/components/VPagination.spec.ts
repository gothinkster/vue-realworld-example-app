import { mount } from "@vue/test-utils";

import VPagination from "../../../src/components/VPagination.vue";

const createWrapper = ({ currentPage = 1 }) => {
  return mount(VPagination, {
    propsData: {
      pages: [1, 2, 3, 4],
      currentPage
    }
  });
};

describe("VPagination", () => {
  it("should render active class to right element", () => {
    const wrapper = createWrapper({ currentPage: 2 });
    const activeItem = wrapper.find(".active");
    expect(activeItem.text()).toBe("2");
  });

  it("should emit an event if page is clicked which is not active", () => {
    const wrapper = createWrapper({ currentPage: 1 });
    const pageItem = wrapper.find('[data-test="page-link-2"]');
    pageItem.trigger("click");
    expect(wrapper.emitted("update:currentPage")).toBeTruthy();
  });

  it("should have the right payload when event is emitted", () => {
    const wrapper = createWrapper({ currentPage: 1 });
    const pageItem = wrapper.find('[data-test="page-link-2"]');
    pageItem.trigger("click");
    expect(wrapper.emitted("update:currentPage")[0][0]).toBe(2);
  });
});
