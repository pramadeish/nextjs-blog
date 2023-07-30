import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better do it now or never.</h1>
        <p className={styles.desc}>
          Turn your Ideas into Reality.The Blogs to share your ideas globally
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image className={styles.img} src={Hero} alt=""/>
      </div>
    </div>
  );
}
