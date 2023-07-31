"use client";

import React, {
  cache,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styles from "./side_nav.module.css";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { PiPlayCircleThin } from "react-icons/pi";
import { VideoPlayerContext } from "@/Context/global_context_provider";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { animateScroll as scroll, Element } from "react-scroll";

import {
  getDatabase,
  ref,
  set,
  update,
  push,
  child,
  get,
} from "firebase/database";

export default function SideNavComponent({
  course_id,
  course_content,
  selected_video_data,
  setSelectedVideoData,
  isSideBarOpen,
  setIsSideBarOpen,
  video_refs,
}) {
  const auth = getAuth();
  const [user, setUser] = useAuthState(auth);
  const userId = user.uid;
  const ctx = useContext(VideoPlayerContext);

  const [completed_videos_list, setCompletedVideosList] = useState([]);

  useEffect(() => {
    console.log("intital function ran");
    // ================== fetch intial completed video list ================== it fetches the completed videos list from the database when the page is reloaded for the 1st time
    function fetch_intial_completed_video_list() {
      const path = `users/${userId}/courses_progress/${course_id}/completed_videos`;

      const dbRef = ref(getDatabase());
      get(child(dbRef, path))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            setCompletedVideosList(snapshot.val());
          } else {
            // if no data existas in the completed videos list

            console.log(
              "No Video was found ! no data exists! \n creating and saving a new one"
            );

            return;
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    fetch_intial_completed_video_list();
  }, []),
    //  ============================================================
    // ================== video completed checker ==================
    useEffect(() => {
      if (ctx.videoEndedData !== null) {
        const endedVideoId = ctx.videoEndedData.endedVideoId;
        const endedVideoForCourseId = ctx.videoEndedData.endedVideoForCourseId;
        // console.log("this is the side nav bar id: ", videoId);
        // console.log("   SELECTED VIDEO DATA = : ", course_id);

        // ================== video completed checker ==================
        // this function recieves the video id from the video player component when the video has ended and checks if the video is present in the completed videos list in the database or not if not then it saves the video id in the database
        function video_completed_Checker() {
          const path = `users/${userId}/courses_progress/${course_id}/completed_videos`;

          // reffrence to the database
          const dbRef = ref(getDatabase());

          // this fetches the completed videos list from the database
          if (endedVideoForCourseId === course_id) {
            get(child(dbRef, path))
              .then((snapshot) => {
                if (snapshot.exists()) {
                  // console.log(snapshot.val());

                  // if the returned data is not empty
                  // then checking if the video id is present in the completed videos list or not
                  if (snapshot.val().includes(endedVideoId)) {
                    console.log(
                      "Video already exists in completed videos list"
                    );
                  }
                  // if the video is not present in the completed videos list * then sadding/saving the video id in the database
                  else {
                    console.log(
                      "Video does not exist in completed videos list Saving Video"
                    );
                    setCompletedVideosList([...snapshot.val(), endedVideoId]);

                    return set(ref(getDatabase(), path), [
                      ...snapshot.val(),
                      endedVideoId,
                    ]);
                  }
                }
                // if not data exists and nothing is returned from the database which means that the there is no collection of completed videos in the database * then creating a new one and saving the video id in it
                else {
                  // if no data existas in the completed videos list

                  console.log(
                    "No Course Video Completed collection was found ! no data exists! \n creating and saving a new one"
                  );
                  setCompletedVideosList([endedVideoId]);

                  return set(ref(getDatabase(), path), [endedVideoId]);
                }
              })
              .catch((error) => {
                console.error(error);
              });
          }
        }
        // when intially the video id is undefined then it does not run the video completed checker function but when the video id is defined then it runs the video completed checker function
        if (endedVideoId !== undefined) {
          video_completed_Checker();
        }
      }
    }, [ctx, ctx.videoEndedData]);

  // this give the videos their consicutive number
  var all_video_count = 0;
  return (
    <div className={styles.container}>
      <div
        className={styles.nav_container_bg}
        style={isSideBarOpen ? { display: "block" } : { display: "none" }}
        onClick={() => {
          setIsSideBarOpen(false);
        }}
      ></div>
      <section
        className={` ${styles.side_nav_container} ${
          isSideBarOpen ? styles.side_nav_open : styles.side_nav_close
        }`}
      >
        {/* section Name / book name*/}
        {/* side nav icon inside side nav */}
        {/* <div className={styles.side_nav_icon_inside_side_nav}>
        <HiOutlineMenuAlt2 size={23} onClick={displaySideBarMobile} />
      </div> */}
        <div>
          {course_content.map((section, book_index) => {
            return (
              <div key={book_index}>
                <h2 className={styles.section_name}>
                  {section["section_name"]}
                </h2>
                {
                  // side_nav content
                  section["dvds"].map((array, dvd_index) => {
                    return (
                      <div
                        key={dvd_index}
                        className={styles.dvd_container}
                        // this creates a unique ref for each dvd section wich will allow us to scroll to the dvd section

                        // check my)single_course_page.js useEffect for more info on working of this ref
                        ref={(el) => {
                          video_refs.current[
                            `B${book_index + 1}D${(dvd_index + 1)
                              .toString()
                              .padStart(2, "0")}`
                          ] = el;
                        }}
                      >
                        {/* dvd Number */}
                        <p className={styles.dvd_name}>DVD {dvd_index + 1}</p>
                        <div>
                          {array.map((item, video_index) => {
                            const available_alphabets = ["A", "B", "C"];

                            const video_item_count_array = [];
                            const count = item;

                            // this for loop is necessary as it converts the number into iterable number array like  3 to [ 1,2,3] and then creates a map with essential dvd item data
                            for (let i = 0; i < item; i++) {
                              const book_number = book_index + 1;
                              const dvd_number = (dvd_index + 1)
                                .toString()
                                .padStart(2, "0"); // this is used to add 0 in front of single digit number like 1 to 01
                              const alphabet = available_alphabets[video_index];
                              const video_number = i + 1;
                              const video_part_code = alphabet + video_number;

                              const video_id = `B${book_number}D${dvd_number}P${video_part_code}`;

                              // this array holds the data of videos in a dvd
                              video_item_count_array.push({
                                book_number: book_number,
                                dvd_number: dvd_number,
                                video_number: video_number,
                                video_id: video_id,

                                alphabet: alphabet,
                                video_part_code: video_part_code,

                                // the url is slightly different for bokk1 and book 2 and book 3 when fr=or book 2 and 3 the url is same but different for book 1
                                video_url:
                                  book_number === 1 &&
                                  dvd_number < parseInt("04")
                                    ? `http://www.archive.org/download/ArabicLanguageCourseVideos-Mpeg4-hi-res-Book${book_number}Dvd${dvd_number}-/MAV_BK${book_number}_DVD${dvd_number}_PART${video_part_code}_512kb.mp4`
                                    : `http://www.archive.org/download/ArabicLanguageCourseVideos-Mpeg4-hi-res-Book${book_number}Dvd${dvd_number}/MAV_BK${book_number}_DVD${dvd_number}_PART${video_part_code}_512kb.mp4`,
                              });
                            }

                            // holds single dvd data
                            const single_dvd_data = [
                              {
                                alphabet: available_alphabets[video_index],
                                number: video_index + 1,
                                item_count_array: video_item_count_array,
                              },
                            ];

                            return (
                              <div key={video_index}>
                                {single_dvd_data.map((item, index) => {
                                  return (
                                    <div key={index}>
                                      {item.item_count_array.map(
                                        (video_data, index) => {
                                          all_video_count++;
                                          return (
                                            // --====================== Video Item ======================--
                                            <div
                                              key={index}
                                              // ref={(el) => {
                                              //   video_refs.current[
                                              //     video_data.video_id
                                              //   ] = el;
                                              // }}
                                              // ON VIDEO NAME CLICK BUTTON
                                              onClick={() => {
                                                // ------------------------------
                                                // this map is passed to selected_video_data state to display the video and other information about video
                                                setSelectedVideoData([
                                                  video_data,
                                                ]);

                                                // ------------------------------

                                                // caching the last watched video
                                                //

                                                localStorage.setItem(
                                                  `last_watched_video_${course_id}`,
                                                  JSON.stringify([video_data])
                                                );
                                              }}
                                              style={{
                                                borderLeft: `${
                                                  completed_videos_list.includes(
                                                    video_data.video_id
                                                  )
                                                    ? "5px solid #00ff00"
                                                    : ""
                                                }`,
                                              }}
                                              className={`${
                                                styles.video_name_icon_container
                                              }

                                            
                                              ${
                                                selected_video_data[0][
                                                  "video_id"
                                                ] === video_data.video_id
                                                  ? styles.highlight_selected_video_container
                                                  : ""
                                              }
                                        
                                          `}
                                            >
                                              {/* VIDEO NAME */}
                                              <p className={styles.video_name}>
                                                Video {/* {all_video_count} */}
                                                {/* {video_data.video_id} */}
                                                {video_data.alphabet}
                                                {video_data.video_number}
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
    </div>
  );
}
