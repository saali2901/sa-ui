import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SaTextarea from "./SaTextarea.vue";

describe("SaTextarea", () => {
  it("renders a textarea element", () => {
    const wrapper = mount(SaTextarea, {
      props: { modelValue: "" },
    });
    expect(wrapper.find("textarea").exists()).toBe(true);
  });

  it("renders label", () => {
    const wrapper = mount(SaTextarea, {
      props: { modelValue: "", label: "Description" },
    });
    expect(wrapper.text()).toContain("Description");
  });

  it("binds model value", () => {
    const wrapper = mount(SaTextarea, {
      props: { modelValue: "Hello world" },
    });
    expect(
      (wrapper.find("textarea").element as HTMLTextAreaElement).value,
    ).toBe("Hello world");
  });

  it("emits update:modelValue on input", async () => {
    const wrapper = mount(SaTextarea, {
      props: { modelValue: "" },
    });
    await wrapper.find("textarea").setValue("New text");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["New text"]);
  });

  it("applies disabled attribute", () => {
    const wrapper = mount(SaTextarea, {
      props: { modelValue: "", disabled: true },
    });
    expect(wrapper.find("textarea").attributes("disabled")).toBeDefined();
  });

  it("shows error styling", () => {
    const wrapper = mount(SaTextarea, {
      props: { modelValue: "", error: true },
    });
    const html = wrapper.html();
    expect(html).toContain("border");
  });
});
