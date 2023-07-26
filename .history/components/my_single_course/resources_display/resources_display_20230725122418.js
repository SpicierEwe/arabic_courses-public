import styles from "./resources_display.module.css";

export default function ResourcesDisplay({ course_resources }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Resources Display</h2>
      <div>
        {course_resources.map((resource, index) => {
          return (
            <div key={index} className={styles.resource}>
              <div className={styles.resource_title}>
                {resource.resource_name}
              </div>
              <div className={styles.resource_type}>
                {resource.resource_type}
              </div>
              <div className={styles.resource_link}>
                {resource.resource_link}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
