import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SaProgress from "./SaProgress.vue";

describe("SaProgress", () => {
  it("renders a progressbar role", () => {
    const wrapper = mount(SaProgress, {
      props: { value: 50 },
    });
    expect(wrapper.find('[role="progressbar"]').exists()).toBe(true);
  });

  it("sets aria-valuenow", () => {
    const wrapper = mount(SaProgress, {
      props: { value: 75 },
    });
    const bar = wrapper.find('[role="progressbar"]');
    expect(bar.attributes("aria-valuenow")).toBe("75");
  });

  it("sets aria-valuemin and aria-valuemax", () => {
    const wrapper = mount(SaProgress, {
      props: { value: 30, max: 200 },
    });
    const bar = wrapper.find('[role="progressbar"]');
    expect(bar.attributes("aria-valuemin")).toBe("0");
    expect(bar.attributes("aria-valuemax")).toBe("200");
  });

  it("shows label when showLabel is true", () => {
    const wrapper = mount(SaProgress, {
      props: { value: 42, showLabel: true },
    });
    expect(wrapper.text()).toContain("42");
  });

  it("hides label by default", () => {
    const wrapper = mount(SaProgress, {
      props: { value: 42 },
    });
    expect(wrapper.text()).not.toContain("42");
  });

  it("clamps value to max", () => {
    const wrapper = mount(SaProgress, {
      props: { value: 150, max: 100 },
    });
    const bar = wrapper.find('[role="progressbar"]');
    expect(bar.attributes("aria-valuenow")).toBe("150");
  });
});
