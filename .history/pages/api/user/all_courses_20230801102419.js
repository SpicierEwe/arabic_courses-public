import { initFirebase } from "@/Firebase/firebase";
import { getDatabase, ref, get, child } from "firebase/database";
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  // gets the enrolled courses list from the database from my_courses.js and sends it to readLocalDatabase() function to read and send back the information of those courses from local database
  readLocalDatabase(JSON.parse(req.body), res);
}

// ====================================================================================================

function readLocalDatabase(enrolled_courses_list, res) {
  const filePath = path.join(
    process.cwd(),
    "database",
    "available_courses.json"
  );
  let content = fs.readFileSync(filePath, "utf8");

  content = JSON.parse(content);
  let available_courses_info = [];
  for (let x in content) {
    if (
      enrolled_courses_list.includes(content[x]["course_info"]["course_id"])
    ) {
      available_courses_info.push(content[x]["course_info"]);
    }
  }

  res.status(200).json(available_courses_info);

  // console.log(available_courses_info);
}
