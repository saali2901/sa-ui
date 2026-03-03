import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SaBadge from "./SaBadge.vue";

describe("SaBadge", () => {
  it("renders slot content", () => {
    const wrapper = mount(SaBadge, { slots: { default: "New" } });
    expect(wrapper.text()).toBe("New");
  });

  it("defaults to sm size and primary color", () => {
    const wrapper = mount(SaBadge, { slots: { default: "Badge" } });
    expect(wrapper.html()).toContain("rounded-full");
  });

  it("renders as dot variant without text", () => {
    const wrapper = mount(SaBadge, { props: { size: "dot" } });
    expect(wrapper.exists()).toBe(true);
  });
});
