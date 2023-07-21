import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://images.unsplash.com/photo-1604778368096-1ef9ada56c0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3MlMjBhbmQlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
          fill={true}
          alt=""
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Posts</h1>
          <h2 className={styles.imgDesc}>Greatest digital experience</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who we are?</h1>
          <p className={styles.desc}>etc.....</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do</h1>
          <p className={styles.desc}>etc2.....</p>
          <Button url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  );
};

export default About;
