import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { sidebar } from './sidebar'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: '/logo.png',

  appearance: true,

  copyright: 'CC-BY-NC-ND-4.0',

  profile: {
    avatar: '/logo.png',
    name: 'Wendi',
    description: 'Coding like crafting poetry',
    location: 'Beijing, China',
    // circle: true,
    // organization: '',
  },
  
  notes: false,
  sidebar,
  navbar,

  social: [
    { icon: 'github', link: 'https://github.com/fanwendi8' },
    {
      icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"/></svg>', name: 'e-mail' },
      link: 'mailto:fanwendi8@outlook.com'
    },
  ],

})
