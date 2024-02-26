import "./restaurant-item";

class RestaurantComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set listRestaurant(listRestaurant) {
    this._listRestaurant = listRestaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
      <h2>Explore Restaurant</h2>
      <div class="posts"></div>
    `;
    const postsElement = this.querySelector(".posts");
    this._listRestaurant.forEach((restaurant) => {
      const restaurantItemElement = document.createElement("restaurant-item");
      restaurantItemElement.item = restaurant;
      postsElement.appendChild(restaurantItemElement);
    });
  }
}

customElements.define("restaurant-component", RestaurantComponent);
