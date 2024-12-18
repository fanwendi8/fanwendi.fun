import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '🏠首页', link: '/' },
  { text: '🏷️标签', link: '/blog/tags/' },
  { text: '🗄️归档', link: '/blog/archives/' },
  {
    text: '🗂️系列',
    link: '#'
    // items: [{ text: '示例', link: '#' }]
  },
])
