// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
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

//Function to check the user status

//To check the user authentication status
onAuthStateChanged(auth, (user) => {
  if (user) {
    sessionStorage.setItem("isUser", true);
    showContentToUser();
    console.log(user);
    console.log(user.metadata.creationTime);
    console.log(user.email);
  } else {
    sessionStorage.setItem("isUser", false);
    hideContentFromUser();
    console.log("User Not in Use");
  }
});
const account = document.getElementById("account");
const login = document.getElementById("login");
const logout = document.getElementById("logout");

function showContentToUser() {
  account.style.display = "block";
  login.style.display = "none";
  logout.style.display = "block";
}
function hideContentFromUser() {
  account.style.display = "none";
  login.style.display = "block";
  logout.style.display = "none";
}
// Function to log out the user
function logoutUser() {
  signOut(auth)
    .then(() => {
      sessionStorage.setItem("isUser", false);
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user);
          console.log(user.metadata.creationTime);
          console.log(user.email);
        } else {
          console.log("user logged out");
        }
      });
      console.log("User logged out successfully");
      window.location.href = "/home";
    })
    .catch((error) => {
      console.error("Error logging out:", error);
    });
}
logout.addEventListener("click", logoutUser);

const tools = document.getElementById("tools");
const explore = document.getElementById("explore");
const notes = document.getElementById("notes");

function goToTools() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.href = "/views/ToolsPage.html";
    } else {
      window.location.href = "/home/error";
    }
  });
}
tools.addEventListener("click", goToTools);
