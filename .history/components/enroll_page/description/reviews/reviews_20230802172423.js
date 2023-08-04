"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import styles from "./reviews.module.css";
import { AiFillStar } from "react-icons/ai";
import { getAuth } from "firebase/auth";
import Image from "next/image";

export default function ReviewsComponent() {
  const auth = getAuth();
  const [user, setUser] = useAuthState(auth);
  const reviews_list = [
    {
      reviewer_name: "John Doe",
      reviewer_rating: 4,
      reviewer_comment: "This is a comment",
      reviewer_image_link: user.photoURL,
    },
    {
      reviewer_name: "Lisa Rev",
      reviewer_rating: 4,
      reviewer_comment: "This is a comment",
      reviewer_image_link: user.photoURL,
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
                      <div className={styles.user_container_flex}>
                        <div className={styles.c1}>
                          <Image
                            src={review.reviewer_image_link}
                            className={styles.reviewer_image}
                            width={50}
                            height={50}
                            alt="user image"
                          ></Image>
                        </div>
                        <div>user rating</div>
                      </div>
                      <div className={styles.c2}>message with name</div>
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
