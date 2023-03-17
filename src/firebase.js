// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCTgYrdEQzHZp5xVgvUDdG5CmaIu-HyYQI",
  authDomain: "authentification-example-56ee2.firebaseapp.com",
  projectId: "authentification-example-56ee2",
  storageBucket: "authentification-example-56ee2.appspot.com",
  messagingSenderId: "209477114041",
  appId: "1:209477114041:web:db1db348032c5bb897a368",
  measurementId: "G-DSHB7JZW0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);
