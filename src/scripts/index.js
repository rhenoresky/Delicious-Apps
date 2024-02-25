import "regenerator-runtime";
import "./components/nav-bar";
import "./components/hero";
import "../styles/app.css";
import "../styles/nav-bar.css";
import "../styles/responsive.css";
import "../styles/hero.css";

const menu = document.querySelector(".mobile-menu");
const close = document.querySelector(".btn-close");
const navContainer = document.querySelector(".nav-container");

menu.addEventListener("click", function (event) {
  navContainer.classList.toggle("open");
  event.stopPropagation();
});

close.addEventListener("click", function () {
  navContainer.classList.remove("open");
});
