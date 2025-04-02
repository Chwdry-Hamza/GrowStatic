"use client";
import Navbar from "../Navbar/page";
import styles from "../../styles/services.module.scss";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from "../Footer/page";

export default function Services() {
    const cards = [
        {
          tag: "Lorem morbi",
          title: "Vestibulum nec tempor elit. Duis porta quam mauris, id dapibus urna laoreet eu.",
          image: "/images/images.jpg",
          date: "May 27, 2021",
        },
        {
          tag: "Lorems",
          title: "Nulla porttitor eros nisi, ut semper nunc sagittis vel. Nulla nec tellus sagittis, pulvinar tortor id.",
          image: "/images/images.jpg",
          date: "May 24, 2021",
        },
        {
          tag: "Lorems",
          title: "Cras non tempus nisi. Suspendisse vestibulum nisi sed feugiat viverra.",
          image: "/images/images.jpg",
          date: "May 21, 2021",
        },
        {
          tag: "Lorem ipsum",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          image: "/images/images.jpg",
          date: "May 18, 2021",
        },
        {
          tag: "Lorems",
          title: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: "/images/images.jpg",
          date: "May 15, 2021",
        },
        {
          tag: "Lorem morbi",
          title: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
          image: "/images/images.jpg",
          date: "May 12, 2021",
        },
        {
          tag: "Lorem morbi",
          title: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
          image: "/images/images.jpg",
          date: "May 12, 2021",
        },
        {
          tag: "Lorem morbi",
          title: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
          image: "/images/images.jpg",
          date: "May 12, 2021",
        },
        {
          tag: "Lorem morbi",
          title: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
          image: "/images/images.jpg",
          date: "May 12, 2021",
        },
      ];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Determine cards per page based on screen size
  const getCardsPerPage = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768 ? 1 : 3; // 1 card on mobile, 3 on larger screens
    }
    return 3; // Default for SSR
  };

  const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage());
  
  useEffect(() => {
    const handleResize = () => {
      setCardsPerPage(getCardsPerPage());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalCards = cards.length;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + cardsPerPage < totalCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const visibleCards = cards.slice(currentIndex, currentIndex + cardsPerPage);

  return (
    <div>
      <Navbar />
      <h1>Services Page</h1>
      
      <div className={styles.cardsSection}>
        <h3 className={styles.cardsTitle}>Our Premium Services</h3>
        <div className={styles.cardsWrapper}>
          <button
            onClick={handlePrev}
            className={`${styles.navButton} ${currentIndex === 0 ? styles.disabled : ""}`}
          >
            <span className={styles.navIcon}>←</span>
          </button>
          <div className={styles.cardsContainer}>
            {visibleCards.map((card, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardOverlay}></div>
                <div className={styles.cardTag}>{card.tag}</div>
                <img
                  src={card.image}
                  alt={`Card Image ${index + 1}`}
                  className={styles.cardImage}
                />
                <div className={styles.cardContent}>
                  <h4>{card.title}</h4>
                  <span className={styles.cardDate}>{card.date}</span>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleNext}
            className={`${styles.navButton} ${
              currentIndex + cardsPerPage >= totalCards ? styles.disabled : ""
            }`}
          >
            <span className={styles.navIcon}>→</span>
          </button>
        </div>
        <Link href="/" className={styles.viewMoreButton}>
          <span>Discover More</span>
          <span className={styles.arrow}>→</span>
        </Link>
      </div>
      <Footer/>
    </div>
  );
}