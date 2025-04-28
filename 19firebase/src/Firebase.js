// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvuX_FUpUa_KiHVI6xX2iPE-rIkqZnMQM",
  authDomain: "sanju-31d77.firebaseapp.com",
  projectId: "sanju-31d77",
  storageBucket: "sanju-31d77.firebasestorage.app",
  messagingSenderId: "468065514316",
  appId: "1:468065514316:web:e39e949031793397e395e9",
  measurementId: "G-HVWJ9JQ2MZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);