import { isLoggedIn } from "login.js";
const nome = localStorage.getItem("nome");
const accShow = document.getElementById("account");
const logShow = document.getElementById("login-button");

if (isLoggedIn) {
  logShow.style.display = "none";
} else {
  accShow.style.display = "none";
}
