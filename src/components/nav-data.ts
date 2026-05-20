export interface NavLink {
  href: string;
  label: string;
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
  { href: GITHUB_FRAMEWORK_REPO, label: "Framework", external: true },
  { href: DOCS_URL, label: "Docs" },
  { href: DISCUSSIONS_URL, label: "Discussions", external: true },
  { href: "/blog", label: "Blog" },
] as const;
