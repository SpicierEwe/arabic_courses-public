import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  console.log("The query was = ", req.query);

  if (req.query == "all_courses_info") {
  }

  const [courses_info, courses_content] = await fetch_courses_info();
  res.status(200).json({ courses_info: courses_info, status: "success" });
}

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
