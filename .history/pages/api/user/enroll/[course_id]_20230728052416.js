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
  const { courseId, userId } = req.query["course_id"];

  check_if_user_is_enrolled(userId, courseId);

  // return res
  //   .status(200)
  //   .json({
  //     message:
  //       "This is the ENROLL user info api query = " + JSON.stringify(req.query),
  //   });
}

function check_if_user_is_enrolled(user_id, course_id) {
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

          return;
        } else {
          return false;
        }
      });
    } else {
      return false;
    }
  });
}
