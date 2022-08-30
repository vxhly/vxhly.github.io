import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbarConfig } from "./navbar";
import { zhSidebarConfig } from "./sidebar";

export default hopeTheme({
  hostname: "https://vxhly.github.io/",

  breadcrumb: true,

  author: {
    name: "星火燎原@vxhly",
    url: "https://vxhly.github.io/",
  },

  iconAssets: "//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css",
  iconPrefix: "iconfont icon-",

  logo: "/favicon.ico",

  // repo: "https://github.com/vxhly/vxhly.github.io",

  displayFooter: true,
  copyright: "Copyright © 2022-present 星火燎原@vxhly",

  docsDir: "docs",

  locales: {
    "/": {
      navbar: zhNavbarConfig,
      sidebar: zhSidebarConfig,
      blog: {
        avatar: "/avatar.jpeg",
        roundAvatar: true,
        description: "Coding and Fixing",
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
      demo: true,
      mermaid: true,
      flowchart: true,
      container: true,
      align: true,
      sup: true,
      sub: true,
      footnote: true,
      mark: true,
      tasklist: true,
      tex: true,
      presentation: true,
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
