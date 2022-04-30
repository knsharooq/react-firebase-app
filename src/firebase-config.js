// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpKW-1Q3cCq_pAfkpvTFlH25lENCICTL8",
  authDomain: "blog-app-34fa5.firebaseapp.com",
  projectId: "blog-app-34fa5",
  storageBucket: "blog-app-34fa5.appspot.com",
  messagingSenderId: "1001259983500",
  appId: "1:1001259983500:web:72c866caccd9e6fd5e91a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFireStore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();