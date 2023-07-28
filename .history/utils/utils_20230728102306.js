import fs from "fs";
import path from "path";

import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import {
  getDatabase,
  ref,
  set,
  update,
  push,
  child,
  get,
} from "firebase/database";

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
  let course_data = {};
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
    course_data = foundCourse;
  } else {
    console.log("Course not found.");
  }

  return course_data;
}

// fetches the courses info from the local database and returns it

export async function fetchCoursesInfo() {
  const filePath = path.join(
    process.cwd(),
    "database",
    "available_courses.json"
  );
  let content = fs.readFileSync(filePath, "utf8");
  content = JSON.parse(content);
  let availableCoursesInfo = [];
  for (let x in content) {
    availableCoursesInfo.push(content[x]["course_info"]);
  }
  return availableCoursesInfo;
}

//
export function check_if_course_already_enrolled() {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/${userId}/enrolled_courses`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        setEnrolledCoursesList(snapshot.val());
        if (snapshot.val().includes(courseId)) {
          setIsCourseEnrolled(true);

          return true;
        }
      } else {
        console.log("No data available");
        return false;
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
