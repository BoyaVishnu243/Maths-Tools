const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Sign-Up.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Sign-In.html"));
});

app.get("/forgotPassword", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "forgotPassword.html"));
});

app.get("/home/error", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "error.html"));
});

app.get("/account", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "account.html"));
});

app.get("/home/tools", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "ToolsPage.html"));
});

app.get("/home/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "About.html"));
});

app.get("/home/tools/cal", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "Arithmetic.html"));
});

app.get("/home/tools/linear", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "BasicAlgebra.html"));
});

app.get("/home/tools/powers", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "Powers.html"));
});

app.get("/home/tools/complex", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "Complex.html"));
});

app.get("/home/tools/quadratic", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "Quadratic.html"));
});

app.get("/home/tools/triangle", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "Triangle.html"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Server is running at http://localhost:${PORT}`);
});
