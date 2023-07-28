import {
  getDatabase,
  ref,
  set,
  update,
  push,
  child,
  get,
} from "firebase/database";

export default function handler(req, res) {
  const query = req.query["course_id"];

  if (query) check_if_user_is_enrolled(course_id);

  return res
    .status(200)
    .json({ message: "This is the ENROLL user info api query = " + query });
}

check_if_user_is_enrolled = (course_id) => {
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

          console.log(true);

          return;
        } else {
        }
      });
    } else {
      console.log("No data available");

      set(enreolled_courses_ref, [courseId]);
    }
  });
};
