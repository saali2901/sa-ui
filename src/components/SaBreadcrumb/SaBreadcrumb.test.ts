import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SaBreadcrumb from "./SaBreadcrumb.vue";

const items = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Current" },
];

describe("SaBreadcrumb", () => {
  it("renders all items", () => {
    const wrapper = mount(SaBreadcrumb, { props: { items } });
    expect(wrapper.text()).toContain("Home");
    expect(wrapper.text()).toContain("Products");
    expect(wrapper.text()).toContain("Current");
  });

  it("renders links for items with href", () => {
    const wrapper = mount(SaBreadcrumb, { props: { items } });
    const links = wrapper.findAll("a");
    expect(links).toHaveLength(2);
    expect(links[0].attributes("href")).toBe("/");
  });

  it("renders span for items without href", () => {
    const wrapper = mount(SaBreadcrumb, { props: { items } });
    const spans = wrapper.findAll("span");
    // One span for the last item text + separator spans
    expect(spans.some((s) => s.text() === "Current")).toBe(true);
  });

  it("uses / as default separator", () => {
    const wrapper = mount(SaBreadcrumb, { props: { items } });
    expect(wrapper.text()).toContain("/");
  });

  it("supports custom separator", () => {
    const wrapper = mount(SaBreadcrumb, {
      props: { items, separator: "›" },
    });
    expect(wrapper.text()).toContain("›");
  });

  it("sets aria-current on last item", () => {
    const wrapper = mount(SaBreadcrumb, { props: { items } });
    const lastSpan = wrapper.find("[aria-current=page]");
    expect(lastSpan.exists()).toBe(true);
    expect(lastSpan.text()).toBe("Current");
  });

  it("has aria-label on nav", () => {
    const wrapper = mount(SaBreadcrumb, { props: { items } });
    expect(wrapper.find("nav").attributes("aria-label")).toBe("Breadcrumb");
  });
});
