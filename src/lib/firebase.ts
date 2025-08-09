// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

export { app };
