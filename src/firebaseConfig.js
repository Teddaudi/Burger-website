import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCadHihJ2MZ9enkY0ttUxv3G3VbPYzjho4",
  authDomain: "burger-website-7b8b0.firebaseapp.com",
  projectId: "burger-website-7b8b0",
  storageBucket: "burger-website-7b8b0.appspot.com",
  messagingSenderId: "1025690909647",
  appId: "1:1025690909647:web:1bf267d4c428218afcb0ba",
  measurementId: "G-CNV2QE5J36"
};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);