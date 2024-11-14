// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-blog-9dc40.firebaseapp.com",
  projectId: "next-blog-9dc40",
  storageBucket: "next-blog-9dc40.firebasestorage.app",
  messagingSenderId: "748579717121",
  appId: "1:748579717121:web:70b4d28db2b9cc0ddc0000"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

