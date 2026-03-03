// ─── Accordion ───
export interface AccordionItem {
  key: string;
  title: string;
  disabled?: boolean;
}

// ─── Breadcrumb ───
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

// ─── Dropdown ───
export interface DropdownOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

// ─── Tabs ───
export interface TabItem {
  key: string;
  label: string;
  disabled?: boolean;
}

// ─── Table ───
export interface TableColumn<T = Record<string, unknown>> {
  key: keyof T & string;
  label: string;
  sortable?: boolean;
  align?: "left" | "center" | "right";
  width?: string;
}

// ─── Stepper ───
export interface StepperStep {
  title: string;
  description: string;
}

// ─── Toast ───
export type ToastType = "success" | "error" | "warning" | "info";

export interface ToastMessage {
  id: number;
  type: ToastType;
  message: string;
  duration?: number;
}

export type ToastPosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left"
  | "top-center"
  | "bottom-center";

// ─── Radio ───
export interface RadioOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}
