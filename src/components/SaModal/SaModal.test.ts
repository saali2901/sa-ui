import { describe, it, expect, afterEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import SaModal from "./SaModal.vue";

describe("SaModal", () => {
  let wrapper: VueWrapper;

  afterEach(() => {
    wrapper?.unmount();
    document.body.innerHTML = "";
  });

  it("is hidden when isOpen is false", () => {
    wrapper = mount(SaModal, {
      props: { isOpen: false },
      attachTo: document.body,
    });
    expect(document.querySelector("[role=dialog]")).toBeNull();
  });

  it("is visible when isOpen is true", () => {
    wrapper = mount(SaModal, {
      props: { isOpen: true },
      slots: { title: "Modal Title" },
      attachTo: document.body,
    });
    expect(document.querySelector("[role=dialog]")).not.toBeNull();
  });

  it("renders title slot", () => {
    wrapper = mount(SaModal, {
      props: { isOpen: true },
      slots: { title: "My Title" },
      attachTo: document.body,
    });
    expect(document.body.textContent).toContain("My Title");
  });

  it("renders body slot", () => {
    wrapper = mount(SaModal, {
      props: { isOpen: true },
      slots: { body: "Body content" },
      attachTo: document.body,
    });
    expect(document.body.textContent).toContain("Body content");
  });

  it("emits close on close button click", async () => {
    wrapper = mount(SaModal, {
      props: { isOpen: true },
      attachTo: document.body,
    });
    const closeBtn = document.querySelector(
      'button[aria-label="Close"]',
    ) as HTMLElement;
    closeBtn.click();
    expect(wrapper.emitted("close")).toHaveLength(1);
  });

  it("emits close on backdrop click", async () => {
    wrapper = mount(SaModal, {
      props: { isOpen: true },
      attachTo: document.body,
    });
    const backdrop = document.querySelector(".backdrop-blur") as HTMLElement;
    backdrop.click();
    expect(wrapper.emitted("close")).toHaveLength(1);
  });

  it("does not emit close on backdrop click when closeOnBackdrop is false", async () => {
    wrapper = mount(SaModal, {
      props: { isOpen: true, closeOnBackdrop: false },
      attachTo: document.body,
    });
    const backdrop = document.querySelector(".backdrop-blur") as HTMLElement;
    backdrop.click();
    expect(wrapper.emitted("close")).toBeUndefined();
  });

  it("has aria-modal attribute", () => {
    wrapper = mount(SaModal, {
      props: { isOpen: true },
      attachTo: document.body,
    });
    expect(
      document.querySelector("[role=dialog]")?.getAttribute("aria-modal"),
    ).toBe("true");
  });
});
