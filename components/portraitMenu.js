import { MdMenu, MdClear } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";
import styles from "./portraitMenu.module.css";
import React, { useState } from "react";
import Link from "next/link";

export default function PortraitMenu() {
  const controls = useAnimation();
  const [isOpen, setIsOpen] = useState(false);

  const setState = () => {
    setIsOpen(!isOpen);
    isOpen ? controls.start(exit) : controls.start(enter);
  };

  const enter = {
    x: "-100%",
    transition: {
      duration: 0.3,
    },
  };
  const exit = {
    x: "0",
    transition: {
      duration: 0.3,
    },
  };

  const links = ["home", "about", "blog", "portfolio", "contact"];

  return (
    <>
      <MdMenu className={styles.portraitMenuButton} onClick={setState} />
      <motion.div
        animate={controls}
        className={styles.portraitMenuContainer}
      >
        <div className={styles.portraitMenu}>
          <MdClear
            className={styles.portraitMenuButton}
            onClick={setState}
          />
          <div className={styles.menu}>
            <h1 className={styles.menuTitle}>MENU</h1>
            {links.map((link) => (
              <span key={link}>
                <Link href={`/${link == "home" ? "" : link}`}>
                  <a>{link.toUpperCase()}</a>
                </Link>
              </span>
            ))}
          </div>
        </div>
        <div className={styles.portraitMenuOverlay} onClick={setState} />
      </motion.div>
    </>
  );
}
