import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

const accountEmail = document.getElementById("accountEmail");
const accountName = document.getElementById("accountName");
const accountPhone = document.getElementById("accountPhone");
const accountCreate = document.getElementById("accountCreate");
const accountLogin = document.getElementById("accountLogin");
const accountStatus = document.getElementById("accountStatus");
const accountTable = document.getElementById("accountTable");

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
    accountTable.style.display = "block";
    accountStatus.innerHTML = "User Authenticated";
    accountEmail.innerHTML = `${user.email}`;
    accountName.innerHTML = `${user.displayName}`;
    accountPhone.innerHTML = `${user.phoneNumber}`;
    accountCreate.innerHTML = `${user.metadata.creationTime}`;
    accountLogin.innerHTML = `${user.metadata.lastSignInTime}`;
  } else {
    accountTable.style.display = "none";
    accountStatus.innerHTML = "User Not Found";
  }
});
