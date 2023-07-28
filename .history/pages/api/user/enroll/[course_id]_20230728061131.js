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

  console.log("user_id: " + userId + " course_id: " + courseId);
  const reff = ref(db, "users/" + userId + "/enrolled_courses");

  // Get the enrolled_courses array for the user.
  try {
    const snapshot = await get(reff);
    if (snapshot.exists()) {
      const data = snapshot.val();
      for (const existingCourseID in data) {
        if (data[existingCourseID] === courseId) {
          console.log("course already exists");
          return res.status(200).json({ result: true });
        }
      }
    } else {
      console.log("No data available");
      return res.status(200).json({ result: false });
    }
  } catch (error) {
    console.error("Error checking enrollment:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
