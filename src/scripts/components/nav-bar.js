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

      <nav class="nav-container">
        <ul class="nav-list">
          <li class="nav-item"><a href="/">Home</a></li>
          <li class="nav-item"><a href="#">Favorite</a></li>
          <li class="nav-item">
            <a href="https://www.linkedin.com/in/rheno-resky-nugraha/" target="_blank">
              About
            </a>
          </li>
          <li class="nav-item">
          <button class="btn-close" aria-label="close button" type="button">
            <span class="fa fa-close"></span>
          </button></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define("nav-bar", Navbar);
