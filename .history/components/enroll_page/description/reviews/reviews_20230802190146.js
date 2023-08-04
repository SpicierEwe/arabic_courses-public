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
      reviewer_comment: "This course is all that you need.",
      reviewer_image_link: user.photoURL,
    },
    {
      reviewer_name: "Lisa Rev",
      reviewer_rating: 4,
      reviewer_comment: "This course willtakee you places",
      reviewer_image_link: user.photoURL,
    },
    {
      reviewer_name: "John Doe",
      reviewer_rating: 4,
      reviewer_comment: "This course is all that you need.",
      reviewer_image_link: user.photoURL,
    },
    {
      reviewer_name: "Lisa Rev",
      reviewer_rating: 4,
      reviewer_comment: "This course willtakee you places",
      reviewer_image_link: user.photoURL,
    },
  ];

  return (
    <div className={styles.container}>
      <section>
        <h2 className={styles.section_heading}>Reviews</h2>

        <main>
          <div className={styles.entire_review_container}>
            <section className={styles.left_rating_container}>
              {/* global raiting */}
              <div className={styles.global_rating_count_container}>
                <AiFillStar className={styles.star_icon}></AiFillStar>.
                <p className={styles.global_rating_count}>4.0</p>
              </div>

              {/* personal raiting */}

              <div>
                <h3 className={styles.my_rating}>YOUR RAITING</h3>
              </div>
            </section>
            {/* =========================================================== */}
            {/* =========================================================== */}
            {/* =========================================================== */}
            {/* reviews container */}
            <div className={styles.reviews_container}>
              <h2 className={styles.review_container_title}>
                What reviewers are saying
              </h2>

              {/* right container grid */}
              <div className={styles.grid}>
                {reviews_list.map((review, index) => {
                  return (
                    <div key={index} className={styles.flex}>
                      <div className={styles.user_container_flex}>
                        {/* c1 */}
                        <div className={styles.review_container_c1}>
                          <Image
                            src={review.reviewer_image_link}
                            className={styles.reviewer_image}
                            width={50}
                            height={50}
                            alt="user image"
                          ></Image>
                        </div>
                        <div>
                          {/* user raiting container */}
                          <div className={styles.user_rating_container}>
                            <AiFillStar
                              className={styles.user_container_star_icon}
                            ></AiFillStar>

                            <p className={styles.user_review_number}>
                              {review.reviewer_rating}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* user comment */}
                      <div className={styles.review_container_c2}>
                        <p className={styles.apos}>ˮ</p>
                        <p className={styles.user_comment}>
                          {review.reviewer_comment}
                        </p>
                        <p className={styles.user_name}>
                          — {review.reviewer_name}
                        </p>
                      </div>
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
