class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="/" class="logo">Delicious</a>
      <button class="mobile-menu" aria-label="mobile menu button" type="button">
        <span class="fa fa-bars"></span>
      </button>

      <div class="nav-container">
        <ul class="nav-list">
          <li class="nav-item"><a href="/">Home</a></li>
          <li class="nav-item"><a href="#">Favorite</a></li>
          <li class="nav-item">
            <a href="https://www.linkedin.com/in/rheno-resky-nugraha/" target="_blank">
              About Us
            </a>
          </li>
        </ul>
      </div>
    `;
  }
}

customElements.define("nav-bar", Navbar);
