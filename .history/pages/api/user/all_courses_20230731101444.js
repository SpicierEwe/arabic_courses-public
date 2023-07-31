import { initFirebase } from "@/Firebase/firebase";
import { getDatabase, ref, get, child } from "firebase/database";

export default function handler(req, res) {
  const app = initFirebase();
  const userId = req.query.userId;
  const db = getDatabase();
  const dbRef = ref(db);
  get(child(dbRef, `users/${userId}/enrolled_courses`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      res.status(200).json(snapshot.val());
    } else {
      console.log("No data available");
      res.status(200).json([]);
    }
  });
}

// ====================================================================================================

function readLocalDatabase() {
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
