import styles from "./resources_display.module.css";

export default function ResourcesDisplay(course_resources) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Resources Display</h2>
      <div>{JSON.stringify(course_resources)}</div>
    </div>
  );
}
