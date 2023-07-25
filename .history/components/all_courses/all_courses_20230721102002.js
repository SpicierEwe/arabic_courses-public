import Image from "next/image";
import styles from "./all_courses.module.css";

export function AllCourses() {
  return (
    <main>
      <grid>
        <div>
          <Image></Image>
          <h2 className={styles.title}>Course 1</h2>
          <p>Course 1 description</p>
        </div>
      </grid>
    </main>
  );
}
