import React from "react";
import styles from "./my_single_course.module.css";

import { AiOutlinePlayCircle, AiFillPlayCircle } from "react-icons/ai";

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
          {/* section Name */}
          <div>
            {course_content.map((section, index) => {
              return (
                <div key={index}>
                  <h2 className={styles.section_name}>
                    {section["section_name"]}
                  </h2>
                  {
                    // side_bar content
                    section["dvds"].map((array, index) => {
                      return (
                        <div key={index} className={styles.dvd_container}>
                          {/* dvd Number */}
                          <p className={styles.dvd_number}>DVD {index + 1}</p>
                          <div>
                            {array.map((item, index) => {
                              const available_alphabets = ["A", "B", "C"];

                              const item_count_array = [];
                              const count = item;

                              // this for loop is necessary as it converts the number into iterable number array like  3 to [ 1,2,3] and then creates a map with essential dvd item data
                              for (let i = 0; i < item; i++) {
                                item_count_array.push({
                                  number: i + 1,
                                  alphabet: available_alphabets[index],
                                });
                              }

                              // holds single dvd data
                              const single_dvd_data = [
                                {
                                  alphabet: available_alphabets[index],
                                  number: index + 1,
                                  item_count_array: item_count_array,
                                },
                              ];

                              return (
                                <div key={index}>
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
                                                <AiOutlinePlayCircle
                                                  size={21}
                                                />
                                                <p
                                                  className={styles.video_name}
                                                >
                                                  Video {count.alphabet}
                                                  {count.number}
                                                </p>
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
