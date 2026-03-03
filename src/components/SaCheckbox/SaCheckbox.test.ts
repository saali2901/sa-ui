import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SaCheckbox from "./SaCheckbox.vue";

describe("SaCheckbox", () => {
  it("renders a native checkbox input", () => {
    const wrapper = mount(SaCheckbox);
    expect(wrapper.find("input[type=checkbox]").exists()).toBe(true);
  });

  it("renders label text", () => {
    const wrapper = mount(SaCheckbox, { props: { label: "Accept terms" } });
    expect(wrapper.text()).toContain("Accept terms");
  });

  it("toggles modelValue on click", async () => {
    const wrapper = mount(SaCheckbox, { props: { modelValue: false } });
    await wrapper.find("input").setValue(true);
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([true]);
  });

  it("is disabled when disabled prop is set", () => {
    const wrapper = mount(SaCheckbox, { props: { disabled: true } });
    expect(wrapper.find("input").attributes("disabled")).toBeDefined();
  });

  it("supports name attribute", () => {
    const wrapper = mount(SaCheckbox, { props: { name: "terms" } });
    expect(wrapper.find("input").attributes("name")).toBe("terms");
  });

  it("has sr-only class on input for accessibility", () => {
    const wrapper = mount(SaCheckbox);
    expect(wrapper.find("input").classes()).toContain("sr-only");
  });
});
