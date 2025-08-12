
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, connectAuthEmulator, signInWithEmailAndPassword, createUserWithEmailAndPassword, fetchSignInMethodsForEmail, signOut, type User } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator, doc, setDoc, serverTimestamp } from "firebase/firestore";

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
if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    // Point to the emulators running on your local machine
    try {
        connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
        connectFirestoreEmulator(db, '127.0.0.1', 8080);
    } catch (e) {
        console.warn("Could not connect to emulators, this is fine if you are not running them locally", e)
    }
}


export const signInWithGoogle = async () => {
  return signInWithPopup(auth, provider);
};

// Email/Password Sign-In
export const loginWithEmailPassword = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Email/Password Sign-Up
export const registerWithEmailPassword = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Fetch sign-in methods for an email
export const getSignInMethods = (email: string) => {
    return fetchSignInMethodsForEmail(auth, email);
}

// Create user profile in Firestore
export const createUserProfile = async (user: User, additionalData: any) => {
    if (!user) return;
    const userRef = doc(db, 'users', user.uid);
    const data = {
        uid: user.uid,
        email: user.email,
        createdAt: serverTimestamp(),
        ...additionalData,
    };
    return setDoc(userRef, data, { merge: true });
}

export { signOut };
