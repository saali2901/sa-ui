import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SaCard from "./SaCard.vue";

describe("SaCard", () => {
  it("renders title slot", () => {
    const wrapper = mount(SaCard, { slots: { title: "Card Title" } });
    expect(wrapper.text()).toContain("Card Title");
  });

  it("renders body slot", () => {
    const wrapper = mount(SaCard, { slots: { body: "Card body text" } });
    expect(wrapper.text()).toContain("Card body text");
  });

  it("renders actions slot", () => {
    const wrapper = mount(SaCard, {
      slots: { actions: "<button>Action</button>" },
    });
    expect(wrapper.text()).toContain("Action");
  });

  it("renders image slot", () => {
    const wrapper = mount(SaCard, {
      slots: { image: '<img src="test.jpg" alt="test" />' },
    });
    expect(wrapper.find("img").exists()).toBe(true);
  });

  it("hides empty slots", () => {
    const wrapper = mount(SaCard);
    expect(wrapper.find(".mb-2").exists()).toBe(false); // title wrapper
  });
});
