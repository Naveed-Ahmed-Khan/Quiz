// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getMessaging } from "firebase/messaging/sw";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDa3Gyo9RYmrNtVlYVZwh_eTELEqv04tSM",
//   authDomain: "logo-2d6da.firebaseapp.com",
//   projectId: "logo-2d6da",
//   storageBucket: "logo-2d6da.appspot.com",
//   messagingSenderId: "73251661072",
//   appId: "1:73251661072:web:8b20be6f91dd5328d33195",
// };
const firebaseConfig = {
  apiKey: "AIzaSyDu78h3hEQ8DTmLQAx2j7BAoJgi7sANUNk",
  authDomain: "quiz-demo-f1989.firebaseapp.com",
  projectId: "quiz-demo-f1989",
  storageBucket: "quiz-demo-f1989.appspot.com",
  messagingSenderId: "41034054793",
  appId: "1:41034054793:web:316f4908eab59367425a58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const messaging = getMessaging(app);
