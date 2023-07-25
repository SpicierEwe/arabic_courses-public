import fs from "fs";
import path from "path";

import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

// Display raiting stars function
export function display_stars_function(rating_number) {
  const icon_size = 15;
  const star_style = {
    marginRight: "2px",
    color: "#f7bb56",
  };
  const filled_star = <BsStarFill style={star_style} size={icon_size} />;
  const half_star = <BsStarHalf style={star_style} size={icon_size} />;
  const empty_star = <BsStar style={star_style} size={icon_size} />;

  const x = [];

  // checking if the rating number is decimal
  if (rating_number % 1 != 0) {
    const a = Math.floor(rating_number);
    const b = rating_number % 1;

    // console.log(a);
    // console.log(b);

    for (let i = 0; i < a; i++) {
      x.push(filled_star);
    }

    if (b == 0.5) {
      x.push(half_star);
    }

    if (b == 0.5) {
      const remaing_strs = 5 - (a + 1);
      for (let i = 0; i < remaing_strs; i++) {
        x.push(empty_star);
      }
    } else {
      const remaing_strs = 5 - a;
      for (let i = 0; i < remaing_strs; i++) {
        x.push(empty_star);
      }
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

// fetched a course by course id
export function fetch_the_course(course_id) {
  let course_info = {};
  // fetch the course info from the database

  const filePath = path.join(
    process.cwd(),
    "database",
    "available_courses.json"
  );
  let content = fs.readFileSync(filePath, "utf8");

  content = JSON.parse(content);
  // console.log(content);
  const courseIdToSearch = course_id;

  console.log("searching for course with id: " + courseIdToSearch + "...");
  // finding course with id
  const foundCourse = content.find(
    (course) => course.course_info.course_id === courseIdToSearch
  );

  if (foundCourse) {
    // console.log("Course found:");
    course_info = foundCourse["course_info"];
  } else {
    console.log("Course not found.");
  }

  return course_info;
}
