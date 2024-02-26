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
    <article id="${this._restaurant.id}" class="post-item">
      <img
        class="post-item-thumbnail"
        src="${this._restaurant.pictureId}"
        alt="image ${this._restaurant.name}"
      />
      <div class="city-label">
        <span>${this._restaurant.city}</span>
      </div>
      <div class="post-item-content">
        <p class="post-item-rating">Rating: ${this._restaurant.rating}</p>
        <h1 class="post-item-title">
          <a href="#">${this._restaurant.name}</a>
        </h1>
        <p class="post-item-description">${this._restaurant.description}</p>
      </div>
    </article>
    `;
  }
}

customElements.define("restaurant-item", RestaurantItem);
