import React from "react";
import styles from "./enroll_page_component.module.css";
import Image from "next/image";

export default function EnrollPageComponent({ prams }) {
  const course_id = prams.course_id;

  return (
    <div>
      <Image
        src="/images/entoll_page_image.jpg"
        alt="entroll_page_image"
        width={1000}
        height={1000}
      ></Image>
    </div>
  );
}
