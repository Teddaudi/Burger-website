// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCadHihJ2MZ9enkY0ttUxv3G3VbPYzjho4",
  authDomain: "burger-website-7b8b0.firebaseapp.com",
  projectId: "burger-website-7b8b0",
  storageBucket: "burger-website-7b8b0.appspot.com",
  messagingSenderId: "1025690909647",
  appId: "1:1025690909647:web:1bf267d4c428218afcb0ba",
  measurementId: "G-CNV2QE5J36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);