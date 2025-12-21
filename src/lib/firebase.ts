// This file is deprecated and its contents have been moved to src/firebase/index.ts
// It is kept to prevent breaking imports in files that have not been updated yet.
// Please update imports to point to '@/firebase' instead of '@/lib/firebase'.

import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, connectAuthEmulator, signInWithEmailAndPassword, createUserWithEmailAndPassword, fetchSignInMethodsForEmail, signOut, type User } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator, doc, setDoc, serverTimestamp, enableIndexedDbPersistence } from "firebase/firestore";
import { getAI } from "firebase/ai";
import { firebaseConfig } from "@/firebase/config";

// Initialize Firebase
let app: FirebaseApp;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp();
}

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const ai = getAI(app);

// Enable offline persistence
if (typeof window !== 'undefined') {
    enableIndexedDbPersistence(db)
      .catch((err) => {
        if (err.code == 'failed-precondition') {
          console.warn('Firestore persistence failed: failed-precondition. Multiple tabs open?');
        } else if (err.code == 'unimplemented') {
          console.warn('Firestore persistence failed: unimplemented. Browser not supported.');
        }
      });
}

// In a development environment, connect to emulators
if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
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

export const loginWithEmailPassword = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerWithEmailPassword = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const getSignInMethods = (email: string) => {
    return fetchSignInMethodsForEmail(auth, email);
}

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
