"use client";

import styles from "../../styles/Footer.module.scss";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Logoipsum Text */}
        <div className={styles.footerLogo}>
          <span className={styles.logoText}>logoipsum</span>
        </div>

        {/* Up Arrow */}
        <button onClick={scrollToTop} className={styles.scrollToTop}>
          <span className={styles.arrow}>↑</span>
        </button>
      </div>
    </footer>
  );
}