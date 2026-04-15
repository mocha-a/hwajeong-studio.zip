// components/RetroWindow/RetroWindow.jsx
"use client";
import styles from "./AboutSection.module.scss";
import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  width?: number | string;
}

export default function AboutSection({ title, children }: Props) {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
      </div>

      <div className={styles.contentBox}>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
}