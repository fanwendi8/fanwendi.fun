import { defineClientConfig } from "vuepress/client";
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
import CustomComponent from './theme/components/Custom.vue'

import "./theme/styles/custom.css";

import "virtual:uno.css";

export default defineClientConfig({
  enhance({ app }) {
    // app.component('RepoCard', RepoCard)
    app.component('CustomComponent', CustomComponent)
  },
});
