import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>testTitle</h1>
          <p className={styles.desc}>
            test
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/17490216/pexels-photo-17490216/free-photo-of-road-landscape-summer-desert.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>testUser</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/17490216/pexels-photo-17490216/free-photo-of-road-landscape-summer-desert.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         test
        </p>
      </div>
    </div>
  )
}

export default BlogPost