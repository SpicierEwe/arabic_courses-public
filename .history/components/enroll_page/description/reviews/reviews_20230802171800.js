import styles from "./reviews.module.css";
import { AiFillStar } from "react-icons/ai";

export default function ReviewsComponent() {
  const reviews_list = [
    {
      reviewer_name: "John Doe",
      reviewer_rating: 4,
      reviewer_comment: "This is a comment",
      reviewer_image_link: "",
    },
    {
      reviewer_name: "Lisa Rev",
      reviewer_rating: 4,
      reviewer_comment: "This is a comment",
      reviewer_image_link: "",
    },
  ];

  return (
    <div className={styles.container}>
      <section>
        <h2 className={styles.section_heading}>Reviews</h2>

        <main>
          <div className={styles.entire_review_container}>
            <div className={styles.global_rating_container}>
              <AiFillStar className={styles.star_icon}></AiFillStar>

              <p className={styles.global_rating_count}>4</p>
            </div>
            <div className={styles.reviews_container}>
              <h2 className={styles.review_container_message}>
                What reviewers are saying
              </h2>

              <div className={styles.grid}>
                {reviews_list.map((review, index) => {
                  return (
                    <div key={index} className={styles.flex}>
                      <div>
                        <div>user image</div>
                        <div>user rating</div>
                      </div>
                      <div>message with name</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
