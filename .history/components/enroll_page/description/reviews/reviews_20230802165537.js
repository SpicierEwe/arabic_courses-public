import styles from "./reviews.module.css";
import { AiFillStar } from "react-icons/ai";

export default function ReviewsComponent() {
  return (
    <div className={styles.container}>
      <section>
        <h1 className={styles.section_heading}>Reviews</h1>

        <main>
          <div className={styles.mainreview_container}>
            <div className={styles.global_rating_container}>
              <AiFillStar className={styles.star_icon}></AiFillStar>

              <p className={styles.global_rating}>4</p>
            </div>
            <div className={styles.reviews_container}> conatiner 2 </div>
          </div>
        </main>
      </section>
    </div>
  );
}
