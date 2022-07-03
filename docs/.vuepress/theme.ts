import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbarConfig } from "./navbar";

export default hopeTheme({
  hostname: "https://vxhly.github.io/",

  breadcrumb: false,

  author: {
    name: "星火燎原@vxhly",
    url: "https://vxhly.github.io/",
  },

  iconAssets: "//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css",
  iconPrefix: "iconfont icon-",

  logo: "/favicon.ico",

  repo: "https://github.com/vxhly/vxhly.github.io",

  repoDisplay: false,

  docsDir: "docs",

  locales: {
    "/": {
      navbar: zhNavbarConfig,
      sidebar: false,
      blog: {
        avatar: "/avatar.jpeg",
        roundAvatar: true,
        description: "伪前端开发工作者",
        // intro: "/about/",
        medias: {
          Gmail: "mailto:pengchengou@gmail.com",
          Zhihu: "https://www.zhihu.com/people/xing-huo-liao-yuan-76-49",
          GitHub: "https://github.com/vxhly",
          Gitee: "https://gitee.com/vxhly",
        },
      },
    },
  },

  displayFooter: true,
  copyright: "MIT Licensed | Copyright © 2022 vxhly",

  plugins: {
    blog: true,

    components: ["Badge", "CodePen", "PDF", "StackBlitz"],
    copyright: {
      hostname: "https://vxhly.github.io/",
      author: "星火燎原@vxhly",
      license: "MIT",
      triggerWords: 1,
      global: true,
    },
    feed: {
      atom: true,
      json: true,
      rss: true,
    },

    mdEnhance: {
      enableAll: true,
    },

    pwa: {
      update: "hint",
      favicon: "/favicon.ico",
      themeColor: "#46bd87",
      appendBase: true,
      apple: {
        icon: "/icons/apple-touch-icon-152x152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/icons/mstile-150x150.png",
        color: "#ffffff",
      },
    },

    seo: {
      canonical: "https://vxhly.github.io/",
    },
  },
});
