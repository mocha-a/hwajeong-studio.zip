"use client";
import styles from "./AboutSection.module.scss";
import { ReactNode } from "react";

type Props ={
  title: string;
  children: ReactNode;
  width?: number | string;
}

export default function AboutSection({ title, children }: Props) {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
      </div>

      <div className={styles.contentBox}>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </section>
  );
}