import { Navbar, initNavbar } from './components/Navbar.js';
import { Hero } from './components/Hero.js';
import { Services } from './components/Services.js';
import { Authority } from './components/Authority.js';
import { Footer } from './components/Footer.js';

const app = document.querySelector('#app');
if (app) {
  app.innerHTML = `
    ${Navbar()}
    <main>
      ${Hero()}
      ${Services()}
      ${Authority()}
    </main>
    ${Footer()}
  `;

  initNavbar();
}
