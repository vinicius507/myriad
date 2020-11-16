import Link from 'next/link'
import styles from './layoutHome.module.css'

export const siteTitle = 'Myriad'

export default function LayoutHome({ children, home }) {

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <main>{children}</main>
                {!home && (
                    <div className={styles.backToHome}>
                        <Link href="/">
                            <a>← Back to home</a>
                        </Link>
                    </div>
                )}
            </div>
            <div className={styles.picture}>
                <img src="/images/picture.png" />
            </div>
        </div>
    )
}