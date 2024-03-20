class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="hero">
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
