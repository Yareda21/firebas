// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpwKW5FYUjuDMcXPZefgSwXUtFN77U4zg",
  authDomain: "fir-app-5a686.firebaseapp.com",
  projectId: "fir-app-5a686",
  storageBucket: "fir-app-5a686.appspot.com",
  messagingSenderId: "370661174723",
  appId: "1:370661174723:web:f235b5f95d11728683e176",
  measurementId: "G-9MKMS0RZCL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export { database };
