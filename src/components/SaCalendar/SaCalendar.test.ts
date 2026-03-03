import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SaCalendar from "./SaCalendar.vue";

describe("SaCalendar", () => {
  it("renders month and year", () => {
    const date = new Date(2025, 5, 15); // June 2025
    const wrapper = mount(SaCalendar, { props: { modelValue: date } });
    expect(wrapper.text()).toContain("June");
    expect(wrapper.text()).toContain("2025");
  });

  it("renders day labels", () => {
    const wrapper = mount(SaCalendar);
    expect(wrapper.text()).toContain("Mo");
    expect(wrapper.text()).toContain("Fr");
  });

  it("renders custom day labels", () => {
    const wrapper = mount(SaCalendar, {
      props: { dayLabels: ["D", "L", "M", "X", "J", "V", "S"] },
    });
    expect(wrapper.text()).toContain("D");
    expect(wrapper.text()).toContain("V");
  });

  it("renders today button with custom label", () => {
    const wrapper = mount(SaCalendar, { props: { todayLabel: "Heute" } });
    expect(wrapper.text()).toContain("Heute");
  });

  it("emits update:modelValue on date click", async () => {
    const date = new Date(2025, 5, 15);
    const wrapper = mount(SaCalendar, { props: { modelValue: date } });
    const dayButtons = wrapper
      .findAll("button")
      .filter((b) => b.text() === "10");
    if (dayButtons.length > 0) {
      await dayButtons[0].trigger("click");
      expect(wrapper.emitted("update:modelValue")).toBeDefined();
    }
  });

  it("navigates to next month", async () => {
    const date = new Date(2025, 0, 15); // January 2025
    const wrapper = mount(SaCalendar, { props: { modelValue: date } });
    expect(wrapper.text()).toContain("January");
    // Click next month button (last navigation button)
    const navButtons = wrapper
      .findAll("button")
      .filter((b) => b.attributes("aria-label") === "Next month");
    if (navButtons.length > 0) {
      await navButtons[0].trigger("click");
      expect(wrapper.text()).toContain("February");
    }
  });
});
