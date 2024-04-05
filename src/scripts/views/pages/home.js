import '../../components/hero';
import '../../components/restaurant-component';
import TheRestaurantDbSource from '../../data/restaurant-source';
import {swalError} from '../../utils/swal';
import {loading} from '../templates/loading';

const Home = {
  async render() {
    return `
    <hero-component></hero-component>
    <restaurant-component></restaurant-component>
    `;
  },

  async afterRender() {
    const restaurantElement = document.querySelector('restaurant-component');
    restaurantElement.innerHTML = loading();
    try {
      const restaurants = await TheRestaurantDbSource.listRestaurant();
      restaurantElement.innerHTML = '';
      restaurantElement.heading = 'Explore Restaurant';
      restaurantElement.listRestaurant = restaurants;
    } catch (err) {
      restaurantElement.innerHTML = '';
      swalError(err.message);
    }
  },
};

export default Home;
