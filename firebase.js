// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWLhmbf7MIK3_3NROMBvsM3KMbHQDJVyQ",
  authDomain: "facebook-clone-e2c57.firebaseapp.com",
  projectId: "facebook-clone-e2c57",
  storageBucket: "facebook-clone-e2c57.appspot.com",
  messagingSenderId: "655371542959",
  appId: "1:655371542959:web:fca7edf9555ae8bd940f5a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };