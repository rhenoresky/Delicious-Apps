/* eslint-disable indent */
/* eslint-disable new-cap */
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set item(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
    <article id="${this._restaurant.id}" class="post__item">
      <img
        class="post__item-thumbnail"
        src="${API_ENDPOINT.GET_IMAGE({
          size: 'medium',
          id: this._restaurant.pictureId,
        })}"
        alt="image ${this._restaurant.name}"
      />
      <div class="city-label">
        <span>${this._restaurant.city}</span>
      </div>
      <div class="post__item-content">
        <p class="post__item-rating">Rating: ${this._restaurant.rating}</p>
        <h1 class="post__item-title">
          <a href="/#/detail/${this._restaurant.id}">
          ${this._restaurant.name}
          </a>
        </h1>
        <p class="post__item-description">${this._restaurant.description}</p>
      </div>
    </article>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
