import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";

export default defineConfig({
  plugins: [HstVue()],
  setupFile: "./src/histoire-setup.ts",
  storyMatch: ["src/**/*.story.vue"],
  tree: {
    groups: [
      {
        id: "top",
        title: "",
      },
    ],
  },
  theme: {
    title: "SA UI",
    defaultColorScheme: "light",
  },
  vite: {
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },
  },
});
