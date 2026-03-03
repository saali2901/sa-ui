import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SaDivider from "./SaDivider.vue";

describe("SaDivider", () => {
  it("renders with separator role", () => {
    const wrapper = mount(SaDivider);
    expect(wrapper.find("[role=separator]").exists()).toBe(true);
  });

  it("renders label text", () => {
    const wrapper = mount(SaDivider, { props: { label: "OR" } });
    expect(wrapper.text()).toContain("OR");
  });

  it("renders without label by default", () => {
    const wrapper = mount(SaDivider);
    expect(wrapper.text()).toBe("");
  });
});
