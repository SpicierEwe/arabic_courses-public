import React from "react";
import styles from "./enroll_page_component.module.css";
import Image from "next/image";
import { display_stars_function } from "@/utils/utils";

export default function EnrollPageComponent({ prams }) {
  const course_id = prams.course_id;

  return (
    <div>
      <section className={styles.hero_container}>
        <div>
          {/* course name */}
          <h2>courese Name</h2>
          {/* offereed by info */}
          <div className={styles.offered_by_info_container}>
            <p>Offered by</p>
            <p>Author Name</p>
          </div>
          {/* rating container */}
          <div>
            <div>{display_stars_function(4)}</div>
            <></>
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
}
