import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { baiduAutopushPlugin } from "@vuepress-denaro/vuepress-plugin-baidu-autopush";
import { rewardPlugin } from "@vuepress-denaro/vuepress-plugin-reward";
import { dynamicTitlePlugin } from "@vuepress-denaro/vuepress-plugin-dynamic-title";
import {
  moefyCanvasPlugin,
  MoefyCanvasTheme,
} from "@vuepress-denaro/vuepress-plugin-moefy-canvas";

export default defineUserConfig({
  base: "/",

  dest: "publish-pages",

  lang: "zh-CN",

  head: [
    [
      "link",
      {
        rel: "shortcut icon",
        href: "/favicon.ico",
      },
    ],
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Coding and Fixing",
      description: "源于生活而高于生活.",
    },
  },

  theme,

  shouldPrefetch: false,

  plugins: [
    searchProPlugin({
      indexContent: true,
    }),
    baiduAutopushPlugin(),
    rewardPlugin(),
    dynamicTitlePlugin({
      showIcon: "", // The icon displayed when the document is in the current tab.
      showText: "(/≧▽≦/)咦！又好了！", // The title displayed when the document is in the current tab.
      hideIcon: "", // The icon displayed when the document is not in the current tab.
      hideText: "(●—●)喔哟, 崩溃啦！", // The title displayed when the document is not in the current tab.
      recoverTime: 2000, // The time to recover the title after the tab is changed.
    }),
    moefyCanvasPlugin({
      theme: MoefyCanvasTheme.Sakura,
    }),
  ],
});
