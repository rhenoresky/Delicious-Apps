import FavoriteRestaurantIdb from '../../src/scripts/data/favorit-restaurant-idb';
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restaurant,
    favoriteRestaurant: FavoriteRestaurantIdb,
  });
};
export {createLikeButtonPresenterWithRestaurant};
