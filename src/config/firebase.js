
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import {getFirestore}  from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQhs8mncwjXWUYSuO43Z5Vk6_fk5Oq_N8",
  authDomain: "react-firebase-project-1ae4a.firebaseapp.com",
  projectId: "react-firebase-project-1ae4a",
  storageBucket: "react-firebase-project-1ae4a.appspot.com",
  messagingSenderId: "1032465213535",
  appId: "1:1032465213535:web:515ac2cda1c09a765dd3ea",
  measurementId: "G-28WD55CK4B"
};

// Initialize Firebase
export const googleProvider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const storage = getStorage(app);