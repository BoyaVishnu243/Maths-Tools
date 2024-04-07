// Import the functions you need from the SDKs you need
import {
  initializeApp,
  getApp,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
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
// import {getDatabase, set,get,update,remove,ref, child}
// from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
import {
  getFirestore,
  collection,
  getDoc,
  addDoc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
// import {
//   getStorage
// } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrIff3-ot10Yo7Wrv2qaPhZYunXwLgKys",
  authDomain: "math-tools-60cd1.firebaseapp.com",
  databaseURL:
    "https://math-tools-60cd1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "math-tools-60cd1",
  storageBucket:
    "https://console.firebase.google.com/u/1/project/math-tools-60cd1/storage/math-tools-60cd1.appspot.com/files",
  messagingSenderId: "2240669894",
  appId: "1:2240669894:web:d3ec9f5b332772241c0fc7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const store = getFirestore(app);

var newEmail = document.querySelector("#newEmail");
var newPassword = document.querySelector("#newPassword");
var newUserName = document.querySelector("#newUser");
var signUpForm = document.querySelector("#signUpForm");
var signUpBtn = document.querySelector("#signUpBtn");
var goToSignIn = document.querySelector("#signin");

const newSignUp = async () => {
  const signUpEmail = newEmail.value;
  const signUpPassword = newPassword.value;
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      signUpEmail,
      signUpPassword
    );
    const user = userCredential.user;
    alert("Your account has been created!");
    window.location.replace("/login");
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Error in creating account: " + errorMessage);
  }
};
async function signUpAndStore() {
  // InsertData();
  newSignUp();
}
signUpBtn.addEventListener("click", signUpAndStore);

function InsertData() {
  event.preventDefault();
  if (newEmail.value != "") {
    set(ref(db, "users/" + newEmail.value.split("@")[0]), {
      email: newEmail.value,
    })
      .then(() => {
        console.log("Data added to DB successfully!");
      })
      .catch((error) => {
        alert(error);
      });
  } else {
    console.log("Data is not valid!");
  }
}
