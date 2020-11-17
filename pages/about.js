import Link from 'next/link'
import LayoutHome from '../components/layoutHome'
import styles from '../components/layoutHome.module.css'

export default function About() {
    return (
        <LayoutHome>
            <header className={styles.header}>
                <h1>_About</h1>
                <p className={styles.about}>21 years old Computer Science student at Federal University of Paraíba(UFPB), currently working around with Python programming and Next.js Web Development. Open Source enthusiast.</p>
                <p className={styles.about}>If you wish yo know more about my projects and ideas, check out my <Link href="/blog"><a>blog</a></Link>.</p>
            </header>
        </LayoutHome>
    )
}