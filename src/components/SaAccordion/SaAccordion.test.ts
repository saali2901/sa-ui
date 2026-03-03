import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SaAccordion from "./SaAccordion.vue";
import type { AccordionItem } from "@/types";

const items: AccordionItem[] = [
  { key: "a", title: "Section A" },
  { key: "b", title: "Section B" },
  { key: "c", title: "Section C", disabled: true },
];

describe("SaAccordion", () => {
  it("renders all items", () => {
    const wrapper = mount(SaAccordion, { props: { items } });
    const buttons = wrapper.findAll("button");
    expect(buttons).toHaveLength(3);
    expect(buttons[0].text()).toContain("Section A");
    expect(buttons[1].text()).toContain("Section B");
  });

  it("opens item on click", async () => {
    const wrapper = mount(SaAccordion, {
      props: { items, modelValue: [] },
      slots: { a: "Content A" },
    });
    await wrapper.findAll("button")[0].trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([["a"]]);
  });

  it("does not open disabled items", async () => {
    const wrapper = mount(SaAccordion, {
      props: { items, modelValue: [] },
    });
    await wrapper.findAll("button")[2].trigger("click");
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  });

  it("supports multiple mode", async () => {
    const wrapper = mount(SaAccordion, {
      props: { items, modelValue: ["a"], multiple: true },
      slots: { a: "Content A", b: "Content B" },
    });
    await wrapper.findAll("button")[1].trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0][0]).toContain("a");
    expect(wrapper.emitted("update:modelValue")?.[0][0]).toContain("b");
  });

  it("single mode closes other items", async () => {
    const wrapper = mount(SaAccordion, {
      props: { items, modelValue: ["a"], multiple: false },
      slots: { a: "Content A", b: "Content B" },
    });
    await wrapper.findAll("button")[1].trigger("click");
    const emitted = wrapper.emitted("update:modelValue")?.[0][0] as string[];
    expect(emitted).toEqual(["b"]);
  });

  it("sets aria-expanded correctly", () => {
    const wrapper = mount(SaAccordion, {
      props: { items, modelValue: ["a"] },
      slots: { a: "Content A" },
    });
    expect(wrapper.findAll("button")[0].attributes("aria-expanded")).toBe(
      "true",
    );
    expect(wrapper.findAll("button")[1].attributes("aria-expanded")).toBe(
      "false",
    );
  });
});
