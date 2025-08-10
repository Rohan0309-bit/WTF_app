// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

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

// In a development environment, you might want to connect to the emulators
if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    // Point to the emulators running on your local machine
    connectAuthEmulator(auth, 'http://localhost:9099');
    connectFirestoreEmulator(db, 'localhost', 8080);
}


export const signInWithGoogle = async () => {
  return signInWithPopup(auth, provider);
};