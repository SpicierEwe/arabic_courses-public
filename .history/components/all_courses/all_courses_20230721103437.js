import Image from "next/image";
import styles from "./all_courses.module.css";

export function AllCourses() {
  return (
    <main className={styles.container}>
      <grid className={styles.grid}>
        <div className={styles.card}>
          <Image
            className={styles.image}
            src="/images/mma.jpg"
            alt="Picture of the author"
            width={1000}
            height={1000}
          ></Image>
          <p>offered by</p>
          <p>AbdurRahman.org</p>
          <h2 className={styles.title}>Mastering Madina Arbic</h2>
          <p>
            Outcome : It helps acquire an understanding of hundreds of Qur’anic
            verses, ahadith, Arabic parables and poetry.
          </p>
        </div>
      </grid>
    </main>
  );
}
