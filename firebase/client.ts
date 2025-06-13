// Import the functions you need from the SDKs you need
import { initializeApp , getApp , getApps } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQS2txg9NIyOUUi_gQ-Ktoc4UEU9VdbkE",
  authDomain: "prepwise-3cbba.firebaseapp.com",
  projectId: "prepwise-3cbba",
  storageBucket: "prepwise-3cbba.firebasestorage.app",
  messagingSenderId: "583313233859",
  appId: "1:583313233859:web:0d7801e63f062bad868f76",
  measurementId: "G-XP0JXWC84Z"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);