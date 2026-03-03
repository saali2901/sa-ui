<script setup lang="ts">
import SaTable from "./SaTable.vue";
import type { TableColumn } from "@/types";

type Row = { name: string; email: string; role: string };

const columns: TableColumn<Row>[] = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "role", label: "Role", align: "center" },
];

const rows = [
  { name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
  { name: "Bob Smith", email: "bob@example.com", role: "Editor" },
  { name: "Charlie Brown", email: "charlie@example.com", role: "Viewer" },
];
</script>

<template>
  <Story title="SaTable" icon="lucide:table">
    <Variant title="Default">
      <SaTable :columns="columns" :rows="rows" />
    </Variant>
    <Variant title="Striped">
      <SaTable :columns="columns" :rows="rows" striped />
    </Variant>
    <Variant title="Hoverable">
      <SaTable :columns="columns" :rows="rows" hoverable />
    </Variant>
    <Variant title="Empty state">
      <SaTable :columns="columns" :rows="[]" empty-text="No users found." />
    </Variant>
  </Story>
</template>
