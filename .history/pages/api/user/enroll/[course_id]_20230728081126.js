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

  if (req.method === "GET") {
    await check_if_user_is_enrolled(user_id, course_id, res);
  } else if (req.method === "POST") {
    const data = req.body.all_enrolled_courses;
    console.log(data);
    add_to_user_enrolled_courses(user_id, res, enrolled_courses_list);
  }

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
      const enrolled_courses_Ids_list = snapshot.val();
      for (const existingCourseID in enrolled_courses_Ids_list) {
        if (enrolled_courses_Ids_list[existingCourseID] === courseId) {
          console.log("course already exists");
          return res.status(200).json({
            result: true,
            enrolled_courses_list: enrolled_courses_Ids_list,
          });
        }
      }
    } else {
      console.log("No data available");
      return res.status(200).json({
        result: false,
        enrolled_courses_list: enrolled_courses_Ids_list,
      });
    }
  } catch (error) {
    console.error("Error checking enrollment:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function add_to_user_enrolled_courses(
  userId,
  res,
  enrolled_courses_list
) {
  // console.log(enrolled_courses_list);
}
