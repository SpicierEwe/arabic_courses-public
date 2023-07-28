export default function handler(req, res) {
  const query = req.query["query"];

  return res
    .status(200)
    .json({ message: "This is the ENROLL user info api query = ", query });
}
