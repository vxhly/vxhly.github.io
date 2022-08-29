import {navbar} from "vuepress-theme-hope";

export const zhNavbarConfig = navbar([
  "/",
  {
    text: "PMP 第六版",
    // icon: "pmp",
    prefix: "/pmp/",
    children: [
      "knowledge/"
    ],
  },
]);
