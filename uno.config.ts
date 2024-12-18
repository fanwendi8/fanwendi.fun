import { defineConfig, presetAttributify, presetUno } from "unocss";

export default defineConfig({
  content: {
    filesystem: ["**/*.{vue,md}"],
  },
  presets: [presetUno(), presetAttributify()],
});
