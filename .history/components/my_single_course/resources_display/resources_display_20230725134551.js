import styles from "./resources_display.module.css";
import { FaReadme } from "react-icons/fa";
import { AiFillRead } from "react-icons/ai";

export default function ResourcesDisplay({ course_resources }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Resources Display</h2>
      <div className={styles.resource_container}>
        <div className={styles.resource_items_container}>
          {course_resources.map((resource, index) => {
            return (
              <div key={index} className={styles.resource_item_container}>
                <div className={styles.book_icon_container}>
                  <AiFillRead className={styles.book_icon} />{" "}
                </div>

                <div className={styles.right_container}>
                  <div className={styles.resource_title}>
                    {resource.resource_name}
                  </div>
                  <div className={styles.resource_author}>
                    {resource.author}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <p className={styles.quick_note}>
            These are the resources that are available for this course. And wil
            be used throughtout the course. So be sure to check them out.
            <br>
              The solutions for the text books are provided in the resources
              section, also the answer keys for the workbooks are also provided.
            </br>
          </p>
        </div>
      </div>
    </div>
  );
}
