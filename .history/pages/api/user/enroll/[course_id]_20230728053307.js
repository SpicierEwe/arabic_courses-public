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
  const reff = ref(db, "users/" + userId);
  const enreolled_courses_ref = ref(
    db,
    "users/" + userId + "/enrolled_courses"
  );

  // Push the courseId to the enrolled_courses array.
  const x = push(reff);

  get(child(reff, "enrolled_courses")).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      const data = snapshot.val();
      data.map((existingCourseID) => {
        if (existingCourseID === course_id) {
          console.log("course already exists");
          setIsCourseEnrolled(true);
          return;
        } else {
          set(enreolled_courses_ref, [...data, "this is the new one"]);
          setIsCourseEnrolled(true);
        }
      });
    } else {
      console.log("No data available");

      set(enreolled_courses_ref, [courseId]);
    }
  });
}
