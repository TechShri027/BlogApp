// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogapp-48756.firebaseapp.com",
  projectId: "blogapp-48756",
  storageBucket: "blogapp-48756.firebasestorage.app",
  messagingSenderId: "104732463451",
  appId: "1:104732463451:web:a8510c9eccd410f5470a7e",
  measurementId: "G-2MS1CPBJ84"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);