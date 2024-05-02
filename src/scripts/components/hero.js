class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="hero">
        <picture class="hero__image">
          <source media="(max-width: 440px)" srcset="./images/heros-responsive/hero-image-small.jpg" />
          <source media="(max-width: 780px)" srcset="./images/heros-responsive/hero-image-large.jpg" />
          <img src="./images/heros-responsive/hero-image-extra-large.jpg" alt="Hero image" />
        </picture>
        <div class="hero__inner">
          <h1 class="hero__title">Selamat datang di webiste delicious</h1>
          <p class="hero__tagline">
            Jelajahi semua restoran yang ada untuk menemukan pengalaman
            menyantap makanan dengan rasa yang khas dan lezat serta pelayanan
            yang memuaskan
          </p>
        </div>
      </section>
    `;
  }
}

customElements.define('hero-component', Hero);
