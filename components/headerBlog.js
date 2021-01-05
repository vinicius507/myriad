import Link from "next/link";
import styles from "./headerBlog.module.css";
import { siteTitle } from "./layoutHome";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1>_{siteTitle}</h1>
        <div className={styles.menu}>
          <Link href="/">
            <a>HOME</a>
          </Link>
          <Link href="/about">
            <a>ABOUT</a>
          </Link>
          <Link href="/blog">
            <a>BLOG</a>
          </Link>
          <Link href="/portfolio">
            <a>PORTFOLIO</a>
          </Link>
          <Link href="/contact">
            <a>CONTACT</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
