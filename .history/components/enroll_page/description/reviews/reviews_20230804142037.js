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
  query,
  orderByKey,
  limitToLast,
  onValue,
  orderByChild,
} from "firebase/database";

const dbRef = ref(getDatabase());
export default function ReviewsComponent({ course_id, isEnrolled }) {
  const auth = getAuth();
  const [user, setUser] = useAuthState(auth);
  const ctx = useContext(VideoPlayerContext);

  const [my_temp_review_data, set_my_temp_review_data] = useState({
    reviewer_rating: 0,
    reviewer_review: "",
  });
  const [is_overlay_visible, set_is_overlay_visible] = useState(false);

  const [stars, set_stars] = useState([]);

  useEffect(() => {
    const x = [];
    const filled_star = <AiFillStar className={styles.post_star_icon} />;
    const unfilled_icon = <AiOutlineStar className={styles.post_star_icon} />;
    for (let i = 0; i < my_temp_review_data.reviewer_rating; i++) {
      x.push(filled_star);
    }
    for (let i = 0; i < 5 - my_temp_review_data.reviewer_rating; i++) {
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
    // fetch only 5 reviews from the databse

    const reviewsQuery = query(
      ref(getDatabase(), `courses/${course_id}/reviews`),
      orderByChild("created_at"),
      limitToLast(4)
    );

    onValue(reviewsQuery, (reviews_snapshot) => {
      // get(child(dbRef, `courses/${course_id}/reviews`))
      //   .then((reviews_snapshot) => {
      if (reviews_snapshot.exists()) {
        const data = reviews_snapshot.val();

        // z will contain the reversed data
        const z = [];

        // reversing the data
        for (let x = Object.keys(data).length; x > 0; x--) {
          const key = Object.keys(data)[x - 1];
          const value = data[key];
          z.push(value);
        }

        console.log(z);

        const x = [];
        z.map((value, index) => {
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
        });
        //   now setting the state
        set_all_reviews(x);
      } else {
        console.log("No data available");
      }
    }),
      (error) => {
        console.error(error);
      };
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

          set_is_course_reviewed(true);

          //   fetching review data from the review id got from the user's reviewed courses
          get(child(dbRef, `courses/${course_id}/reviews/${data}`)).then(
            (snapshot) => {
              if (snapshot.exists()) {
                const data = snapshot.val();
                if (data != undefined) {
                  set_my_review_data(data);
                  set_my_temp_review_data(data);
                }
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
  const submit_review = () => {
    const randomId = uuidv4();

    // if (is_course_reviewed) {
    //   // update review
    //   update_review();
    // } else
    {
      //
      const new_global_review_format = {
        [randomId]: {
          review_id: randomId,
          reviewer_rating: my_temp_review_data.reviewer_rating,
          reviewer_comment: my_temp_review_data.reviewer_comment,
          reviewer_id: user.uid,
          created_at: new Date().toISOString(),
          updated_at: "",
        },
      };
      //
      const new_personal_review_format = {
        id: randomId,
      };

      // sent to global reviews list;
      update(
        child(dbRef, `courses/${course_id}/reviews`),
        new_global_review_format
      );

      // sent to personal reviews list
      //   only review id is sent to the personal reviews list because the review data is already sent to the global reviews list and we can fetch it from there

      update(
        child(
          dbRef,
          `/users/${user.uid}/reviewed_courses/${course_id}/review_id`
        ),
        new_personal_review_format
      );

      //   this is to update the review data in the state so that the updated review is shown in the UI without refetching the updated review from the database
      set_my_review_data(new_global_review_format[randomId]);
    }
  };

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

              {/* =============================== */}
              {/* personal raiting */}
              {/* =============================== */}

              {/* only allow the enrolled users to review the course*/}
              {isEnrolled ? (
                <div className={styles.my_rating_container}>
                  <h3 className={styles.heading}>YOUR RATING</h3>
                  <div className={styles.my_rating_count_container}>
                    <AiFillStar
                      className={styles.my_raiting_star_icon}
                    ></AiFillStar>
                    {/* my rating */}
                    {is_course_reviewed ? (
                      <p className={styles.my_rating_count}>
                        {my_review_data.reviewer_rating}
                      </p>
                    ) : (
                      <p className={styles.placeholder_text}>not rated yet</p>
                    )}
                  </div>

                  <h3 className={styles.heading}>YOUR REVIEW</h3>
                  <p className={styles.my_apos}>ˮ</p>

                  {/* my review comment */}
                  {is_course_reviewed ? (
                    <p className={styles.my_comment}>
                      {my_review_data.reviewer_comment}
                    </p>
                  ) : (
                    <p
                      style={{ paddingTop: "1rem" }}
                      className={styles.placeholder_text}
                    >
                      You have&apos;nt reviewd this course yet
                    </p>
                  )}

                  {/* edit button */}

                  <div
                    className={styles.edit_review_button}
                    onClick={() => {
                      set_is_overlay_visible(true);
                    }}
                  >
                    {is_course_reviewed ? "Update" : "Post"} Review
                  </div>
                </div>
              ) : (
                <div>
                  <p className={styles.placeholder_text}>
                    You have to enroll to review this course
                  </p>
                </div>
              )}
              {/*  */}
            </section>
            {/* =========================================================== */}
            {/* reviews container */}
            {/* =========================================================== */}

            <div className={styles.reviews_container}>
              <h2 className={styles.review_container_title}>
                What reviewers are saying_
              </h2>

              {/* right container grid */}

              <div className={styles.grid}>
                {all_reviews.length === 0 ? (
                  <div>
                    <p className={styles.placeholder_text}>No reviews yet</p>
                  </div>
                ) : (
                  all_reviews.map((review, index) => {
                    return (
                      <div key={index} className={styles.flex}>
                        <div className={styles.user_container_flex}>
                          {/* c1 */}
                          <div className={styles.review_container_c1}>
                            <Image
                              src={review.photoUrl}
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
                  })
                )}
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
          //   ================================
          //CLOSE OVERLAY
          //   ================================
          onClick={() => {
            set_is_overlay_visible(false);
            if (Object.keys(my_review_data).length !== 0) {
              set_my_temp_review_data(my_review_data);
            }
          }}
        ></div>
        <div className={styles.my_post_review_container}>
          <h2 className={styles.heading}>POST REVIEW</h2>
          <div className={styles.main_content}>
            <div className={styles.post_container_rating_box}>
              <div className={styles.post_rating_box_stars}>
                {/*     stars displayed here */}
                {stars.map((star, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        set_my_temp_review_data((prev) => {
                          return { ...prev, reviewer_rating: index + 1 };
                        }); // +1 because index starts from 0
                      }}
                    >
                      {star}
                    </div>
                  );
                })}
              </div>
              <p>{my_temp_review_data.reviewer_rating}.0</p>
            </div>

            <div className={styles.textarea_container}>
              <textarea
                //   update text area value
                onChange={(e) => {
                  set_my_temp_review_data((prev) => {
                    return { ...prev, reviewer_comment: e.target.value };
                  });
                }}
                value={my_temp_review_data.reviewer_comment}
                inputMode="text"
                className={styles.modern_textarea}
                placeholder="Type your review here"
              ></textarea>
            </div>

            {/* this is the over lay button */}
            <div
              className={styles.edit_review_button}
              onClick={() => {
                // close overlay
                set_is_overlay_visible(false);
                //  submit review
                submit_review();

                // display notification
                ctx.set_display_notification({
                  display: true,
                  message: `Review ${
                    is_course_reviewed ? "updated" : "posted"
                  } successfully`,
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
