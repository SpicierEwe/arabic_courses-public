import Image from "next/image";
import styles from "./all_courses.module.css";
import { AiOutlineStar } from "react-icons/ai";
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

export async function AllCourses() {
  let courses_info = await fetch_courses_info();
  const review_stars = [];
  for (let i = 0; i < 5; i++) {
    review_stars.push(<AiOutlineStar className={styles.star} size={17} />);
  }
  return (
    <main className={styles.container}>
      {courses_info.map((course_info, index) => {
        return (
          <grid key={index} className={styles.grid}>
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
                  <h2 className={styles.title}>{course_info["course_name"]}</h2>
                  {/* outcome  */}
                  <p
                    className={styles.outcome_container}
                    dangerouslySetInnerHTML={{ html: course_info["outcome"] }}
                  >
                    <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
                      Outcome : &nbsp;
                    </span>
                    {course_info["outcome"]}
                  </p>
                </div>
                {/* review stars */}
                <div className={styles.review_container}>
                  <div style={{ display: "inline-flex" }}>
                    {review_stars.map((star, index) => {
                      return <div key={index}>{star}</div>;
                    })}
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
          </grid>
        );
      })}
    </main>
  );
}
