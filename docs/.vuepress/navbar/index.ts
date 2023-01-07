import { navbar } from "vuepress-theme-hope";

export const zhNavbarConfig = navbar([
  "/",
  {
    text: "PMP 第六版",
    prefix: "/pmp/",
    children: ["knowledge/", "agile/", "examination/"],
  },
  {
    text: "软考-高项",
    prefix: "/soft-test/",
    children: ["knowledge/"],
  },
]);
