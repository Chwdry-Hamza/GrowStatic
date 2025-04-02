"use client";

import Link from "next/link";
import styles from "../../styles/About.module.scss"; // New SCSS file for About page
import Navbar from "../Navbar/page";
import Footer from "../Footer/page";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <Navbar />
      <div className={styles.aboutContent}>
        <h1>Fusce tempus</h1>
        <div className={styles.infoSection}>
          <h2>Fusce tempus, tellus eget lobortis gravida.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
          <Link href="/learn-more" className={styles.infoButton}>
            <span>Lorem ipsum dolor</span>
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}