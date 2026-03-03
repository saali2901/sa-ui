import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SaSkeleton from "./SaSkeleton.vue";

describe("SaSkeleton", () => {
  it("renders with default variant", () => {
    const wrapper = mount(SaSkeleton);
    expect(wrapper.find("div").exists()).toBe(true);
  });

  it("applies text variant class", () => {
    const wrapper = mount(SaSkeleton, {
      props: { variant: "text" },
    });
    expect(wrapper.find("div").classes()).toContain("rounded");
  });

  it("applies circle variant class", () => {
    const wrapper = mount(SaSkeleton, {
      props: { variant: "circle" },
    });
    expect(wrapper.find("div").classes()).toContain("rounded-full");
  });

  it("applies rectangular variant class", () => {
    const wrapper = mount(SaSkeleton, {
      props: { variant: "rectangular" },
    });
    // rectangular variant uses "rounded" class (same as text)
    expect(wrapper.find("div").classes()).toContain("rounded");
  });

  it("renders multiple lines", () => {
    const wrapper = mount(SaSkeleton, {
      props: { variant: "text", lines: 3 },
    });
    const skeletons = wrapper.findAll("div > div");
    expect(skeletons.length).toBeGreaterThanOrEqual(3);
  });

  it("applies custom width and height", () => {
    const wrapper = mount(SaSkeleton, {
      props: { width: "200px", height: "50px" },
    });
    // Single line renders as one div with inline style
    const style = wrapper.find("div").attributes("style") || "";
    expect(style).toContain("200px");
    expect(style).toContain("50px");
  });

  it("has animate-pulse class", () => {
    const wrapper = mount(SaSkeleton);
    expect(wrapper.html()).toContain("animate-pulse");
  });
});
