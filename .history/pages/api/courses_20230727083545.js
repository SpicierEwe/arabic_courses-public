import React from "react";
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const courses_info = fetch_courses_info();
  res.status(200).json({ courses_info: courses_info, status: "success });
}

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
