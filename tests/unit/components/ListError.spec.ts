import { mount } from "@vue/test-utils";

import ListErrors from "../../../src/components/ListErrors.vue";

const createWrapper = ({ errors }) => {
  return mount(ListErrors, {
    propsData: {
      errors
    }
  });
};

describe("ListErrors", () => {
  let errors;

  beforeEach(() => {
    errors = {
      title: ["Title Error"],
      body: ["can't be blank"],
      description: ["can't be blank"]
    };
  });

  it("should display the correct error messages based on object from props", () => {
    const wrapper = createWrapper({ errors });

    const errorMessages = wrapper.findAll("li");
    expect(errorMessages.length).toEqual(3);
    expect(errorMessages.at(0).text()).toContain(errors.title);
    expect(errorMessages.at(1).text()).toContain(errors.body);
    expect(errorMessages.at(2).text()).toContain(errors.description);
  });

  it("should have props with errors as type object", () => {
    const wrapper = createWrapper({ errors });
    expect(typeof wrapper.props().errors).toBe("object");
  });

  it("should have no errors if no errors are passed into the props", () => {
    errors = {};

    const wrapper = createWrapper({ errors });

    const errorMessages = wrapper.findAll("li");
    expect(errorMessages.length).toEqual(0);
  });
});
