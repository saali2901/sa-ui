import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SaTabs from "./SaTabs.vue";

const tabs = [
  { key: "home", label: "Home" },
  { key: "profile", label: "Profile" },
  { key: "settings", label: "Settings", disabled: true },
];

describe("SaTabs", () => {
  it("renders all tab labels", () => {
    const wrapper = mount(SaTabs, {
      props: { tabs, modelValue: "home" },
    });
    expect(wrapper.text()).toContain("Home");
    expect(wrapper.text()).toContain("Profile");
    expect(wrapper.text()).toContain("Settings");
  });

  it("has tablist role", () => {
    const wrapper = mount(SaTabs, {
      props: { tabs, modelValue: "home" },
    });
    expect(wrapper.find('[role="tablist"]').exists()).toBe(true);
  });

  it("marks the active tab", () => {
    const wrapper = mount(SaTabs, {
      props: { tabs, modelValue: "home" },
    });
    const activeTab = wrapper.find('[aria-selected="true"]');
    expect(activeTab.exists()).toBe(true);
    expect(activeTab.text()).toBe("Home");
  });

  it("emits update:modelValue on click", async () => {
    const wrapper = mount(SaTabs, {
      props: { tabs, modelValue: "home" },
    });
    const tabButtons = wrapper.findAll('[role="tab"]');
    await tabButtons[1].trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["profile"]);
  });

  it("does not emit for disabled tab", async () => {
    const wrapper = mount(SaTabs, {
      props: { tabs, modelValue: "home" },
    });
    const tabButtons = wrapper.findAll('[role="tab"]');
    await tabButtons[2].trigger("click");
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  });

  it("renders tab panels via slots", () => {
    const wrapper = mount(SaTabs, {
      props: { tabs, modelValue: "home" },
      slots: { home: "<p>Home content</p>" },
    });
    expect(wrapper.text()).toContain("Home content");
  });
});
