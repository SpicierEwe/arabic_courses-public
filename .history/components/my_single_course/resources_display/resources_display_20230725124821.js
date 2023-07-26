import styles from "./resources_display.module.css";
import { FaReadme } from "react-icons/fa";

export default function ResourcesDisplay({ course_resources }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Resources Display</h2>
      <div className={styles.resource_container}>
        {course_resources.map((resource, index) => {
          return (
            <div key={index} className={styles.resource_item_container}>
              <FaReadme size={25} className={styles.book_icon} />

              <div className={styles.right_container}>
                <div className={styles.resource_title}>
                  {resource.resource_name}
                </div>
                <div className={styles.resource_author}>{resource.author}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
