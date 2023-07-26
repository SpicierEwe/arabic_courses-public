"use client";

import styles from "./resources_display.module.css";
import { FaReadme } from "react-icons/fa";
import { AiFillRead } from "react-icons/ai";
import { VideoPlayerContext } from "@/providers/video_player_provider";
import { useContext, useEffect, useState } from "react";

export default function ResourcesDisplay({ course_resources }) {
  const ctx = useContext(VideoPlayerContext);

  // hanfles the selected pdf item
  const [selectedPdfData, setSelectedPdfData] = useState({});

  // this function is called when a resource item is clicked on to open the pdf in the side notes nav component
  const handleOpenResourcePdf = (selected_item_data) => {
    // assingling the selected pdf url to the global state so that it can be used in the side notes nav component to display the pdf
    console.log(selected_item_data);
    ctx.setSelectedPdfUrl(selected_item_data.data.resource_url);
    // opening the side notes nav
    ctx.setIsSideNotesNavOpen(true);
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Resources</h2>
      <div className={styles.resource_container}>
        <div className={styles.resource_items_container}>
          {course_resources.map((resource, index) => {
            return (
              <div
                key={index}
                className={`${styles.resource_item_container} 
                ${
                  selectedPdfData.index === index
                    ? styles.selected_resource_item
                    : ""
                }
             
                `}
                onClick={() => {
                  const x = {
                    data: resource,
                    index: index,
                  };

                  handleOpenResourcePdf(x);
                  setSelectedPdfData(x);
                }}
              >
                <div className={styles.book_icon_container}>
                  <AiFillRead className={styles.book_icon} />{" "}
                </div>

                <div className={styles.right_container}>
                  <div className={styles.resource_title}>
                    {resource.resource_name}
                  </div>
                  <div className={styles.resource_author}>
                    {resource.author}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className={styles.quick_note}>
          These are the resources that are available for this course, and wil be
          used throught-out the course.
          <br></br>
          <br></br>
          Each section will have its own resources if are available / needed for
          the section.
          <br></br>
          <br></br>
          The solutions for the text books are provided in the resources section
          iteself, also the answer keys for the workbooks are also provided
          there. So be sure to check them out too.
        </p>
      </div>
    </div>
  );
}
