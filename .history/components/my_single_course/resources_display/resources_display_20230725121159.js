import styles from "./resources_display.module.css";

export default function ResourcesDisplay(course_data) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Resources Display</h2>
      <div>
        {course_data["resources"].map((resource, index) => {
          return (
          
          );
        })}
      </div>
    </div>
  );
}
