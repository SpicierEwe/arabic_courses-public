import styles from "./resources_display.module.css";
import { FaReadme } from "react-icons/fa";
import { AiFillRead } from "react-icons/ai";

export default function ResourcesDisplay({ course_resources }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Resources Display</h2>
      <div className={styles.resource_container}>
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
                <div className={styles.resource_author}>{resource.author}</div>
              </div>
            </div>
          );
        })}
        <div>
          <p>
            Lorem ipsum dolor sit amet. Non maxime quibusdam eum laborum
            explicabo ut temporibus doloremque aut galisum unde ut cumque maxime
            in dolorum ratione! Rem quisquam eveniet vel doloremque molestiae
            sed cumque deleniti ut vitae tempore et quasi nulla et repellat
            quia. Qui perspiciatis quas ut facilis expedita qui omnis quia qui
            omnis omnis qui rerum veritatis. Sit quae ullam et natus aliquid qui
            rerum dolores.{" "}
          </p>
          <br>
            Cum officia deserunt qui dolores quia quo repudiandae molestiae eos
            distinctio tempore et asperiores voluptas et quam magnam sit
            temporibus ipsum. Sed dolorum explicabo est consectetur nobis ex
            omnis asperiores sed esse omnis.{" "}
          </br>
          <br>
            Ut maiores libero sit accusamus soluta et consequatur quae. Sed
            velit ducimus eum cumque sunt 33 dolorem libero est nisi itaque est
            quam atque eum aperiam eveniet et saepe tempore.{" "}
          </br>
        </div>
      </div>
    </div>
  );
}
