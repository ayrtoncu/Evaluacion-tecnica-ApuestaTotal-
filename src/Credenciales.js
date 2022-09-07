// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP8KYJ82SQO84WoJJ3sK2CD-97j9cwx6A",
  authDomain: "virtualclinic-1c779.firebaseapp.com",
  projectId: "virtualclinic-1c779",
  storageBucket: "virtualclinic-1c779.appspot.com",
  messagingSenderId: "30065016815",
  appId: "1:30065016815:web:491d8c654475c3be21801a",
  measurementId: "G-R1YBL4D3R6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);