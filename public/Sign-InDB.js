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
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import {
  getDatabase,
  set,
  get,
  update,
  remove,
  ref,
  child,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
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
const db = getDatabase(app);
const provider = new GoogleAuthProvider();

const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const signInForm = document.querySelector("#signInForm");
const signInBtn = document.querySelector("#signInBtn");
const goToSignUp = document.querySelector("#signup");

//Function to Redirect to SignUp page
function redirectToSignUp() {
  window.location.href = "/public/Sign-Up.html";
}
if (goToSignUp != null) {
  goToSignUp.addEventListener("click", redirectToSignUp);
} else {
  console.log("error");
}
export var userData;
const userSignIn = async () => {
  const email = userEmail.value;
  const password = userPassword.value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      userData = userCredential.user;
      alert("Login Successfully!");
      window.location.href = "/home";
    })
    .catch((error) => {
      alert(error.message);
    });
};
signInBtn.addEventListener("click", userSignIn);

const userSignInWithGoogle = async () => {
  const email = userEmail.value;
  const password = userPassword.value;
  signInWithPopup(auth, provider)
    .then((userCredential) => {
      const user = userCredential.user;
      onAuthStateChanged((user) => {
        if (user) {
          user = user.currentUser;
          // User is signed in, allow access to the page
          window.location.href = "/home";
        } else {
          // User is not signed in, redirect to login page or display message
          window.location.href = "/login";
        }
      });
      alert("Login Successfully!");
      window.location.href = "/login";
    })
    .catch((error) => {
      alert(error.code, error.message);
    });
};
const signInGoogleBtn = document.querySelector("#signInGoogle");
signInGoogleBtn.addEventListener("click", userSignInWithGoogle);
