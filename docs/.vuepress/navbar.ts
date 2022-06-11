import { navbar } from "vuepress-theme-hope";

export const zhNavbarConfig = navbar([
  "/",
  {
    text: "关于本站",
    icon: "info",
    children: [
      {
        text: "站点介绍",
        link: "/about/site/",
      },
    ],
  },
]);
