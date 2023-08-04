"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import styles from "./reviews.module.css";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { getAuth } from "firebase/auth";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { VideoPlayerContext } from "@/Context/global_context_provider";
import { v4 as uuidv4 } from "uuid";
import {
  getDatabase,
  ref,
  set,
  update,
  push,
  child,
  get,
} from "firebase/database";

const dbRef = ref(getDatabase());
export default function ReviewsComponent({ course_id }) {
  const auth = getAuth();
  const [user, setUser] = useAuthState(auth);
  const ctx = useContext(VideoPlayerContext);

  const [selected_rating, set_selected_rating] = useState(0);

  const [my_temp_review_data, set_my_temp_review_data] = useState({});
  const [is_overlay_visible, set_is_overlay_visible] = useState(false);

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
  }, [my_temp_review_data.reviewer_rating]);

  //   =============================================
  //   =============================================
  //   fetch all reviews
  //   =============================================
  //   =============================================
  const [all_reviews, set_all_reviews] = useState([]);
  useEffect(() => {
    get(child(dbRef, `courses/${course_id}/reviews`))
      .then((reviews_snapshot) => {
        if (reviews_snapshot.exists()) {
          const data = reviews_snapshot.val();
          const x = [];
          for (const [key, value] of Object.entries(data)) {
            // getting userid from review data
            const user_id = value.reviewer_id;
            // reviewer_data
            // fetching user data from the userid got from review data
            get(child(dbRef, `users/${user_id}/user_info`)).then(
              (reviewer_data_snapshot) => {
                const user_data = reviewer_data_snapshot.val();

                // merging user data and review data
                const final_data = {
                  ...value,
                  ...user_data,
                };

                // finally pushing the merged data to the array
                x.push(final_data);
              }
            );
          }
          //   now setting the state
          set_all_reviews(x);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //   =============================================
  //   FETCHING MY REVIEW
  //   =============================================
  //   check if user has already reviewed this course
  //   if enrolled then fetching the review by using the review id saved    under user's reviewed courses
  //   =============================================
  //   =============================================
  const [is_course_reviewed, set_is_course_reviewed] = useState(false);

  const [my_review_data, set_my_review_data] = useState({});

  useEffect(() => {
    get(
      child(
        dbRef,
        `/users/${user.uid}/reviewed_courses/${course_id}/review_id/id`
      )
    )
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          get(child(dbRef, `courses/${course_id}/reviews/${data}`)).then(
            (snapshot) => {
              if (snapshot.exists()) {
                const data = snapshot.val();
                set_selected_rating(data.reviewer_rating);
                set_my_review_data(data);
              }
            }
          );
        } else {
          set_is_course_reviewed(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //   =============================================
  //   =============================================
  //   test submit review
  const x = () => {
    const randomId = uuidv4();

    const new_global_review_format = {
      [randomId]: {
        review_id: randomId,
        reviewer_rating: 4,
        reviewer_comment: "This course is all that you need.",
        reviewer_id: user.uid,
      },
    };
    const new_personal_review_format = {
      id: randomId,
    };

    // sent to global reviews list;
    update(
      child(dbRef, `courses/${course_id}/reviews`),
      new_global_review_format
    );

    // sent to personal reviews list

    update(
      child(
        dbRef,
        `/users/${user.uid}/reviewed_courses/${course_id}/review_id`
      ),
      new_personal_review_format
    );
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.edit_review_button}
        onClick={() => {
          x();
        }}
      >
        Submit
      </div>
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

              {/* =============================== */}
              {/* personal raiting */}

              <div className={styles.my_rating_container}>
                <h3 className={styles.heading}>YOUR RATING</h3>
                <div className={styles.my_rating_count_container}>
                  <AiFillStar
                    className={styles.my_raiting_star_icon}
                  ></AiFillStar>
                  {/* my rating */}
                  <p className={styles.my_rating_count}>
                    {my_review_data.reviewer_rating}
                  </p>
                </div>

                <h3 className={styles.heading}>YOUR REVIEW</h3>
                <p className={styles.my_apos}>ˮ</p>
                {/* my review comment */}
                <p className={styles.my_comment}>
                  {my_review_data.reviewer_comment}
                </p>

                {/* edit button */}

                <div
                  className={styles.edit_review_button}
                  onClick={() => {
                    set_is_overlay_visible(true);
                  }}
                >
                  Edit Review
                </div>
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
                {all_reviews.map((review, index) => {
                  return (
                    <div key={index} className={styles.flex}>
                      <div className={styles.user_container_flex}>
                        {/* c1 */}
                        <div className={styles.review_container_c1}>
                          <Image
                            src={review.image_link}
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
                        <p className={styles.user_name}>— {review.name}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* =============================================== */}
      {/* =============================================== */}
      {/* edit or update my reviw box overLay */}
      {/* =============================================== */}
      {/* =============================================== */}

      {/*  */}
      <div
        className={`${
          is_overlay_visible ? styles.over_lay_visible : styles.over_lay_hidden
        }`}
      >
        <div
          className={`${styles.overlay_bg} `}
          onClick={() => {
            set_is_overlay_visible(false);
          }}
        ></div>
        <div className={styles.my_post_review_container}>
          <h2 className={styles.heading}>POST REVIEW</h2>
          <div className={styles.main_content}>
            <div className={styles.post_container_rating_box}>
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
              </div>
              <p>{selected_rating}.0</p>
            </div>

            <div className={styles.textarea_container}>
              <textarea
                value={my_review_data.reviewer_comment}
                inputMode="text"
                className={styles.modern_textarea}
                placeholder="Type your review here"
              ></textarea>
            </div>

            {/* this is the over lay button */}
            <div
              className={styles.edit_review_button}
              onClick={() => {
                set_is_overlay_visible(false);
                ctx.set_display_notification({
                  display: true,
                  message: "Review posted successfully",
                });
              }}
            >
              SUBMIT REVIEW
            </div>
          </div>
        </div>

        {/* <div className={styles.my_review_post_container}> sdf mn n</div> */}
      </div>
    </div>
  );
}
