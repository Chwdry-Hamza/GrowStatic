"use client";

import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { useState, useEffect, useRef } from "react";
import Footer from "./Footer/page";
import Navbar from "./Navbar/page";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 5; // Display 5 cards at a time
  const totalCards = 9;
  // Correctly type autoScrollRef to hold a NodeJS.Timeout or null
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  // Blog posts data
  const blogPosts = [
    {
      date1: "May 27, 2021",
      tag: "Lorems",
      tagColor: "green",
      title: "Cras non tempus nisi. Suspendisse vestibulum nisi sed feugiat viverra.",
      image: "/images/Bcards.png",
      alt: "Man writing in notebook",
      date2: "May 21, 2021",
    },
    {
      date1: "May 24, 2021",
      image: "/images/Bcards1.png",
      alt: "Woman writing and smiling",
      tag: "Lorem morbi",
      tagColor: "blue",
      title: "Praesent tristique augue et urna aliquam, non pellentesque neque tincidunt aliquam finibus urna et consectetur",
      date2: "May 16, 2021",
    },
    {
      date1: "May 24, 2021",
      image: "/images/Bcards1.png",
      alt: "Woman writing and smiling",
      tag: "Lorem morbi",
      tagColor: "blue",
      title: "Praesent tristique augue et urna aliquam, non pellentesque neque tincidunt aliquam finibus urna et consectetur",
      date2: "May 16, 2021",
    },
    {
      date1: "May 27, 2021",
      tag: "Lorems",
      tagColor: "green",
      title: "Cras non tempus nisi. Suspendisse vestibulum nisi sed feugiat viverra.",
      image: "/images/Bcards.png",
      alt: "Man writing in notebook",
      date2: "May 21, 2021",
    },
  ];

  const cards = [
    {
      tag: "Lorem morbi",
      title: "Vestibulum nec tempor elit. Duis porta quam mauris, id dapibus urna laoreet eu.",
      image: "/images/cardimg1.png",
      date: "May 27, 2021",
    },
    {
      tag: "Lorems",
      title: "Nulla porttitor eros nisi, ut semper nunc sagittis vel. Nulla nec tellus sagittis, pulvinar tortor id.",
      image: "/images/cardimg2.png",
      date: "May 24, 2021",
    },
    {
      tag: "Lorems",
      title: "Cras non tempus nisi. Suspendisse vestibulum nisi sed feugiat viverra.",
      image: "/images/cardimg3.png",
      date: "May 21, 2021",
    },
    {
      tag: "Lorem ipsum",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/images/cardimg4.png",
      date: "May 18, 2021",
    },
    {
      tag: "Lorems",
      title: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/cardimg1.png",
      date: "May 15, 2021",
    },
    {
      tag: "Lorem morbi",
      title: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: "/images/cardimg2.png",
      date: "May 12, 2021",
    },
    {
      tag: "Lorem morbi",
      title: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: "/images/cardimg3.png",
      date: "May 12, 2021",
    },
    {
      tag: "Lorem morbi",
      title: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: "/images/cardimg4.png",
      date: "May 12, 2021",
    },
    {
      tag: "Lorem morbi",
      title: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: "/images/cardimg1.png",
      date: "May 12, 2021",
    },
  ];

  // Function to start auto-scroll
  const startAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current); // Clear any existing interval
    }
    autoScrollRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    }, 5000); // 5000ms = 5 seconds
  };

  // Start auto-scroll on component mount
  useEffect(() => {
    startAutoScroll();

    // Cleanup interval on component unmount
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, []);

  // Handle manual navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    // Pause auto-scroll on user interaction and resume after 10 seconds
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    setTimeout(() => {
      startAutoScroll();
    }, 10000); // Resume after 10 seconds
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
    // Pause auto-scroll on user interaction and resume after 10 seconds
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    setTimeout(() => {
      startAutoScroll();
    }, 10000); // Resume after 10 seconds
  };

  // Compute the visible cards in a circular manner
  const visibleCards = Array.from({ length: cardsPerPage }, (_, i) => {
    const index = (currentIndex + i) % totalCards;
    return cards[index];
  });

  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <div className={styles.heroContent}>
        <div className={styles.contentWrapper}>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <Link href="/" className={styles.heroButton}>
            <span>Lorem ipsum dolor</span>
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </div>

      {/* Info Section */}
      <div className={styles.infoSection}>
        <h2>
          Fusce tempus, tellus eget lobortis gravida.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
        <Link href="/" className={styles.infoButton}>
          <span>Lorem ipsum dolor</span>
          <span className={styles.arrow}>→</span>
        </Link>
      </div>

      {/* Blog Posts Section */}
      <div className={styles.blogSection}>
        <h3 className={styles.blogTitle}>Lorem ipsum dolor</h3>
        <div className={styles.blogContainer}>
          {blogPosts.map((post, index) => (
            <div key={index} className={styles.post}>
              <p className={styles.date}>{post.date1}</p>
              <span
                className={`${styles.tag} ${
                  post.tagColor === "green" ? styles.green : styles.blue
                }`}
              >
                {post.tag}
              </span>
              <h2 className={styles.title}>{post.title}</h2>
              <p className={styles.date}>{post.date2}</p>
              <img
                src={post.image}
                alt={post.alt}
                className={styles.postImage}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Cards Section */}
      <div className={styles.cardsSection}>
        <h3 className={styles.cardsTitle}>Lorem ipsum dolor</h3>
        <div className={styles.cardsWrapper}>
          <button onClick={handlePrev} className={styles.navButton}>
            ←
          </button>
          <div className={styles.cardsContainer}>
            <div
              className={styles.cardsInner}
              style={{
                transform: `translateX(-${currentIndex * 260}px)`, // 260px = card width (250px) + gap (10px)
                transition: "transform 0.5s ease",
              }}
            >
              {/* Duplicate cards for seamless looping */}
              {[...cards, ...cards].map((card, index) => (
                <div key={index} className={styles.card}>
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
          </div>
          <button onClick={handleNext} className={styles.navButton}>
            →
          </button>
        </div>
        <Link href="/" className={styles.viewMoreButton}>
          <span>Lorem ipsum dolor</span>
          <span className={styles.arrow}>→</span>
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}