import styles from './layoutHome.module.css'
import Menu from './menu'
import { motion } from 'framer-motion'

export const siteTitle = 'Myriad'

export default function LayoutHome({ children, home, contact }) {

    return (
        <div className={contact ? `${styles.container} ${styles.contactPage}` : styles.container}>
            <Menu home={home} contact={contact}>
                {children}
            </Menu>
            <motion.div className={styles.picture} initial="initial" animate="enter" exit="exit" variants={container} layoutId="picture">
                <img src="/images/picture.png" />
            </motion.div>
        </div>
    )
}

const container = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: {
            duration: 0.5,
            when: 'beforeChildren'
        }
    },
    exit: {
        opacity: 0,
        transition: {
            when: 'afterChildren'
        }
    }
}