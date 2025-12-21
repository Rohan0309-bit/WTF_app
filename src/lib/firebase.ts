
// This file is deprecated and its contents have been moved to src/firebase/index.ts
// It is kept to prevent breaking imports in files that have not been updated yet.
// Please update imports to point to '@/firebase' instead of '@/lib/firebase'.

import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, connectAuthEmulator, signInWithEmailAndPassword, createUserWithEmailAndPassword, fetchSignInMethodsForEmail, signOut, type User, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator, doc, setDoc, serverTimestamp, enableIndexedDbPersistence } from "firebase/firestore";
import { firebaseConfig } from "@/firebase/config";
import { getAuthErrorMessage } from "./authErrorHandler";

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

export async function signUp(email: string, password: string) {
  try {
    const userCredential =
      await createUserWithEmailAndPassword(auth, email, password);

    return { success: true, user: userCredential.user };

  } catch (error: any) {
    return {
      success: false,
      message: getAuthErrorMessage(error),
      code: error?.code || null,
    };
  }
}

export async function login(email: string, password: string) {
  try {
    const userCredential =
      await signInWithEmailAndPassword(auth, email, password);

    return { success: true, user: userCredential.user };

  } catch (error: any) {
    return {
      success: false,
      message: getAuthErrorMessage(error),
      code: error?.code || null,
    };
  }
}

export async function resetPassword(email: string) {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true };

  } catch {
    return {
      success: false,
      message:
        "Password reset is temporarily unavailable. Please contact support.",
    };
  }
}

export const signInWithGoogle = async () => {
  return signInWithPopup(auth, provider);
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
