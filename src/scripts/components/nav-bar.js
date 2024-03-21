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

      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item"><a href="/">Home</a></li>
          <li class="nav__item"><a href="#/favorite">Favorite</a></li>
          <li class="nav__item">
            <a href="https://www.linkedin.com/in/rheno-resky-nugraha/" target="_blank">
              About
            </a>
          </li>
          <li class="nav__item">
          <button class="btn-close" aria-label="close button" type="button">
            <span class="fa fa-close"></span>
          </button></li>
        </ul>
      </nav>
    `;

    const menu = this.querySelector('.mobile-menu');
    const close = this.querySelector('.btn-close');
    const navContainer = this.querySelector('.nav');

    menu.addEventListener('click', (event) => {
      navContainer.classList.toggle('open');
      event.stopPropagation();
    });

    close.addEventListener('click', () => {
      navContainer.classList.remove('open');
    });

    window.addEventListener('scroll', () => {
      navContainer.classList.remove('open');
    });

    window.addEventListener('hashchange', () => {
      navContainer.classList.remove('open');
    });
  }
}

customElements.define('nav-bar', Navbar);
