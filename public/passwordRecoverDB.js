// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrIff3-ot10Yo7Wrv2qaPhZYunXwLgKys",
  authDomain: "math-tools-60cd1.firebaseapp.com",
  databaseURL:
    "https://math-tools-60cd1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "math-tools-60cd1",
  storageBucket: "math-tools-60cd1.appspot.com",
  messagingSenderId: "2240669894",
  appId: "1:2240669894:web:d3ec9f5b332772241c0fc7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const checkEmail = document.getElementById("checkEmail");
const sendMailBtn = document.querySelector("#sendMail");
const forgotPassword = () => {
  sendPasswordResetEmail(auth, checkEmail.value)
    .then(() => {
      alert("A password Reset link has been sent to your email");
    })
    .catch((error) => {
      alert(error.code, error.message);
    });
};
sendMailBtn.addEventListener("click", forgotPassword);
