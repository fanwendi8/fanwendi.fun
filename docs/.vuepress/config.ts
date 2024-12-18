import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { theme } from './theme.ts'
import UnoCSS from "unocss/vite";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Wendi's Blog",
  description: "Coding like crafting poetry",
  head: [
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png" }],
    ["meta", { name: "keywords", content: "fanwendi" }],
    ["meta", { "http-equiv": "X-UA-Compatible", content: "IE=edg" }],
    ["meta", { name: "msapplication-TileColor", content: "#da532c" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
  ],

  bundler: viteBundler({
    viteOptions: {
      plugins: [UnoCSS()],
    },
  }),

  theme
});
