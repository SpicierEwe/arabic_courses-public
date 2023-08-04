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
      reviewer_comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend condimentum quam, vel porta lacus tempor et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
      reviewer_image_link: user.photoURL,
    },
    {
      reviewer_name: "Lisa Rev",
      reviewer_rating: 4,
      reviewer_comment:
        "posuere cubilia curae; Fusce faucibus malesuada elit, sed dictum risus ultrices et. Quisque dapibus nec est sit amet commodo. In a eleifend dui. Morbi tempor ultricies quam et varius. Duis tempor, enim ut fringilla ornare, urna tellus malesuada nibh, vitae scelerisque velit lacus id felis. Vestibulum posuere eleifend felis",
      reviewer_image_link: user.photoURL,
    },
    {
      reviewer_name: "John Doe",
      reviewer_rating: 4,
      reviewer_comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend condimentum quam, vel porta lacus tempor et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
      reviewer_image_link: user.photoURL,
    },
    {
      reviewer_name: "Lisa Rev",
      reviewer_rating: 4,
      reviewer_comment:
        "posuere cubilia curae; Fusce faucibus malesuada elit, sed dictum risus ultrices et. Quisque dapibus nec est sit amet commodo. In a eleifend dui. Morbi tempor ultricies quam et varius. Duis tempor, enim ut fringilla ornare, urna tellus malesuada nibh, vitae scelerisque velit lacus id felis. Vestibulum posuere eleifend felis",
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
              <h2 className={styles.review_container_title}>
                What reviewers are saying
              </h2>

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
                        <p className={styles.user_comment}>
                          {review.reviewer_comment}
                        </p>
                        <p className={styles.user_name}></p>
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
