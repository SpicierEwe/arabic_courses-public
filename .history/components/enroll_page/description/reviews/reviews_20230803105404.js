"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import styles from "./reviews.module.css";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { getAuth } from "firebase/auth";
import Image from "next/image";
import { useEffect, useState } from "react";

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

  const [selected_rating, set_selected_rating] = useState(0);

  const [stars, set_stars] = useState([]);

  useEffect(() => {
    const x = [];
    const filled_star = <AiFillStar className={styles.post_star_icon} />;
    const unfilled_icon = <AiOutlineStar className={styles.post_star_icon} />;
    for (let i = 0; i < selected_rating; i++) {
      x.push(filled_star);
    }
    for (let i = 0; i < 5 - selected_rating; i++) {
      x.push(unfilled_icon);
    }
    set_stars(x);
  }, [selected_rating]);

  return (
    <div className={styles.container}>
      <section>
        <h2 className={styles.section_heading}>Reviews</h2>

        <main>
          <div className={styles.entire_review_container}>
            <section className={styles.left_rating_container}>
              {/* global raiting */}

              <h3 className={styles.heading}>GLOBAL RATING</h3>
              <div className={styles.global_rating_count_container}>
                <AiFillStar className={styles.star_icon}></AiFillStar>
                <p className={styles.global_rating_count}>4.0</p>
              </div>

              {/* personal raiting */}

              <div className={styles.my_rating_container}>
                <h3 className={styles.heading}>YOUR RATING</h3>
                <div className={styles.my_rating_count_container}>
                  <AiFillStar
                    className={styles.my_raiting_star_icon}
                  ></AiFillStar>
                  <p className={styles.my_rating_count}>4.0</p>
                </div>

                <h3 className={styles.heading}>YOUR REVIEW</h3>
                <p className={styles.my_apos}>ˮ</p>
                <p className={styles.my_comment}>LOVED IT</p>

                {/* edit button */}

                <div className={styles.edit_review_button}>Edit Review</div>
              </div>
              {/*  */}
            </section>
            {/* =========================================================== */}
            {/* =========================================================== */}
            {/* =========================================================== */}
            {/* reviews container */}
            <div className={styles.reviews_container}>
              <h2 className={styles.review_container_title}>
                What reviewers are saying_
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
      {/* edit or update my reviw box */}

      <div className={styles.overlay_bg}>
        <div className={styles.my_post_review_container}>
          <h2 className={styles.heading}>POST REVIEW</h2>
          <div className={styles.main_content}>
            <div className={styles.post_rating_box_stars}>
              {stars.map((star, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      set_selected_rating(index + 1); // +1 because index starts from 0
                    }}
                  >
                    {star}
                  </div>
                );
              })}
              <p>4.0</p>
            </div>
            <textarea></textarea>
          </div>
        </div>
      </div>

      {/* <div className={styles.my_review_post_container}> sdf mn n</div> */}
    </div>
  );
}
