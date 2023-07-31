import { initFirebase } from "@/Firebase/firebase";
import { getDatabase, ref, get, child } from "firebase/database";

const app = initFirebase();

export default function handler(req, res) {
  const userId = req.query.userId;
  const db = getDatabase();
  const dbRef = ref(db);
  get(child(dbRef, `users/${userId}/enrolled_courses`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      res.status(200).json(snapshot.val());
    } else {
      console.log("No data available");
      res.status(200).json([]);
    }
  });
}
