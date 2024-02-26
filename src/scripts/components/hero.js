class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="hero">
        <div class="hero-inner">
          <h1 class="hero-title">Selamat datang di restoran delicious</h1>
          <p class="hero-tagline">
            Tersedia berbagai macam makanan lezat dan sehat untuk anda nikmati
            beserta keluarga sembari mempererat silaturahmi
          </p>
        </div>
      </section>
    `;
  }
}

customElements.define("hero-component", Hero);
