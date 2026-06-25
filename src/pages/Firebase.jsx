// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYJeDB5azhnH4D9tFQCh-QLMQpV-YrFYQ",
  authDomain: "auth-21-09-2006.firebaseapp.com",
  projectId: "auth-21-09-2006",
  storageBucket: "auth-21-09-2006.firebasestorage.app",
  messagingSenderId: "243699552452",
  appId: "1:243699552452:web:8a1f9d31b2ba424d64f991",
  measurementId: "G-CE2HXKXVS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);    

export default app;