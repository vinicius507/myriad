import Head from 'next/head'
import Link from 'next/link'
import LayoutHome from '../components/layoutHome'
import styles from '../components/menu.module.css'
import { motion } from "framer-motion";

export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="description" content="21 years old brazilian Computer Science student at Federal University of Paraíba(UFPB), currently working around with Python programming and Next.js Web Development. Open Source enthusiast." />
            </Head>
            <LayoutHome>
                <motion.header
                    className={styles.header}
                    variants={header}
                >
                    <motion.h1 variants={headerItem}>_About</motion.h1>
                    <motion.p
                        className={styles.about}
                        variants={headerItem}
                    >
                        21 years old brazilian Computer Science student at Federal University of Paraíba(UFPB) , currently working around with Python programming and Next.js Web Development. Open Source enthusiast.
                        </motion.p>
                    <motion.p
                        className={styles.about}
                        variants={headerItem}
                    >
                        If you wish to know more about my projects and ideas, check out my <Link href="/blog"><a>blog</a></Link>.
                        </motion.p>
                </motion.header>
            </LayoutHome>
        </>
    )
}

const header = {
    enter: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
            type: "inertia",
            velocity: 2
        }
    },
    exit: {
        transition: {
            staggerChildren: 0.1,
            type: "inertia",
            velocity: 2
        }
    }
}

const headerItem = {
    initial: {
        y: -25,
        opacity: 0,
    },
    enter: {
        y: 0,
        opacity: 1,
    },
    exit: {
        y: -25,
        opacity: 0,
    }
}