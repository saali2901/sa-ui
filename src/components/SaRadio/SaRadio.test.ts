import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SaRadio from "./SaRadio.vue";

const options = [
  { label: "Option A", value: "a" },
  { label: "Option B", value: "b" },
  { label: "Option C", value: "c", disabled: true },
];

describe("SaRadio", () => {
  it("renders all options", () => {
    const wrapper = mount(SaRadio, {
      props: { modelValue: "a", options, name: "test" },
    });
    expect(wrapper.findAll('input[type="radio"]')).toHaveLength(3);
  });

  it("has radiogroup role", () => {
    const wrapper = mount(SaRadio, {
      props: { modelValue: "a", options, name: "test" },
    });
    expect(wrapper.find('[role="radiogroup"]').exists()).toBe(true);
  });

  it("checks the correct option", () => {
    const wrapper = mount(SaRadio, {
      props: { modelValue: "b", options, name: "test" },
    });
    const inputs = wrapper.findAll('input[type="radio"]');
    expect((inputs[1].element as HTMLInputElement).checked).toBe(true);
  });

  it("emits update:modelValue on change", async () => {
    const wrapper = mount(SaRadio, {
      props: { modelValue: "a", options, name: "test" },
    });
    const inputs = wrapper.findAll('input[type="radio"]');
    await inputs[1].setValue(true);
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["b"]);
  });

  it("disables individual options", () => {
    const wrapper = mount(SaRadio, {
      props: { modelValue: "a", options, name: "test" },
    });
    const inputs = wrapper.findAll('input[type="radio"]');
    expect(inputs[2].attributes("disabled")).toBeDefined();
  });

  it("disables all when disabled prop is true", () => {
    const wrapper = mount(SaRadio, {
      props: { modelValue: "a", options, name: "test", disabled: true },
    });
    const inputs = wrapper.findAll('input[type="radio"]');
    inputs.forEach((input) => {
      expect(input.attributes("disabled")).toBeDefined();
    });
  });

  it("renders labels for each option", () => {
    const wrapper = mount(SaRadio, {
      props: { modelValue: "a", options, name: "test" },
    });
    expect(wrapper.text()).toContain("Option A");
    expect(wrapper.text()).toContain("Option B");
    expect(wrapper.text()).toContain("Option C");
  });
});
