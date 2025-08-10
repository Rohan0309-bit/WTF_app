// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "well-trained-freak-bc3s8",
  "appId": "1:28358839:web:9e0e7ba54a5aafbe0a3532",
  "storageBucket": "well-trained-freak-bc3s8.firebasestorage.app",
  "apiKey": "AIzaSyAuBiCFf0IyXkfBXkbXrclRwD5W79EqpzA",
  "authDomain": "well-trained-freak-bc3s8.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "28358839"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

export const signInWithGoogle = async () => {
  return signInWithPopup(auth, provider);
};
