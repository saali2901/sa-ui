import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SaUploadArea from "./SaUploadArea.vue";

describe("SaUploadArea", () => {
  it("renders the upload area", () => {
    const wrapper = mount(SaUploadArea);
    expect(wrapper.find("input[type='file']").exists()).toBe(true);
  });

  it("shows drop text", () => {
    const wrapper = mount(SaUploadArea, {
      props: { dropText: "Drop files here" },
    });
    expect(wrapper.text()).toContain("Drop files here");
  });

  it("passes accept attribute to input", () => {
    const wrapper = mount(SaUploadArea, {
      props: { accept: ".png,.jpg" },
    });
    expect(wrapper.find("input[type='file']").attributes("accept")).toBe(
      ".png,.jpg",
    );
  });

  it("passes multiple attribute to input", () => {
    const wrapper = mount(SaUploadArea, {
      props: { multiple: true },
    });
    expect(
      wrapper.find("input[type='file']").attributes("multiple"),
    ).toBeDefined();
  });

  it("emits changed event on file input", async () => {
    const wrapper = mount(SaUploadArea);
    const input = wrapper.find("input[type='file']");
    // Simulate a change event
    await input.trigger("change");
    expect(wrapper.emitted("changed")).toBeTruthy();
  });
});
