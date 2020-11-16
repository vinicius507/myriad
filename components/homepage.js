import styles from './homepage.module.css'
import Link from 'next/link'
import { siteTitle } from './layout'

export default function Homepage() {

    const hasWindow = typeof window !== "undefined"

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
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
            </div>
            <div className={styles.picture}>
                <img src="/images/picture.png" />
            </div>
        </div>
    )
}