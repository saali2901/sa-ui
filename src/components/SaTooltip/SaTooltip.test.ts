import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SaTooltip from "./SaTooltip.vue";

describe("SaTooltip", () => {
  it("renders slot content", () => {
    const wrapper = mount(SaTooltip, {
      props: { text: "Tooltip text" },
      slots: { default: "<button>Hover me</button>" },
    });
    expect(wrapper.text()).toContain("Hover me");
  });

  it("hides tooltip by default", () => {
    const wrapper = mount(SaTooltip, {
      props: { text: "Tooltip text" },
      slots: { default: "<button>Hover me</button>" },
    });
    expect(wrapper.find('[role="tooltip"]').exists()).toBe(false);
  });

  it("shows tooltip on mouseenter", async () => {
    const wrapper = mount(SaTooltip, {
      props: { text: "Tooltip text", delay: 0 },
      slots: { default: "<button>Hover me</button>" },
    });
    await wrapper.trigger("mouseenter");
    // After a tick, tooltip should appear
    await wrapper.vm.$nextTick();
    await new Promise((r) => setTimeout(r, 10));
    await wrapper.vm.$nextTick();
    expect(wrapper.find('[role="tooltip"]').exists()).toBe(true);
    expect(wrapper.text()).toContain("Tooltip text");
  });

  it("hides tooltip on mouseleave", async () => {
    const wrapper = mount(SaTooltip, {
      props: { text: "Tooltip text", delay: 0 },
      slots: { default: "<button>Hover me</button>" },
    });
    await wrapper.trigger("mouseenter");
    await wrapper.vm.$nextTick();
    await new Promise((r) => setTimeout(r, 10));
    await wrapper.vm.$nextTick();
    expect(wrapper.find('[role="tooltip"]').exists()).toBe(true);
    await wrapper.trigger("mouseleave");
    // hide() has a 100ms delay
    await new Promise((r) => setTimeout(r, 150));
    await wrapper.vm.$nextTick();
    expect(wrapper.find('[role="tooltip"]').exists()).toBe(false);
  });
});
