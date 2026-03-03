import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SaCarousel from "./SaCarousel.vue";

describe("SaCarousel", () => {
  const slides = {
    default: `
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
    `,
  };

  it("renders slot content", () => {
    const wrapper = mount(SaCarousel, { slots: slides });
    expect(wrapper.text()).toContain("Slide 1");
  });

  it("has carousel role", () => {
    const wrapper = mount(SaCarousel, { slots: slides });
    expect(wrapper.find("[aria-roledescription=carousel]").exists()).toBe(true);
  });

  it("hides arrows when showArrows is false", () => {
    const wrapper = mount(SaCarousel, {
      props: { showArrows: false },
      slots: slides,
    });
    expect(
      wrapper
        .findAll("button")
        .filter((b) => b.attributes("aria-label")?.includes("Slide")).length,
    ).toBe(0);
  });
});
