import styles from "./reviews.module.css";
import { AiFillStar } from "react-icons/ai";

export default function ReviewsComponent() {
  return (
    <div className={styles.container}>
      <section>
        <h1 className={styles.section_heading}>Reviews</h1>

        <main>
          <div className={styles.review_container}>
            <div>
              <AiFillStar className={styles.star_icon}>
                <p className={styles.global_rating}>4</p>
              </AiFillStar>
            </div>
            <div> conatiner 2 </div>
          </div>
        </main>
      </section>
    </div>
  );
}
