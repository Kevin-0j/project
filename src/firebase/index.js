
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCmaoY4zLH9nPuXVhIQ0ayo5ua7-hVzI6Q",
  authDomain: "church-webapp-73bc5.firebaseapp.com",
  projectId: "church-webapp-73bc5",
  storageBucket: "church-webapp-73bc5.appspot.com",
  messagingSenderId: "485510242572",
  appId: "1:485510242572:web:8339f0bcf9eab774ba6929",
  measurementId: "G-GDLC7GLTZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export {auth}
