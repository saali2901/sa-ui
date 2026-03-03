import { describe, it, expect, afterEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import SaToast from "./SaToast.vue";
import { nextTick } from "vue";
import type { ToastType } from "@/types";

interface ToastExposed {
  add: (type: ToastType, message: string, duration?: number) => number;
  remove: (id: number) => void;
  clear: () => void;
}

describe("SaToast", () => {
  let wrapper: VueWrapper;

  afterEach(() => {
    wrapper?.unmount();
    document.body.innerHTML = "";
  });

  it("renders with no toasts initially", () => {
    wrapper = mount(SaToast, {
      props: { position: "top-right" },
      attachTo: document.body,
    });
    expect(document.querySelectorAll('[role="alert"]')).toHaveLength(0);
  });

  it("exposes add method", () => {
    wrapper = mount(SaToast, {
      props: { position: "top-right" },
      attachTo: document.body,
    });
    expect(typeof (wrapper.vm as unknown as ToastExposed).add).toBe("function");
  });

  it("exposes remove method", () => {
    wrapper = mount(SaToast, {
      props: { position: "top-right" },
      attachTo: document.body,
    });
    expect(typeof (wrapper.vm as unknown as ToastExposed).remove).toBe("function");
  });

  it("exposes clear method", () => {
    wrapper = mount(SaToast, {
      props: { position: "top-right" },
      attachTo: document.body,
    });
    expect(typeof (wrapper.vm as unknown as ToastExposed).clear).toBe("function");
  });

  it("adds a toast via exposed method", async () => {
    wrapper = mount(SaToast, {
      props: { position: "top-right" },
      attachTo: document.body,
    });
    (wrapper.vm as unknown as ToastExposed).add("success", "It worked!", 0);
    await nextTick();
    expect(
      document.querySelectorAll('[role="alert"]').length,
    ).toBeGreaterThanOrEqual(1);
    expect(document.body.textContent).toContain("It worked!");
  });

  it("removes a toast via clear", async () => {
    wrapper = mount(SaToast, {
      props: { position: "top-right" },
      attachTo: document.body,
    });
    (wrapper.vm as unknown as ToastExposed).add("info", "Test toast", 0);
    await nextTick();
    expect(document.querySelectorAll('[role="alert"]').length).toBe(1);
    (wrapper.vm as unknown as ToastExposed).clear();
    await nextTick();
    expect(document.querySelectorAll('[role="alert"]')).toHaveLength(0);
  });
});
