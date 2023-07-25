"use client";

import React from "react";
import styles from "./my_single_course.module.css";

import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { PiPlayCircleThin } from "react-icons/pi";
import { useState } from "react";
import VideoPlayer from "../video_player/video_player";

export default function MySingleCourseDisplayComponent({ course_data }) {
  const [selected_video_data, setSelectedVideoData] = useState([]);

  const course_info = course_data["course_info"];
  const course_content = course_data["course_content"];
  // console.log(course_content);

  function displaySideBarMobile() {}
  return (
    <div>
      <div className={styles.bg}></div>
      {/* menu icon for mobile devices */}
      <HiOutlineMenuAlt2 size={23} onClick={() => {}} />
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
                                item_count_array.push({
                                  number: i + 1,
                                  alphabet: available_alphabets[video_index],
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
                                          (video_data, index) => {
                                            return (
                                              <div
                                                // ON VIDEO NAME CLICK BUTTON
                                                onClick={() => {
                                                  const alphabet =
                                                    available_alphabets[
                                                      video_index
                                                    ];
                                                  const video_id =
                                                    alphabet +
                                                    video_data.number;
                                                  const book_number =
                                                    book_index + 1;
                                                  const dvd_number = (
                                                    dvd_index + 1
                                                  )
                                                    .toString()
                                                    .padStart(2, "0");

                                                  // the url is slightly different for bokk1 and book 2 and book 3 when fr=or book 2 and 3 the url is same but different for book 1
                                                  let video_url =
                                                    book_index === 0
                                                      ? `http://www.archive.org/download/ArabicLanguageCourseVideos-Mpeg4-hi-res-Book${book_number}Dvd${dvd_number}-/MAV_BK${book_number}_DVD${dvd_number}_PART${video_id}_512kb.mp4`
                                                      : `http://www.archive.org/download/ArabicLanguageCourseVideos-Mpeg4-hi-res-Book${book_number}Dvd${dvd_number}/MAV_BK${book_number}_DVD${dvd_number}_PART${video_id}_512kb.mp4`;
                                                  // ------------------------------
                                                  // this map is passed to selected_video_data state to display the video and other information about video
                                                  setSelectedVideoData([
                                                    {
                                                      alphabet:
                                                        video_data.alphabet,
                                                      video_number:
                                                        video_data.number,
                                                      book_number: book_number,
                                                      dvd_number: dvd_number,

                                                      video_url: video_url,
                                                    },
                                                  ]);
                                                }}
                                                key={index}
                                                className={
                                                  styles.video_name_icon_container
                                                }
                                              >
                                                <p
                                                  className={styles.video_name}
                                                >
                                                  Video {video_data.alphabet}
                                                  {video_data.number}
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
          {/* <p className={styles.test}>
            {selected_video_data.length != 0
              ? JSON.stringify(selected_video_data)
              : "Select a video"}
          </p> */}

          {/* video player */}
          {selected_video_data.length != 0 && (
            <VideoPlayer video_url={selected_video_data[0]["video_url"]} />
          )}
        </section>
      </main>
    </div>
  );
}
