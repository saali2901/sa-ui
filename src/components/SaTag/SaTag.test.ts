import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SaTag from "./SaTag.vue";

describe("SaTag", () => {
  it("renders slot content", () => {
    const wrapper = mount(SaTag, {
      slots: { default: "Vue.js" },
    });
    expect(wrapper.text()).toContain("Vue.js");
  });

  it("shows remove button when removable", () => {
    const wrapper = mount(SaTag, {
      props: { removable: true },
      slots: { default: "Tag" },
    });
    expect(wrapper.find("button").exists()).toBe(true);
  });

  it("hides remove button by default", () => {
    const wrapper = mount(SaTag, {
      slots: { default: "Tag" },
    });
    expect(wrapper.find("button").exists()).toBe(false);
  });

  it("emits remove on button click", async () => {
    const wrapper = mount(SaTag, {
      props: { removable: true },
      slots: { default: "Tag" },
    });
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted("remove")).toBeTruthy();
  });

  it("applies color variant", () => {
    const primary = mount(SaTag, {
      props: { color: "primary" },
      slots: { default: "Primary" },
    });
    const danger = mount(SaTag, {
      props: { color: "error" },
      slots: { default: "Error" },
    });
    expect(primary.html()).not.toBe(danger.html());
  });

  it("applies size variant", () => {
    const sm = mount(SaTag, {
      props: { size: "sm" },
      slots: { default: "Small" },
    });
    const lg = mount(SaTag, {
      props: { size: "md" },
      slots: { default: "Medium" },
    });
    expect(sm.html()).not.toBe(lg.html());
  });
});
