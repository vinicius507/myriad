import Link from 'next/link'
import styles from './layoutHome.module.css'
import { AnimateSharedLayout, motion } from 'framer-motion'

export const siteTitle = 'Myriad'

export default function LayoutHome({ children, home }) {

    return (
        <AnimateSharedLayout>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <main>{children}</main>
                    {!home && (
                        <motion.div className={styles.backToHome} initial="initial" animate="enter" exit="exit" variants={back}>
                            <Link href="/">
                                <a><span>←</span></a>
                            </Link>
                        </motion.div>
                    )}
                </div>
                <div className={styles.picture}>
                    <img src="/images/picture.png" />
                </div>
            </div>
        </AnimateSharedLayout>
    )
}

const back = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
}