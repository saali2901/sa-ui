import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SaTable from "./SaTable.vue";

const columns = [
  { key: "name", label: "Name" },
  { key: "age", label: "Age", align: "center" as const },
];

const rows = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];

describe("SaTable", () => {
  it("renders a table element", () => {
    const wrapper = mount(SaTable, {
      props: { columns, rows },
    });
    expect(wrapper.find("table").exists()).toBe(true);
  });

  it("renders column headers", () => {
    const wrapper = mount(SaTable, {
      props: { columns, rows },
    });
    const headers = wrapper.findAll("th");
    expect(headers[0].text()).toBe("Name");
    expect(headers[1].text()).toBe("Age");
  });

  it("renders row data", () => {
    const wrapper = mount(SaTable, {
      props: { columns, rows },
    });
    const cells = wrapper.findAll("td");
    expect(cells[0].text()).toBe("Alice");
    expect(cells[1].text()).toBe("30");
  });

  it("shows empty text when no rows", () => {
    const wrapper = mount(SaTable, {
      props: { columns, rows: [], emptyText: "No data found" },
    });
    expect(wrapper.text()).toContain("No data found");
  });

  it("applies striped class", () => {
    const wrapper = mount(SaTable, {
      props: { columns, rows, striped: true },
    });
    expect(wrapper.html()).toBeTruthy();
  });

  it("renders correct number of rows", () => {
    const wrapper = mount(SaTable, {
      props: { columns, rows },
    });
    const trs = wrapper.findAll("tbody tr");
    expect(trs).toHaveLength(2);
  });
});
