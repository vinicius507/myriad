import Head from 'next/head'
import Link from 'next/link'
import LayoutHome from '../components/layoutHome'
import styles from '../styles/contact.module.css'
import ContactForm from '../components/contactForm'
import { motion } from 'framer-motion'


export default function Contact() {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="description" content="I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me." />
            </Head>
            <LayoutHome contact />
            <motion.div
                className={styles.container}
                initial="initial"
                animate="enter"
                exit="exit"
                variants={container}
                layoutId="contactContainer"
            >
                <Link href="/"><a className={styles.exit}><img src="/images/exit.png" alt="close" /></a></Link>
                <header className={styles.header}>
                    <h1>Contact Me</h1>
                    <p>I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me using the following form.</p>
                </header>
                <ContactForm />
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a><span>←</span></a>
                    </Link>
                </div>
            </motion.div>
        </>
    )
}

const container = {
    initial: {
        y: 50,
        opacity: 0,
    },
    enter: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
        }
    },
    exit: {
        y: 50,
        opacity: 0,
        transition: {
            duration: 0.6,
        }
    }
}