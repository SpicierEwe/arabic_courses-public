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
            <div className={styles.author_info_container}>
              <p>offered by</p>
              <h2>AbdurRahman.org</h2>
            </div>
            <div className={styles.sub_info_container}>
              <h2 className={styles.title}>Mastering Madina Arabic</h2>
              <p className={styles.outcome_container}>
                <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
                  {" "}
                  Outcome :{" "}
                </span>{" "}
                It helps acquire an understanding of hundreds of Qur’anic
                verses, ahadith, Arabic parables and poetry.
              </p>
            </div>
            <p className={styles.difficulty_and_duration}>
              beginner to advanced - selfpace / 3-6 months
            </p>
            <AiOutlineStar></AiOutlineStar>
          </div>
        </div>
      </grid>
    </main>
  );
}
