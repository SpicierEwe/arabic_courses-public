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
          <h2 className={styles.title}>Course 1</h2>
          <p>Course 1 description</p>
        </div>
      </grid>
    </main>
  );
}
