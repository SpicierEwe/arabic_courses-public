export default function handler(req, res) {
  const userId = req.query.userId;
  res.status(200).json({ query: req.query });
}
