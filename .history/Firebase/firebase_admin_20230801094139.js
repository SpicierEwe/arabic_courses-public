import admin from "firebase-admin";

import path from "path";

const serviceAccountPath = path.resolve("./firebase/serviceAccountKey.json");

export default initFirebaseAdmin = () => {
  if (!admin.apps.length) {
    const serviceAccount = require(serviceAccountPath);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL:
        "https://arabic-courses-website-default-rtdb.firebaseio.com/",
    });
  }
  return admin;
};
