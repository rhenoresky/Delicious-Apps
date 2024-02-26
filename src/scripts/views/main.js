import "../components/hero";
import "../components/restaurant-component";
import data from "../../public/data/DATA.json";

const main = () => {
  const mainElement = document.querySelector("main");
  const heroComponent = document.createElement("hero-component");
  const restaurantComponent = document.createElement("restaurant-component");
  restaurantComponent.listRestaurant = data.restaurants;

  mainElement.appendChild(heroComponent);
  mainElement.appendChild(restaurantComponent);
};

export default main;
