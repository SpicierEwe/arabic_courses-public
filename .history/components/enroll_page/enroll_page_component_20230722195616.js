import React from "react";
import styles from "./enroll_page_component.module.css";
import Image from "next/image";

export default function EnrollPageComponent({ prams }) {
  const course_id = prams.course_id;

  return (
    <div>
      <section className={styles.hero_container}>
        <div>
          <h2>courese Name</h2>
          <div className={styles.author_info}>
            <p>Offered by</p>
            <p>Author Name</p>
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
}
