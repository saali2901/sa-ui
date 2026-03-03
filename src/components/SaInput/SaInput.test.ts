import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SaInput from "./SaInput.vue";

describe("SaInput", () => {
  it("renders an input element", () => {
    const wrapper = mount(SaInput);
    expect(wrapper.find("input").exists()).toBe(true);
  });

  it("renders label", () => {
    const wrapper = mount(SaInput, { props: { label: "Username" } });
    expect(wrapper.text()).toContain("Username");
  });

  it("supports v-model", async () => {
    const wrapper = mount(SaInput, { props: { modelValue: "hello" } });
    expect(wrapper.find("input").element.value).toBe("hello");
  });

  it("emits update:modelValue on input", async () => {
    const wrapper = mount(SaInput, { props: { modelValue: "" } });
    await wrapper.find("input").setValue("test");
    expect(wrapper.emitted("update:modelValue")).toBeDefined();
  });

  it("is disabled when disabled prop is set", () => {
    const wrapper = mount(SaInput, { props: { disabled: true } });
    expect(wrapper.find("input").attributes("disabled")).toBeDefined();
  });

  it("passes attrs to input", () => {
    const wrapper = mount(SaInput, {
      attrs: { placeholder: "Enter text", type: "email" },
    });
    expect(wrapper.find("input").attributes("placeholder")).toBe("Enter text");
    expect(wrapper.find("input").attributes("type")).toBe("email");
  });
});
