import UrlParser from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/restaurant-source';
import restaurantDetail from '../templates/detail-restaurant';
import {loading} from '../templates/loading';
import {swalError, swalSuccess} from '../../utils/swal';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorit-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = '';
    restaurantContainer.innerHTML = loading();

    try {
      const restaurant = await TheRestaurantDbSource.detailRestaurant(url.id);
      restaurantContainer.innerHTML = '';
      restaurantContainer.innerHTML = restaurantDetail(restaurant);

      const formReview = document.querySelector('#form-review');
      const inputName = document.querySelector('#name-input');
      const inputReview = document.querySelector('#review-input');

      formReview.addEventListener('submit', async (e) => {
        e.preventDefault();

        await TheRestaurantDbSource.addReview({
          id: url.id,
          name: inputName.value,
          review: inputReview.value,
        });

        await this.afterRender();
        swalSuccess('Successfully added reviews');
      });

      await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant,
        favoriteRestaurant: FavoriteRestaurantIdb,
      });
    } catch (err) {
      restaurantContainer.innerHTML = '';
      swalError(err.message);
    }
  },
};

export default Detail;
