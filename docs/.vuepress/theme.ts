import type { Theme } from "vuepress";
import { plumeTheme } from "vuepress-theme-plume";

export const theme: Theme = plumeTheme({
  // 添加您的部署域名
  hostname: "https://fanwendi.fun",
  // your git repo url
  docsRepo: "https://github.com/fanwendi8/fanwendi.fun",
  docsDir: "docs",

  contributors: {
    mode: "block",
  },

  editLink: false,

  footer: { message:'', copyright: 'Copyright © 2024-present fanwendi.' },

  blog: {
    postList: false, // 禁止生成博客文章列表页
    // tagsLink: '/blog/tags/',
    // categoriesLink: '/blog/categories/',
    // archiveLink: '/blog/archives/',
  },

  plugins: {
    git: true,
    /**
     * Shiki 代码高亮
     * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
     */
    shiki: {
      languages: ["shell", "bash", "typescript", "javascript", "html", "css", "python", "rust", "c++", "zsh", "vue", "vue-html", "scss"],
    },

    /**
     * markdown enhance
     * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
     */
    markdownEnhance: {
      demo: true,
      //   chart: true,
      echarts: true,
      mermaid: true,
      flowchart: true,
    },

    markdownImage: {
      // 启用 figure
      // figure: true,

      // 启用图片懒加载
      lazyload: true,

      // 启用图片标记
      // mark: true,

      // 启用图片大小
      size: true,
    },

    /**
     *  markdown power
     * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
     */
    markdownPower: {
      // pdf: true,
      // caniuse: true,
      // plot: true,
      bilibili: true,
      // youtube: true,
      // icons: true,
      // codepen: true,
      // replit: true,
      // codeSandbox: true,
      // jsfiddle: true,
      repl: {
        // go: true,
        rust: true,
        // kotlin: true,
      },
    },

    /**
     * 评论 comments
     * @see https://theme-plume.vuejs.press/guide/features/comments/
     */
    comment: {
      provider: "Giscus", // "Artalk" | "Giscus" | "Twikoo" | "Waline"
      comment: true,
      repo: 'fanwendi8/fanwendi.fun',
      repoId: 'R_kgDONe3slg',
      category:"General",
      categoryId: 'DIC_kwDONe3sls4ClV0V',
      mapping: 'pathname',
      reactionsEnabled: true,
      inputPosition: 'top',
    },
  },
});
