import { mount } from "@vue/test-utils";

import ListErrors from "../../../src/components/ListErrors.vue";

const createWrapper = errors => {
  return mount(ListErrors, {
    propsData: {
      errors
    }
  });
};

describe("ListErrors", () => {
  it("should render error-messages class to right element", () => {
    const wrapper = createWrapper({ email: ["can't be blank"] });
    const isExist = wrapper.findAll(".error-messages").length;
    expect(isExist).toBe(1);
  });
  it("should render a list of errors with the same count to errors length", () => {
    const wrapper = createWrapper({
      email: ["can't be blank"],
      password: ["can't be blank"]
    });
    const errorsCount = wrapper.findAll(".error-messages li").length;
    expect(errorsCount).toBe(2);
  });
  it("renders a list of errors with value equal to errors[key]", () => {
    const wrapper = createWrapper({
      email: ["can't be blank"],
      password: ["can't be blank"],
      username: ["can't be blank", "is too short (minimum is 1 character)"]
    });
    const errorMessage = wrapper.find(".error-messages li:nth-child(2)").text();
    expect(errorMessage).toEqual("password can't be blank");
  });
  it("should not contain any errors if there are no error messages", () => {
    const wrapper = createWrapper({});
    const isExist = wrapper.findAll(".error-messages li").length;
    expect(isExist).toBe(0);
  });
});
