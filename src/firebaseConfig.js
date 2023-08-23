import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBBW8yOB4CFykCNExl6PMZI29n54A65ypI",
  authDomain: "burger-website-af552.firebaseapp.com",
  projectId: "burger-website-af552",
  storageBucket: "burger-website-af552.appspot.com",
  messagingSenderId: "33649100419",
  appId: "1:33649100419:web:9d04cf495744d6ac50fdb6",
  measurementId: "G-XHJ8H0Q21T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)