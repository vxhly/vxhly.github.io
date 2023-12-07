import { navbar } from "vuepress-theme-hope";

export const zhNavbarConfig = navbar([
  "/",
  {
    text: "PMP 第六版",
    prefix: "/pmp/",
    children: ["knowledge/", "agile/", "examination/"],
  },
  // {
  //   text: "软考-高项",
  //   prefix: "/project-manager/",
  //   children: ["knowledge/"],
  // },
  {
    text: "软考-系统架构设计师",
    prefix: "/system-architect/",
    children: ["basic-knowledge/", "examination/"],
  },
]);
