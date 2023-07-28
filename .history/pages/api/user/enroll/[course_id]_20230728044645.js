export default function handler(req, res) {
  const query = req.query["course_id"];

  if (query) check_if_user_is_enrolled(course_id);

  return res
    .status(200)
    .json({ message: "This is the ENROLL user info api query = " + query });
}

check_if_user_is_enrolled = (course_id) => {};
