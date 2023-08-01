import admin from 'firebase-admin';
import serviceAccount from 'path/to/serviceAccountKey.json';

export const initFirebaseAdmin = () => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: 'YOUR_FIREBASE_DATABASE_URL'
    });
  }
  return admin;
};
 