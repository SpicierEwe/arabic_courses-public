import { initFirebase } from "@/Firebase/firebase";
import { getDatabase, ref, get, child } from "firebase/database";
import fs from "fs";
import path from "path";

export default function handler(req, res) {}

// ====================================================================================================

function readLocalDatabase(enrolled_courses_list, res) {
  const app = initFirebase();
  const userId = req.query.userId;
  const db = getDatabase();
  const dbRef = ref(db);
  get(child(dbRef, `users/${userId}/enrolled_courses`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
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
    } else {
      console.log("No data available");
    }
  });
}
