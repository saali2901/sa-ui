import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SaAvatar from "./SaAvatar.vue";

describe("SaAvatar", () => {
  it("renders initials from name", () => {
    const wrapper = mount(SaAvatar, { props: { name: "John Doe" } });
    expect(wrapper.text()).toBe("JD");
  });

  it("renders single initial for single name", () => {
    const wrapper = mount(SaAvatar, { props: { name: "Alice" } });
    expect(wrapper.text()).toBe("A");
  });

  it("renders ? when no name or src", () => {
    const wrapper = mount(SaAvatar);
    expect(wrapper.text()).toBe("?");
  });

  it("renders image when src is provided", () => {
    const wrapper = mount(SaAvatar, {
      props: { src: "https://example.com/avatar.png", name: "John" },
    });
    const img = wrapper.find("img");
    expect(img.exists()).toBe(true);
    expect(img.attributes("src")).toBe("https://example.com/avatar.png");
  });

  it("uses name as alt fallback", () => {
    const wrapper = mount(SaAvatar, {
      props: { src: "https://example.com/a.png", name: "John" },
    });
    expect(wrapper.find("img").attributes("alt")).toBe("John");
  });

  it("limits initials to 2 characters", () => {
    const wrapper = mount(SaAvatar, { props: { name: "John Michael Doe" } });
    expect(wrapper.text()).toBe("JM");
  });
});
