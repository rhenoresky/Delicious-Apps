/* eslint-disable new-cap */
import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantDbSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return await response.json();
  }

  static async searchRestaurant(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    return await response.json();
  }

  static async addReview(data) {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  }

  static async getImageRestaurant({size, id}) {
    const response = await fetch(API_ENDPOINT.GET_IMAGE({size, id}));
    return await response.json();
  }
}

export default TheRestaurantDbSource;
