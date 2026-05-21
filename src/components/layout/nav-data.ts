export interface NavLink {
  href: string;
  key: "framework" | "docs" | "discussions" | "blog";
  external?: boolean;
}

export const GITHUB_REPO = "https://github.com/phronesis-framework";
export const GITHUB_WEB_REPO = "https://github.com/phronesis-framework/phronesis-web";
export const GITHUB_FRAMEWORK_REPO = "https://github.com/phronesis-framework/phronesis";
export const DOCS_URL = "https://phronesis-framework.com/docs";
export const DISCUSSIONS_URL = `${GITHUB_FRAMEWORK_REPO}/discussions`;
export const ISSUES_URL = `${GITHUB_FRAMEWORK_REPO}/issues`;
export const CHANGELOG_URL = `${GITHUB_FRAMEWORK_REPO}/releases`;
export const LICENSE_URL = `${GITHUB_FRAMEWORK_REPO}/blob/main/LICENSE`;
export const CONTRIBUTING_URL = `${GITHUB_FRAMEWORK_REPO}/blob/main/CONTRIBUTING.md`;
export const COC_URL = `${GITHUB_FRAMEWORK_REPO}/blob/main/CODE_OF_CONDUCT.md`;
export const SECURITY_URL = `${GITHUB_FRAMEWORK_REPO}/blob/main/SECURITY.md`;
export const RELEASES_URL = `${GITHUB_FRAMEWORK_REPO}/releases`;

export const PRIMARY_NAV: readonly NavLink[] = [
  { href: GITHUB_FRAMEWORK_REPO, key: "framework", external: true },
  { href: DOCS_URL, key: "docs" },
  { href: DISCUSSIONS_URL, key: "discussions", external: true },
  { href: "/blog", key: "blog" },
] as const;
