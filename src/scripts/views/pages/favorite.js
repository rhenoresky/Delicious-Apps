import '../../components/restaurant-component';
import FavoriteRestaurantIdb from '../../data/favorit-restaurant-idb';

const Favorite = {
  async render() {
    return `
    <restaurant-component></restaurant-component>
    `;
  },

  async afterRender() {
    const restaurantElement = document.querySelector('restaurant-component');
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    if (restaurants.length < 1) {
      restaurantElement.heading = 'No Favorite Restaurant';
      return;
    }
    restaurantElement.heading = 'Favorite Restaurant';
    restaurantElement.listRestaurant = restaurants;
  },
};

export default Favorite;
