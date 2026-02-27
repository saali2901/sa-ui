<script lang="ts">
export interface TableColumn<T> {
  key: keyof T & string;
  label: string;
  sortable?: boolean;
  align?: "left" | "center" | "right";
  width?: string;
}

export type TableProps<T = any> = {
  columns: TableColumn<T>[];
  rows: T[];
  striped?: boolean;
  hoverable?: boolean;
};
</script>

<script setup lang="ts" generic="T extends Record<string, unknown>">
import { ref, computed } from "vue";
import { tv } from "tailwind-variants";
import { ChevronDown, ChevronUp } from "lucide-vue-next";

type TableColumn<T> = import("./SaTable.vue").TableColumn<T>;
type TableProps<T = any> = import("./SaTable.vue").TableProps<T>;

defineOptions({
  name: "SaTable",
});

const props = withDefaults(defineProps<TableProps<T>>(), {
  striped: false,
  hoverable: true,
});

const sortKey = ref<string>("");
const sortOrder = ref<"asc" | "desc">("asc");

const toggleSort = (column: TableColumn<T>) => {
  if (!column.sortable) return;

  if (sortKey.value === column.key) {
    sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
  } else {
    sortKey.value = column.key;
    sortOrder.value = "asc";
  }
};

const sortedRows = computed(() => {
  if (!sortKey.value) return props.rows;

  return [...props.rows].sort((a, b) => {
    const aVal = a[sortKey.value as keyof T];
    const bVal = b[sortKey.value as keyof T];

    if (aVal == null && bVal == null) return 0;
    if (aVal == null) return 1;
    if (bVal == null) return -1;

    let result = 0;
    if (typeof aVal === "string" && typeof bVal === "string") {
      result = aVal.localeCompare(bVal);
    } else if (typeof aVal === "number" && typeof bVal === "number") {
      result = aVal - bVal;
    } else {
      result = String(aVal).localeCompare(String(bVal));
    }

    return sortOrder.value === "asc" ? result : -result;
  });
});

const headerVariants = tv({
  base: "px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted",
  variants: {
    sortable: {
      true: "cursor-pointer select-none hover:text-body duration-200",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
});

const cellVariants = tv({
  base: "px-4 py-3 text-sm text-body",
  variants: {
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
});

const rowVariants = tv({
  base: "border-b border-border duration-200",
  variants: {
    striped: {
      true: "even:bg-surface-muted",
    },
    hoverable: {
      true: "hover:bg-surface-hover",
    },
  },
});
</script>

<template>
  <div class="w-full overflow-x-auto">
    <table class="w-full border-collapse">
      <thead>
        <tr class="border-b-2 border-border">
          <th
            v-for="column in columns"
            :key="column.key"
            :class="
              headerVariants({
                sortable: column.sortable,
                align: column.align || 'left',
              })
            "
            :style="column.width ? { width: column.width } : undefined"
            @click="toggleSort(column)"
          >
            <div class="inline-flex items-center gap-1">
              <span>{{ column.label }}</span>
              <span v-if="column.sortable" class="inline-flex flex-col">
                <ChevronUp
                  :size="12"
                  :class="
                    sortKey === column.key && sortOrder === 'asc'
                      ? 'text-primary'
                      : 'text-border'
                  "
                />
                <ChevronDown
                  :size="12"
                  class="-mt-1"
                  :class="
                    sortKey === column.key && sortOrder === 'desc'
                      ? 'text-primary'
                      : 'text-border'
                  "
                />
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, index) in sortedRows"
          :key="index"
          :class="rowVariants({ striped, hoverable })"
        >
          <td
            v-for="column in columns"
            :key="column.key"
            :class="cellVariants({ align: column.align || 'left' })"
          >
            <slot :name="column.key" :row="row" :value="row[column.key]">
              {{ row[column.key] }}
            </slot>
          </td>
        </tr>
        <!-- Empty state -->
        <tr v-if="sortedRows.length === 0">
          <td
            :colspan="columns.length"
            class="px-4 py-8 text-sm text-center text-muted"
          >
            <slot name="empty"> Keine Daten vorhanden </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
