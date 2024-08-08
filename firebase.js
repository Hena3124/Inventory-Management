// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpvUhHzLOig7G968PiAwiwueQ25OLVQXY",
  authDomain: "inventory-management-7670d.firebaseapp.com",
  projectId: "inventory-management-7670d",
  storageBucket: "inventory-management-7670d.appspot.com",
  messagingSenderId: "247493418570",
  appId: "1:247493418570:web:aa47bfbc092f97b73010b3",
  measurementId: "G-NKSCZPNXXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}

