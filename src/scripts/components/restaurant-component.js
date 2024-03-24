import './restaurant-item';

class RestaurantComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set listRestaurant(listRestaurant) {
    this._listRestaurant = listRestaurant;
    this.render();
  }

  set heading(heading) {
    this._heading = heading;
    this.render();
  }

  render() {
    this.innerHTML = `
      <h2>${this._heading}</h2>
      <div class="post"></div>
    `;

    const postsElement = this.querySelector('.post');
    if (this._listRestaurant) {
      this._listRestaurant.forEach((restaurant) => {
        const restaurantItemElement = document.createElement('restaurant-item');
        restaurantItemElement.item = restaurant;
        postsElement.appendChild(restaurantItemElement);
      });
    }
  }
}

customElements.define('restaurant-component', RestaurantComponent);
