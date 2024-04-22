import FavoriteRestaurantIdb from '../src/scripts/data/favorit-restaurant-idb';
import {itActsAsFavoriteRestaurantModel} from './contracts/favoriteRestaurantContract';

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async (movie) => {
      await FavoriteRestaurantIdb.deleteRestaurant(movie.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
