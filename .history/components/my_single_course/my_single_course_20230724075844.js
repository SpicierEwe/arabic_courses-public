import React from "react";
import styles from "./my_single_course.module.css";

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
          <section></section>

          {/* section Name */}
          <h2>
            {course_content.map((section, index) => {
              return (
                <div key={index} className={styles.section_name}>
                  {section["section_name"]}
                  {
                    // section content
                    section["dvds"].map((array, index) => {
                      return array.map((item, index) => {
                        const x = ["A", "B", "C", "D"];

                        const item_count_array = [];
                        const count = item;

                        for (let i = 0; i < item; i++) {
                          item_count_array.push({
                            number: i + 1,
                            alphabet: x[index],
                          });
                        }

                        const y = [
                          {
                            alphabet: x[index],
                            number: index + 1,
                            item_count_aray: item_count_array,
                          },
                        ];

                        return (
                          <p key={index}>
                            {y.map((item, index) => {
                              return (
                                <p key={index}>
                                  {item.item_count_aray.map((count, index) => {
                                    return (
                                      <p key={index}>
                                        {count.alphabet + count.number}
                                      </p>
                                    );
                                  })}
                                </p>
                              );
                            })}
                          </p>
                        );
                      });
                    })
                  }
                </div>
              );
            })}
          </h2>
        </section>
        {/* main content */}
        <section className={styles.main_content_container}>
          <p>main content</p>
        </section>
      </main>
    </div>
  );
}
