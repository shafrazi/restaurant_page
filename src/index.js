import {
  renderHero,
  renderMain,
  renderAbout,
  renderContact,
} from "./modules/home";

import { renderAboutPage } from "./modules/nav";

const navAbout = document.querySelector("#nav-about");

renderHero();
renderMain();
renderAbout();
renderContact();

navAbout.addEventListener("click", renderAboutPage);
