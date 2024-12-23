import { SidebarItem, SidebarMulti } from "vuepress-theme-plume";

const marchineLearningSidebar: SidebarItem[] = [
  {
    text: "机器学习",
    link: "/machine-learning/",
    collapsed: false,
    items: "auto",
    icon: "pajamas:machine-learning",
  }
];

export const sidebar: SidebarMulti = {
  "/machine-learning/": marchineLearningSidebar,
};
