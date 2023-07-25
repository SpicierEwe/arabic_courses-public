import React from "react";
import styles from "./my_single_course.module.css";

import { AiOutlinePlayCircle, AiFillPlayCircle } from "react-icons/ai";

import { PiPlayCircleThin } from "react-icons/pi";

export default function MySingleCourseDisplayComponent({ course_data }) {
  const course_info = course_data["course_info"];
  const course_content = course_data["course_content"];
  // console.log(course_content);
  return (
    <div>
      <div className={styles.bg}></div>
      <main className={styles.main_container}>
        {/* side bar */}
        <section className={styles.side_bar_container}>
          {/* section Name / book name*/}
          <div>
            {course_content.map((section, book_index) => {
              return (
                <div key={book_index}>
                  <h2 className={styles.section_name}>
                    {section["section_name"]}
                  </h2>
                  {
                    // side_bar content
                    section["dvds"].map((array, dvd_index) => {
                      return (
                        <div key={dvd_index} className={styles.dvd_container}>
                          {/* dvd Number */}
                          <p className={styles.dvd_name}>DVD {dvd_index + 1}</p>
                          <div>
                            {array.map((item, video_index) => {
                              const available_alphabets = ["A", "B", "C"];

                              const item_count_array = [];
                              const count = item;

                              // this for loop is necessary as it converts the number into iterable number array like  3 to [ 1,2,3] and then creates a map with essential dvd item data
                              for (let i = 0; i < item; i++) {
                                const book_number = book_index + 1;
                                const dvd_number = (dvd_index + 1)
                                  .toString()
                                  .padStart(2, "0");
                                const alphabet = available_alphabets;
                                const video_id = alphabet + video_index + 1;
                                item_count_array.push({
                                  number: i + 1,
                                  alphabet: available_alphabets[video_index],
                                  video_url:
                                    book_index == 0
                                      ? `http://www.archive.org/download/ArabicLanguageCourseVideos-Mpeg4-hi-res-Book${book_number}Dvd${dvd_number}-/MAV_BK${book_number}_DVD${dvd_number}_PARTA1_512kb.mp4`
                                      : "http://www.archive.org/download/ArabicLanguageCourseVideos-Mpeg4-hi-res-Book2Dvd01/MAV_BK2_DVD01_PARTA1_512kb.mp4",
                                });
                              }

                              // holds single dvd data
                              const single_dvd_data = [
                                {
                                  alphabet: available_alphabets[video_index],
                                  number: video_index + 1,
                                  item_count_array: item_count_array,
                                },
                              ];

                              return (
                                <div key={video_index}>
                                  {single_dvd_data.map((item, index) => {
                                    return (
                                      <div key={index}>
                                        {item.item_count_array.map(
                                          (count, index) => {
                                            return (
                                              <div
                                                key={index}
                                                className={
                                                  styles.video_name_icon_container
                                                }
                                              >
                                                <p
                                                  className={styles.video_name}
                                                >
                                                  Video {count.alphabet}
                                                  {count.number}
                                                </p>
                                                {/* <AiOutlinePlayCircle
                                                  className={styles.play_icon}
                                                /> */}
                                                <PiPlayCircleThin
                                                  className={styles.play_icon}
                                                />
                                              </div>

                                              // alphabet and number
                                            );
                                          }
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
              );
            })}
          </div>
        </section>
        {/* main content */}
        <section className={styles.main_content_container}>
          <p>main content</p>
        </section>
      </main>
    </div>
  );
}
