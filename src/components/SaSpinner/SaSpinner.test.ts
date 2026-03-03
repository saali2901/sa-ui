import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SaSpinner from "./SaSpinner.vue";

describe("SaSpinner", () => {
  it("renders with status role", () => {
    const wrapper = mount(SaSpinner);
    expect(wrapper.find('[role="status"]').exists()).toBe(true);
  });

  it("has an animated spinner element", () => {
    const wrapper = mount(SaSpinner);
    expect(wrapper.html()).toContain("animate-spin");
  });

  it("includes sr-only loading text", () => {
    const wrapper = mount(SaSpinner);
    const srOnly = wrapper.find(".sr-only");
    expect(srOnly.exists()).toBe(true);
  });

  it("applies custom label for screen readers", () => {
    const wrapper = mount(SaSpinner, {
      props: { label: "Please wait" },
    });
    expect(wrapper.text()).toContain("Please wait");
  });

  it("applies different size classes", () => {
    const small = mount(SaSpinner, { props: { size: "sm" } });
    const large = mount(SaSpinner, { props: { size: "lg" } });
    // sm has w-4 h-4, lg has w-10 h-10
    expect(small.html()).toContain("w-4");
    expect(large.html()).toContain("w-10");
  });
});
