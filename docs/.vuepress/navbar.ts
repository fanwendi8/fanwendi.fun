import { defineNavbarConfig } from "vuepress-theme-plume";

export const navbar = defineNavbarConfig([
  { text: "Home", link: "/" },
  { text: "Tags", link: "/blog/tags/" },
  { text: "Archives", link: "/blog/archives/" },
  {
    text: "Collections",
    items: [
      {
        icon: "pajamas:machine-learning",
        text: "Machine Learning",
        link: "/machine-learning/",
      },
    ],
  },
]);
