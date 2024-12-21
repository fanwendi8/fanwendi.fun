import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { theme } from './theme.ts'
import UnoCSS from "unocss/vite";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Wendi",
  description: "Coding like crafting poetry",
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { href:"https://cdn.jsdmirror.com/npm/typeface-fira-mono@1.1.13/index.min.css",rel:"stylesheet"}],
    ['link', { href:"https://cdn.jsdmirror.com/npm/@fontsource/fira-sans@5.1.0/index.min.css",rel:"stylesheet"}],
    ['link', { href:"https://cdn.jsdmirror.com/npm/@fontsource/fira-sans@5.1.0/400-italic.css",rel:"stylesheet"}],
    ['link', { href:"https://cdn.jsdmirror.com/npm/@fontsource/fira-sans@5.1.0/500.css",rel:"stylesheet"}],
    ['link', { href:"https://cdn.jsdmirror.com/npm/@fontsource/fira-sans@5.1.0/500-italic.css",rel:"stylesheet"}],
    ['link', { href:"https://cdn.jsdmirror.com/npm/@fontsource/fira-sans@5.1.0/700.css",rel:"stylesheet"}],
    ['link', { href:"https://cdn.jsdmirror.com/npm/@fontsource/fira-sans@5.1.0/700-italic.css",rel:"stylesheet"}],
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
