"use client"
import styles from "./css/intern.module.css"
import Link from "next/link";


export default function InternshipCard() {
  return (
    <div>
      <div className={styles.cardSet}>
        <div className={styles.cardmain}>
        <div className={styles.card}>
        <div className={styles.header}>
          <h3>株式会社iimon</h3>
          <span className={styles.duration}>インターン</span>
        </div>
        <div className={styles.body}>
          <h4>不動産業界のDX推進</h4>
          <p>
            <Link href="https://iimon.co.jp/">
            Check
            </Link>
          </p>
        </div>
        </div>
        </div>

        <div className={styles.cardmain}>
        <div className={styles.card}>
        <div className={styles.header}>
          <h3>株式会社ジークス</h3>
          <span className={styles.duration}>インターン</span>
        </div>
        <div className={styles.body}>
          <h4>Webアプリケーション開発</h4>
          <p>
            <Link href="https://www.zyyx.jp/">
            Check
            </Link>
          </p>
        </div>
        </div>
        </div>
        </div>
</div>
  );
}
