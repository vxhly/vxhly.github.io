import { arraySidebar, sidebar } from "vuepress-theme-hope";

export const zhSidebarConfig = sidebar({
  "/pmp/knowledge": arraySidebar([
    "",
    "Introduction",
    "project-operating-environment",
    "project-manager",
    "project-integration-management",
    "project-scope-management",
    "project-progress-management",
    "project-cost-management",
    "project-quality-management",
    "project-resource-management",
    "project-communication-management",
    "project-risk-management",
    "project-purchasing-management",
    "project-related-party-management",
  ]),
  "/pmp/agile/": arraySidebar(["", "agile-knowledge", "scrum-3355"]),
  "/pmp/examination/": arraySidebar([
    "",
    "formula",
    "keyword",
    "pmp-spring-knowledge",
    "problem-solving",
  ]),

  "/soft-test/knowledge": arraySidebar([
    "",
    "Information-system",
    "project-management",
    "project-approval",
  ]),

  "/system-architect/examination": arraySidebar(["", "formula"]),

  "/system-architect/basic-knowledge": arraySidebar([
    "",
    "basic-architecture-design",
  ]),
});
