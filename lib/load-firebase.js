// import dynamic from 'next/dynamic'

export default async function loadDb() {
  const firebase = await import("firebase/app");
  await import("firebase/firestore");

  const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
  };

  try {
    firebase.initializeApp(firebaseConfig)
  } catch (err) {
      if (!/already exists/.test(err.message)) {
        console.error("Firebase initialization error", err.stack);
      }
  }

  const db = firebase.firestore()
  return db;
}
