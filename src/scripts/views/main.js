import "../components/hero";

const main = () => {
  const mainElement = document.querySelector("main");
  const heroComponent = document.createElement("hero-component");

  mainElement.appendChild(heroComponent);
};

export default main;
