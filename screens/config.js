// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD0YCLWzIhliWItS7SfOcOUvKZZ4x-stc0",
  authDomain: "hellomobile-2ccf1.firebaseapp.com",
  projectId: "hellomobile-2ccf1",
  storageBucket: "hellomobile-2ccf1.appspot.com",
  messagingSenderId: "273815304385",
  appId: "1:273815304385:web:6be1b6250d6e6752b27c40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);