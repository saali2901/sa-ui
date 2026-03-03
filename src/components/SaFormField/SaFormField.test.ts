import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SaFormField from "./SaFormField.vue";

describe("SaFormField", () => {
  it("renders label", () => {
    const wrapper = mount(SaFormField, { props: { label: "Email" } });
    expect(wrapper.text()).toContain("Email");
  });

  it("shows required asterisk", () => {
    const wrapper = mount(SaFormField, {
      props: { label: "Email", required: true },
    });
    expect(wrapper.text()).toContain("*");
  });

  it("shows error message", () => {
    const wrapper = mount(SaFormField, {
      props: { error: "This field is required" },
    });
    expect(wrapper.text()).toContain("This field is required");
  });

  it("shows hint when no error", () => {
    const wrapper = mount(SaFormField, {
      props: { hint: "Enter your email address" },
    });
    expect(wrapper.text()).toContain("Enter your email address");
  });

  it("error takes priority over hint", () => {
    const wrapper = mount(SaFormField, {
      props: { error: "Error!", hint: "Hint text" },
    });
    expect(wrapper.text()).toContain("Error!");
    expect(wrapper.text()).not.toContain("Hint text");
  });

  it("renders slot content", () => {
    const wrapper = mount(SaFormField, {
      slots: { default: '<input type="text" />' },
    });
    expect(wrapper.find("input").exists()).toBe(true);
  });
});
