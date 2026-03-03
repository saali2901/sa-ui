import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SaPagination from "./SaPagination.vue";

describe("SaPagination", () => {
  it("renders page buttons", () => {
    const wrapper = mount(SaPagination, {
      props: { modelValue: 1, totalPages: 5 },
    });
    expect(wrapper.text()).toContain("1");
    expect(wrapper.text()).toContain("5");
  });

  it("emits page change on click", async () => {
    const wrapper = mount(SaPagination, {
      props: { modelValue: 1, totalPages: 5 },
    });
    const buttons = wrapper.findAll("button");
    // Find button with text "2"
    const page2 = buttons.find((b) => b.text() === "2");
    if (page2) {
      await page2.trigger("click");
      expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([2]);
    }
  });

  it("disables previous button on first page", () => {
    const wrapper = mount(SaPagination, {
      props: { modelValue: 1, totalPages: 5 },
    });
    const prevBtn = wrapper.findAll("button")[0];
    expect(prevBtn.attributes("disabled")).toBeDefined();
  });

  it("disables next button on last page", () => {
    const wrapper = mount(SaPagination, {
      props: { modelValue: 5, totalPages: 5 },
    });
    const buttons = wrapper.findAll("button");
    const nextBtn = buttons[buttons.length - 1];
    expect(nextBtn.attributes("disabled")).toBeDefined();
  });

  it("shows ellipsis for many pages", () => {
    const wrapper = mount(SaPagination, {
      props: { modelValue: 5, totalPages: 20 },
    });
    expect(wrapper.text()).toContain("…");
  });

  it("has navigation aria-label", () => {
    const wrapper = mount(SaPagination, {
      props: { modelValue: 1, totalPages: 5 },
    });
    expect(wrapper.find("nav").attributes("aria-label")).toBe("Pagination");
  });
});
