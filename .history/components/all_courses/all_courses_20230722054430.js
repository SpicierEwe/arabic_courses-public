import Image from "next/image";
import styles from "./all_courses.module.css";
import { AiOutlineStar } from "react-icons/ai";

import { BiSolidStarHalf } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import fs from "fs";
import path from "path";

// this function fetches the courses info from the local database and returns it
async function fetch_courses_info() {
  const filePath = path.join(
    process.cwd(),
    "database",
    "available_courses.json"
  );
  let content = fs.readFileSync(filePath, "utf8");

  content = JSON.parse(content);
  let available_courses_info = [];
  for (let x in content) {
    available_courses_info.push(content[x]["course_info"]);
  }

  return available_courses_info;

  // console.log(available_courses_info);
}

function display_stars(rating_number) {
  const icon_size = 15;
  const filled_star = <BsStarFill className={styles.star} size={icon_size} />;
  const half_star = <BsStarHalf className={styles.star} size={icon_size} />;
  const empty_star = <BsStar className={styles.star} size={icon_size} />;

  const x = [];

  if (rating_number % 1 != 0) {
    const a = Math.floor(rating_number);
    const b = rating_number % 1;

    console.log(a);
    console.log(b);

    for (let i = 0; i < a; i++) {
      x.push(filled_star);
    }

    if (b == 0.5) {
      x.push(half_star);
    }

    const remaing_strs = 5 - (a + 1);
    for (let i = 0; i < remaing_strs; i++) {
      x.push(empty_star);
    }
  } else {
    for (let i = 0; i < rating_number; i++) {
      x.push(filled_star);
    }

    const remaing_strs = 5 - rating_number;
    for (let i = 0; i < remaing_strs; i++) {
      x.push(empty_star);
    }
  }

  return x;
}

export async function AllCourses() {
  let courses_info = await fetch_courses_info();

  return (
    <main className={styles.container}>
      {courses_info.map((course_info, index) => {
        return (
          <grid key={index} className={styles.grid}>
            <div className={styles.flex}>
              <div className={styles.card}>
                {/* course image */}
                <Image
                  className={styles.image}
                  src={course_info["course_image_link"]}
                  alt="Picture of the author"
                  width={1000}
                  height={1000}
                ></Image>
                <div className={styles.info_container}>
                  {/* author info */}
                  <div className={styles.author_info_container}>
                    <p>offered by</p>
                    <h2>{course_info["offered_by"]}</h2>
                  </div>
                  <div className={styles.sub_info_container}>
                    {/* title */}
                    <h2 className={styles.title}>
                      {course_info["course_name"]}
                    </h2>
                    {/* outcome  */}
                    <p className={styles.outcome_container}>
                      <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
                        Outcome : &nbsp;
                      </span>
                      {course_info["outcome"]}
                    </p>
                  </div>
                  {/* review stars */}
                  <div className={styles.review_container}>
                    <div style={{ display: "inline-flex" }}>
                      {display_stars(course_info["rating"])}
                    </div>
                    {course_info["rating"]}/5 | {course_info["rating_count"]}
                    &nbsp; ratings
                  </div>
                  {/* difficulty and duration */}
                  <p className={styles.difficulty_and_duration}>
                    beginner to advanced &#8212; selfpace / 3-6 months
                  </p>
                </div>
              </div>
              {/* sidelay */}
              <div className={styles.sideLay}>
                <h2>More Information</h2>
                <p dangerouslySetInnerHTML={{__html:course_info["description"}}></p>
              </div>
            </div>
          </grid>
        );
      })}
    </main>
  );
}
