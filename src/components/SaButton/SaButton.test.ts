import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SaButton from "./SaButton.vue";

describe("SaButton", () => {
  it("renders slot content", () => {
    const wrapper = mount(SaButton, { slots: { default: "Click me" } });
    expect(wrapper.text()).toContain("Click me");
  });

  it("emits click event", async () => {
    const wrapper = mount(SaButton, { slots: { default: "Click" } });
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toHaveLength(1);
  });

  it("is disabled when disabled prop is true", () => {
    const wrapper = mount(SaButton, {
      props: { disabled: true },
      slots: { default: "Disabled" },
    });
    expect(wrapper.find("button").attributes("disabled")).toBeDefined();
  });

  it("is disabled when loading", () => {
    const wrapper = mount(SaButton, {
      props: { loading: true },
      slots: { default: "Loading" },
    });
    expect(wrapper.find("button").attributes("disabled")).toBeDefined();
  });

  it("shows spinner when loading", () => {
    const wrapper = mount(SaButton, {
      props: { loading: true },
      slots: { default: "Loading" },
    });
    expect(wrapper.find("[role=status]").exists()).toBe(true);
  });

  it("hides spinner when not loading", () => {
    const wrapper = mount(SaButton, {
      props: { loading: false },
      slots: { default: "Ready" },
    });
    expect(wrapper.find("[role=status]").exists()).toBe(false);
  });
});
