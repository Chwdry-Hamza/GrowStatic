"use client";

import Link from "next/link";
import styles from "../../styles/Navbar.module.scss";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">logoipsum</Link>
      </div>

      {/* Hamburger Toggler for Mobile */}
      <button
        className={styles.toggler}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}></span>
      </button>

      {/* Navigation Links */}
      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <li>
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/About" onClick={closeMenu}>
          Nulla
          </Link>
        </li>
        <li>
          <Link href="/Contact" onClick={closeMenu}>
          Viverra
          </Link>
        </li>
        <li>
          <Link href="/Services" onClick={closeMenu}>
            Accumsan
          </Link>
        </li>
        
      
      </ul>
    </nav>
  );
}