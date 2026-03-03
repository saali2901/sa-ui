import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SaDropdown from "./SaDropdown.vue";

const options = [
  { value: "a", label: "Option A" },
  { value: "b", label: "Option B" },
  { value: "c", label: "Option C", disabled: true },
];

describe("SaDropdown", () => {
  it("renders placeholder when no value selected", () => {
    const wrapper = mount(SaDropdown, {
      props: { options, placeholder: "Choose..." },
    });
    expect(wrapper.text()).toContain("Choose...");
  });

  it("shows selected option label", () => {
    const wrapper = mount(SaDropdown, {
      props: { options, modelValue: "b" },
    });
    expect(wrapper.text()).toContain("Option B");
  });

  it("opens dropdown on click", async () => {
    const wrapper = mount(SaDropdown, { props: { options } });
    await wrapper.find("[role=combobox]").trigger("click");
    expect(wrapper.find("[role=listbox]").exists()).toBe(true);
  });

  it("selects option on click", async () => {
    const wrapper = mount(SaDropdown, { props: { options } });
    await wrapper.find("[role=combobox]").trigger("click");
    const items = wrapper.findAll("[role=option]");
    await items[0].trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["a"]);
  });

  it("does not select disabled option", async () => {
    const wrapper = mount(SaDropdown, { props: { options } });
    await wrapper.find("[role=combobox]").trigger("click");
    const items = wrapper.findAll("[role=option]");
    await items[2].trigger("click");
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  });

  it("does not open when disabled", async () => {
    const wrapper = mount(SaDropdown, {
      props: { options, disabled: true },
    });
    await wrapper.find("[role=combobox]").trigger("click");
    expect(wrapper.find("[role=listbox]").exists()).toBe(false);
  });

  it("renders label", () => {
    const wrapper = mount(SaDropdown, {
      props: { options, label: "Country" },
    });
    expect(wrapper.text()).toContain("Country");
  });
});
