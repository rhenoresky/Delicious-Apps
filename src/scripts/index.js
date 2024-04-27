import 'regenerator-runtime';
import '../styles/app.css';
import '../styles/nav-bar.css';
import '../styles/hero.css';
import '../styles/restaurant.css';
import '../styles/detail.css';
import '../styles/loading.css';
import '../styles/responsive.css';
import './components/nav-bar';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App(document.querySelector('#mainContent'));

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

window.addEventListener('hashchange', () => {
  app.renderPage();
  scrollToTop();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});
