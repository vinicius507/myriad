import Head from 'next/head'
import Link from 'next/link'
import LayoutHome, { siteTitle } from '../components/layoutHome'
import styles from '../components/layoutHome.module.css'


export default function Home() {
  return (
    <LayoutHome home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <header className={styles.header}>
        <h1>_{siteTitle}</h1>
        <p>Vinícius Gonçalves<br />Developer</p>
      </header>
      <div className={styles.nav}>
        <Link href="/about">
          <a>ABOUT ME</a>
        </Link>
        <Link href="/blog">
          <a>BLOG</a>
        </Link>
        <Link href="/portfolio">
          <a>PORTFOLIO</a>
        </Link>
        <Link href="/contact">
          <a>CONTACT ME</a>
        </Link>
      </div>
      <div className={styles.socials}>
        <a>
          <img
            src="/images/GitHub.png"
          />
        </a>
        <a>
          <img
            src="images/Twitter.png"
          />
        </a>
      </div>
    </LayoutHome>
  )
}