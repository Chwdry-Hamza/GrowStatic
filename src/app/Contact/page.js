"use client";

import styles from "../../styles/Contact.module.scss";
import Navbar from "../Navbar/page";
import Footer from "../Footer/page";

export default function Contact() {
  const blogPosts = [
    {
      date1: "May 27, 2021",
      tag: "Lorems",
      tagColor: "green",
      title: "Cras non tempus nisi. Suspendisse vestibulum nisi sed feugiat viverra.",
      date2: "May 21, 2021",
      image: "/images/images.jpg",
      alt: "Man writing in notebook",
    },
    {
      date1: "May 24, 2021",
      image: "/images/images.jpg",
      alt: "Woman writing and smiling",
      tag: "Lorem morbi",
      tagColor: "blue",
      title: "Praesent tristique augue et urna aliquam, non pellentesque neque tincidunt aliquam finibus urna et consectetur",
      date2: "May 16, 2021",
    },
    {
      date1: "May 24, 2021",
      image: "/images/images.jpg",
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
      date2: "May 21, 2021",
      image: "/images/images.jpg",
      alt: "Man writing in notebook",
    },
  ];

  return (
    <div className={styles.contactContainer}>
      <Navbar />
      <div className={styles.contactContent}>
        <h1>Lorem ipsum dolor</h1>
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
      </div>
      <Footer />
    </div>
  );
}