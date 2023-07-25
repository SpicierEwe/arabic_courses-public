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
          <div className={styles.info_container}>
            <div className={styles.author_info}>
              <p>offered by</p>
              <h2>AbdurRahman.org</h2>
            </div>
            <div>
              <h2 className={styles.title}>Mastering Madina Arbic</h2>
              <p>
                Outcome : It helps acquire an understanding of hundreds of
                Qur’anic verses, ahadith, Arabic parables and poetry.
              </p>

              <p>beginner to advanced - 3-6 months</p>
            </div>
          </div>
        </div>
      </grid>
    </main>
  );
}
