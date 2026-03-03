import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SaAlert from "./SaAlert.vue";

describe("SaAlert", () => {
  it("renders slot content", () => {
    const wrapper = mount(SaAlert, { slots: { default: "Alert message" } });
    expect(wrapper.text()).toContain("Alert message");
  });

  it("applies color variant", () => {
    const wrapper = mount(SaAlert, {
      props: { color: "error" },
      slots: { default: "Error!" },
    });
    expect(wrapper.find("[role=alert]").exists()).toBe(true);
  });

  it("defaults to info color", () => {
    const wrapper = mount(SaAlert, { slots: { default: "Info" } });
    expect(wrapper.find("[role=alert]").exists()).toBe(true);
  });

  it("shows dismiss button when dismissible", () => {
    const wrapper = mount(SaAlert, {
      props: { dismissible: true },
      slots: { default: "Dismissible" },
    });
    expect(wrapper.find("button").exists()).toBe(true);
  });

  it("hides dismiss button by default", () => {
    const wrapper = mount(SaAlert, { slots: { default: "Not dismissible" } });
    expect(wrapper.find("button").exists()).toBe(false);
  });

  it("emits dismiss on button click", async () => {
    const wrapper = mount(SaAlert, {
      props: { dismissible: true },
      slots: { default: "Click me" },
    });
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted("dismiss")).toHaveLength(1);
  });
});
