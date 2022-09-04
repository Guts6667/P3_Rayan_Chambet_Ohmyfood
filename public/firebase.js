// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjjYTBCIwOEBkz4n8SR0IuRbfGmKOsG2Y",
  authDomain: "ohmyf-cf02d.firebaseapp.com",
  projectId: "ohmyf-cf02d",
  storageBucket: "ohmyf-cf02d.appspot.com",
  messagingSenderId: "328179290128",
  appId: "1:328179290128:web:66d35991aff700dfa2fa95",
  measurementId: "G-0G048KV55D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
