import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const query = req.query["query"];
  // console.log("The query was = ", req.query);

  const [courses_info, courses_content] = await fetch_courses_info();

  // if the query is "all_courses_info", then return all the courses info
  if (query == "all_courses_info") {
    return res
      .status(200)
      .json({ courses_info: courses_info, status: "success" });
  }

  // if the query is "all_courses_content", then return all the courses content
  if (query == "all_courses_content") {
    return res
      .status(200)
      .json({ courses_content: courses_content, status: "success" });
  }

  // single course info
  // this function fetches a single course info and content
  if (query.includes("course_info_id=")) {\
    const course_id = query.split("=")[1];

    return res.status(200).json({
      message: "Yes im here please specifiy course ID",
      status: "success",
    });
  }

  console.log("the query is  = ", query);
  // default response
  res.status(200).json({ message: "WELCOME TO THE API", status: "success" });
}





// ==============================================================
// ==============================================================
// ==============================================================
// ==============================================================
// ==============================================================
// ==============================================================
// ==============================================================


// DECLARED FETCHING FUNCTION BELOW


// ==============================================================
// ==============================================================
// ==============================================================
// ==============================================================
// ==============================================================
// ==============================================================
// ==============================================================

// this function fetches all the available courses info and content`;
async function fetch_courses_info() {
  const filePath = path.join(
    process.cwd(),
    "database",
    "available_courses.json"
  );
  let content = fs.readFileSync(filePath, "utf8");

  content = JSON.parse(content);
  let available_courses_info = [];
  let available_courses_content = [];
  for (let x in content) {
    const course__info = content[x]["course_info"];
    const course_content = content[x]["course_content"];

    available_courses_info.push(course__info);
    available_courses_content.push(course_content);
  }

  return [available_courses_info, available_courses_content];

  // console.log(available_courses_info);
}

// ==============================================================
// ==============================================================

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
