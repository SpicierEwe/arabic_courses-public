import styles from "./all_courses.module.css";

export function AllCourses() {
  return (
    <main>
      <grid>
        <div>
          <h2 className={styles.title}>Course 1</h2>
          <p>Course 1 description</p>
        </div>
      </grid>
    </main>
  );
}
