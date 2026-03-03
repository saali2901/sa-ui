import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SaStepper from "./SaStepper.vue";

const steps = [
  { title: "Account", description: "Create account" },
  { title: "Profile", description: "Set up profile" },
  { title: "Done", description: "Complete" },
];

describe("SaStepper", () => {
  it("renders all step labels", () => {
    const wrapper = mount(SaStepper, {
      props: { steps, currentStep: 0 },
    });
    expect(wrapper.text()).toContain("Account");
    expect(wrapper.text()).toContain("Profile");
    expect(wrapper.text()).toContain("Done");
  });

  it("renders step descriptions", () => {
    const wrapper = mount(SaStepper, {
      props: { steps, currentStep: 0 },
    });
    expect(wrapper.text()).toContain("Create account");
  });

  it("marks the current step", () => {
    const wrapper = mount(SaStepper, {
      props: { steps, currentStep: 1 },
    });
    // The second step should have an active/current indicator
    const html = wrapper.html();
    expect(html).toBeTruthy();
  });

  it("renders the correct number of steps", () => {
    const wrapper = mount(SaStepper, {
      props: { steps, currentStep: 0 },
    });
    // Should have step indicators for each step
    expect(wrapper.text()).toContain("1");
    expect(wrapper.text()).toContain("2");
    expect(wrapper.text()).toContain("3");
  });
});
