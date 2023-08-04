import styles from "./reviews.module.css";
import { AiFillStar } from "react-icons/ai";

export default function ReviewsComponent() {
  return (
    <div className={styles.container}>
      <section>
        <h2 className={styles.section_heading}>Reviews</h2>

        <main>
          <div className={styles.entire_review_container}>
            <div className={styles.global_rating_container}>
              <AiFillStar className={styles.star_icon}></AiFillStar>

              <p className={styles.global_rating}>4</p>
            </div>
            <div className={styles.reviews_container}>
              <h2 className={styles.review_container_message}>
                What reviews are saying
              </h2>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
