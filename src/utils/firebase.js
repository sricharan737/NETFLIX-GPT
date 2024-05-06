// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQOFOIRrwO368raxP2FU5-s6pxAG0p2L0",
  authDomain: "netflixgpt-50bc6.firebaseapp.com",
  projectId: "netflixgpt-50bc6",
  storageBucket: "netflixgpt-50bc6.appspot.com",
  messagingSenderId: "375876706485",
  appId: "1:375876706485:web:8b38e884e64d7754349efc",
  measurementId: "G-CNKE02P6T0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);