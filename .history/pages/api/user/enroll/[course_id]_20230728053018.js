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
  const app = initFirebase();
  const { courseId, userId } = req.query;

  console.log(req.query);

  const result = await check_if_user_is_enrolled(userId, courseId);
}

async function check_if_user_is_enrolled(userId, courseId) {
  const db = getDatabase();
  const reff = ref(db, "users/" + userId);

  const enreolled_courses_ref = ref(
    db,
    "users/" + userId + "/enrolled_courses"
  );

  get(child(reff, "enrolled_courses")).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      const data = snapshot.val();
      data.map((existingCourseID) => {
        if (existingCourseID === courseId) {
          console.log("course already exists");

          return true;
        } else {
          return false;
        }
      });
    } else {
      return false;
    }
  });
}
