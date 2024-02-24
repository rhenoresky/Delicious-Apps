import "regenerator-runtime";
import "./components/nav-bar";
import "../styles/app.css";
import "../styles/main.css";
import "../styles/nav-bar.css";
import "../styles/responsive.css";

const menu = document.querySelector(".mobile-menu");
const navContainer = document.querySelector(".nav-container");

menu.addEventListener("click", function (event) {
  navContainer.classList.toggle("open");
  event.stopPropagation();
});

// navContainer.addEventListener("click", function () {
//   navContainer.classList.remove("open");
// });
