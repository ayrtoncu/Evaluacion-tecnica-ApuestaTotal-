// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXDgk7gr20-Gr98M8jFa6sq_Co_5RK8Pg",
  authDomain: "prueba1-281802.firebaseapp.com",
  databaseURL: "https://prueba1-281802.firebaseio.com",
  projectId: "prueba1-281802",
  storageBucket: "prueba1-281802.appspot.com",
  messagingSenderId: "1090255223000",
  appId: "1:1090255223000:web:da506ea47e54f8ab86ffad",
  measurementId: "G-3WZZR2G4R8"
};

// Initialize Firebase
export const appfirebase = initializeApp(firebaseConfig);