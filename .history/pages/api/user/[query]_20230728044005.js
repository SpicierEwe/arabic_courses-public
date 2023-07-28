export default function handler(req, res) {


  if( req.query === "POST" ){

  return res.status(200).json({ message: "This is the user info api" });
}
