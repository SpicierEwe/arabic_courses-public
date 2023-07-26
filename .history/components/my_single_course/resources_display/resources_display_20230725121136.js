import styles from "./resources_display.module.css";

export default function ResourcesDisplay(course_data) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Resources Display</h2>
      <div>
        {course_data["resources"].map((resource, index) => {
          return (
            <div key={index} className={styles.resource}>
              <h3 className={styles.resource_title}>{resource.title}</h3>
              <p className={styles.resource_description}>
                {resource.description}
              </p>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resource_link}
              >
                {resource.link}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
