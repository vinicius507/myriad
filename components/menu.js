import styles from "./menu.module.css";
import Link from "next/link";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { siteTitle } from "./layoutHome";
import { motion } from "framer-motion";

export default function Menu({ home, contact, children }) {
  return (
    <motion.div
      className={styles.sidebar}
      initial="initial"
      animate="enter"
      exit="exit"
      variants={container}
      layoutId="container"
    >
      {(home || contact) && (
        <>
          <header className={styles.header}>
            <motion.h1 variants={headerItem} layoutId="siteTitle">
              _{siteTitle}
            </motion.h1>
            <motion.p
              className={styles.description}
              variants={headerItem}
              layoutId="description"
            >
              Vinícius Gonçalves
              <br />
              Developer
            </motion.p>
          </header>
          <div className={styles.nav}>
            {!home && (
              <Link href="/">
                <motion.a variants={menuItem}>
                  <span>HOME</span>
                </motion.a>
              </Link>
            )}
            <Link href="/about">
              <motion.a variants={menuItem}>
                <span>ABOUT ME</span>
              </motion.a>
            </Link>
            <Link href="/blog">
              <motion.a variants={menuItem}>
                <span>BLOG</span>
              </motion.a>
            </Link>
            <Link href="/portfolio">
              <motion.a variants={menuItem}>
                <span>PORTFOLIO</span>
              </motion.a>
            </Link>
            {!contact && (
              <Link href="/contact">
                <motion.a variants={menuItem}>
                  <span>CONTACT ME</span>
                </motion.a>
              </Link>
            )}
          </div>
          <SocialDiv />
        </>
      )}
      {!home && !contact && (
        <>
          <main>{children}</main>
          <SocialDiv />
          <motion.div className={styles.backToHome} variants={back}>
            <Link href="/">
              <a>
                <span>←</span>
              </a>
            </Link>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}

const SocialDiv = () => {
  return (
    <motion.div
      className={styles.socials}
      variants={socials}
      layoutId="socials"
    >
      <a href="https://github.com/vinicius507">
        <AiFillGithub className={styles.socialIcon} alt="Github" />
      </a>
      <a>
        <AiFillTwitterCircle className={styles.socialIcon} alt="Twitter" />
      </a>
    </motion.div>
  );
};

const back = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const container = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

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
  },
};

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
  },
};

export const socials = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};
