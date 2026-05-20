import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ["src/**/*.ts", "src/**/*.vue"],
      exclude: [
        "src/**/*.stories.ts",
        "src/**/*.stories.tsx",
        "src/**/*.stories.js",
        "src/**/*.stories.jsx",
      ],
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.json",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "SaUI",
      formats: ["es", "umd"],
      fileName: (format: any) =>
        format === "es" ? "sa-ui.js" : "sa-ui.umd.cjs",
      cssFileName: "style",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: { vue: "Vue" },
        exports: "named",
      },
    },
  },
});
