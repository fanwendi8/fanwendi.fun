import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: 'Home', link: '/' },
  { text: 'Tags', link: '/blog/tags/' },
  { text: 'Archives', link: '/blog/archives/' },
  {
    text: 'Collections',
    items: [{ text: 'Machine Learning', link: '/machine-learning/' }]
  },
])
