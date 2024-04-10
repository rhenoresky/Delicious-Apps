/* eslint-disable max-len */
/* eslint-disable new-cap */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
import API_ENDPOINT from '../../globals/api-endpoint';

const restaurantDetail = (restaurant) => `
  <section class="detail">
    <div class="img">
        <img class="img__item" alt="${restaurant.name}"
        src="${API_ENDPOINT.GET_IMAGE({
          size: 'medium',
          id: restaurant.pictureId,
        })}"/>
    </div>

    <ul class="detail__info">
      <li>
        <i title="restaurant" class="fas fa-store-alt"></i>
        <p>${restaurant.name}</p>
      </li>

      <li>
        <i title="address" class="fas fa-map-marker-alt"></i>
        <p>
          ${restaurant.address}, ${restaurant.city}</p>
      </li>

      <li>
        <i title="ratings" class="fas fa-star"></i>
        <p>${restaurant.rating}</p>
      </li>

      <li><p class="detail__description">${restaurant.description}</p></li>

      <li>${restaurant.categories
        .map(
          (category) => `
            <span class="category">${category.name}</span>
          `
        )
        .join('')}
      </li>
    </ul>
  </section>

  <section class="container-menu-review">
    <div class="menu">
      <h3 class="menu__title">Menu</h3>

      <div class="menu__detail">
        <div>
          <h4>Food</h4>
          <ul>
            ${restaurant.menus.foods
              .map(
                (food, i) => `
                  <li><p>${food.name}</p></li>
                `
              )
              .join('')}
          <ul>
        </div>

        <div>
          <h4>Drink</h4>
          <ul>
            ${restaurant.menus.drinks
              .map(
                (drink, i) => `
                  <li><p> ${drink.name}</p></li>
                `
              )
              .join('')}
          <ul>
        </div>
      </div>
    </div>

    <div class="review">
      <h3 class="review__title">Reviews</h3>

      <div class="review__container" id="form-review">
        <form autocomplete="on" class="review__form">
          <div class="review__form-item">
            <label for="name-input">Name</label>
            <input type="text" id="name-input" minlength="3" placeholder="Your name..." required>
          </div>

          <div class="review__form-item">
            <label for="review-input">Review</label>
            <input type="text" id="review-input" minlength="3" placeholder="Your review..." required>
          </div>

          <button type="submit" class="review__form-btn">Submit Review</button>
        </form>

        <div class="review__detail">
        ${restaurant.customerReviews
          .reverse()
          .map(
            (review) => `
              <div class="review__detail-item">
                <div class="review__detail-header">
                  <p class="review__detail-name">${review.name}</p>

                  <p class="review__detail-date">${review.date}</p>
                </div>

                <div class="review__detail-description">
                  ${review.review}
                </div>
              </div>
            `
          )
          .join('')}
        </div>
      </div>
    </div>
  </section>
`;

export default restaurantDetail;
