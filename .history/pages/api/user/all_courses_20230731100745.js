export default function handler(req, res) {
  const [] = req.query;
  res.status(200).json({ name: "all user courses" });
}
