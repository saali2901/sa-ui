import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SaSwitch from "./SaSwitch.vue";

describe("SaSwitch", () => {
  it("has switch role on the input", () => {
    const wrapper = mount(SaSwitch, {
      props: { modelValue: false },
    });
    expect(wrapper.find('input[role="switch"]').exists()).toBe(true);
  });

  it("reflects checked state on input", () => {
    const wrapper = mount(SaSwitch, {
      props: { modelValue: true },
    });
    const input = wrapper.find('input[role="switch"]')
      .element as HTMLInputElement;
    expect(input.checked).toBe(true);
  });

  it("emits update:modelValue on track click", async () => {
    const wrapper = mount(SaSwitch, {
      props: { modelValue: false },
    });
    // The visual track div handles click
    const track = wrapper.find('[aria-hidden="true"]');
    await track.trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([true]);
  });

  it("renders label text", () => {
    const wrapper = mount(SaSwitch, {
      props: { modelValue: false, label: "Dark mode" },
    });
    expect(wrapper.text()).toContain("Dark mode");
  });

  it("does not emit when disabled", async () => {
    const wrapper = mount(SaSwitch, {
      props: { modelValue: false, disabled: true },
    });
    const track = wrapper.find('[aria-hidden="true"]');
    await track.trigger("click");
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  });

  it("has a hidden checkbox input", () => {
    const wrapper = mount(SaSwitch, {
      props: { modelValue: true, name: "toggle" },
    });
    const input = wrapper.find('input[type="checkbox"]');
    expect(input.exists()).toBe(true);
    expect(input.attributes("name")).toBe("toggle");
  });
});
