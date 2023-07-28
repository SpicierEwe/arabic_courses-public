import { initFirebase } from "@/Firebase/firebase";
import {
  getDatabase,
  ref,
  set,
  update,
  push,
  child,
  get,
} from "firebase/database";

export default async function handler(req, res) {
  const { user_id, course_id } = req.query;

  // console.log(req.query);

  check_if_user_is_enrolled(user_id, course_id, res);

  // res.status(200).json({ result });
}

// ====================================================================================================
// ====================================================================================================
// ====================================================================================================

async function check_if_user_is_enrolled(userId, courseId, res) {
  const app = initFirebase();
  const db = getDatabase();
  const reff = ref(db, "users/" + userId);

  console.log(userId, courseId);

  // Push the courseId to the enrolled_courses array.
  const x = push(reff);

  get(child(reff, "enrolled_courses")).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      data.map((existingCourseID) => {
        if (existingCourseID === courseId) {
          console.log("course already exists");

          return res.status(200).json({ result: "Course already enreolled" });
        }
      });
    } else {
      console.log("No data available");
      return res.status(200).json({ result: "No data available" });
    }
  });
}
