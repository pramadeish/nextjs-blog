import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      
        <Link href="/blog/id" className={styles.container} >
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/17490216/pexels-photo-17490216/free-photo-of-road-landscape-summer-desert.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>test</h1>
            <p className={styles.desc}>test</p>
          </div>
        </Link>
        <Link href="" className={styles.container} >
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/17490216/pexels-photo-17490216/free-photo-of-road-landscape-summer-desert.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>test</h1>
            <p className={styles.desc}>test</p>
          </div>
        </Link>
        <Link href="" className={styles.container} >
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/17490216/pexels-photo-17490216/free-photo-of-road-landscape-summer-desert.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>test</h1>
            <p className={styles.desc}>test</p>
          </div>
        </Link>
      
    </div>
  )
}

export default Blog