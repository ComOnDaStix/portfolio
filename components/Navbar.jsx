import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navContainer}>
        <div className={styles.Nav}>
          <Link href="/" className={styles.link}>
            <li className={styles.li}>Home</li>
          </Link>
        </div>
        <span className={styles.separator}>|</span>
        <div className={styles.Nav}>
          <Link href="/Resume" className={styles.link}>
            <li className={styles.li}>Resume</li>
          </Link>
        </div>
        <span className={styles.separator}>|</span>
        <div>
          <Link href="/Projects" className={styles.link}>
            <li className={styles.li}>Projects</li>
          </Link>
        </div>
        <span className={styles.separator}>|</span>
        <div>
          <Link href="/Contact" className={styles.link}>
            <li className={styles.li}>Contact</li>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
