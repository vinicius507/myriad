import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import LayoutHome, { siteTitle } from '../components/layoutHome'
import styles from '../components/layoutHome.module.css'

export default function Home() {
  return (
    <LayoutHome home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <motion.header className={styles.header} initial="initial" animate="enter" exit="exit" variants={header}>
        <motion.h1 variants={headerItem}>_{siteTitle}</motion.h1>
        <motion.p className={styles.description} variants={headerItem}>Vinícius Gonçalves<br />Developer</motion.p>
      </motion.header>
      <motion.div className={styles.nav} initial="initial" animate="enter" exit="exit" variants={menu}>
        <Link href="/about">
          <motion.a variants={menuItem}><span>ABOUT ME</span></motion.a>
        </Link>
        <Link href="/blog">
          <motion.a variants={menuItem}><span>BLOG</span></motion.a>
        </Link>
        <Link href="/portfolio">
          <motion.a variants={menuItem}><span>PORTFOLIO</span></motion.a>
        </Link>
        <Link href="/contact">
          <motion.a variants={menuItem}><span>CONTACT ME</span></motion.a>
        </Link>
      </motion.div>
      <motion.div className={styles.socials} initial="initial" animate="enter" exit="exit" variants={socials}>
        <a>
          <motion.img variants={socialIcon}
            src="/images/GitHub.png"
          />
        </a>
        <a>
          <motion.img variants={socialIcon}
            src="images/Twitter.png"
          />
        </a>
      </motion.div>
    </LayoutHome>
  )
}

const menu = {
  enter: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    }
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    }
  }
}

const menuItem = {
  initial: {
    x: -25,
    opacity: 0,
  },
  enter: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: -25,
    opacity: 0,
  }
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
      delay: 1,
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

export const socials = {
  enter: {
    transition: {
      delayChildren: 0.2,
    }
  }
}

export const socialIcon = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  }
}