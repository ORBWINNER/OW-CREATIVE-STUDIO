import type { ReactNode } from "react";

import styles from "./marketing-page-shell.module.css";

type MarketingPageShellProps = {
  children: ReactNode;
};

type MarketingSectionProps = {
  children: ReactNode;
  tone?: "light" | "dark";
};

export function MarketingPageShell({
  children,
}: MarketingPageShellProps) {
  return (
    <div className={styles.page}>
      <div className={styles.backgroundPattern} aria-hidden="true" />

      <main className={styles.sectionStack}>{children}</main>
    </div>
  );
}

export function MarketingSection({
  children,
  tone = "light",
}: MarketingSectionProps) {
  return (
    <div
      className={`${styles.sectionFrame} ${
        tone === "dark" ? styles.darkFrame : styles.lightFrame
      }`}
    >
      {children}
    </div>
  );
}