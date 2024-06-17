import addTextToDOM from "../helpers/addTextToDOM";

const DESCRIPTION_TEXT = `All the burgers are prepared daily, on the spot with freshly
seasonal ground beef of the highest quality - the Charolais breed.
Our rolls are enriched by dietary fiber. We throw our own BBQ sauce
and coleslaw into the burgers. Steaks cut from maturing race
Hereford. Homemade fries fried in oil – WE DO NOT FILTER – we
exchange it. Just like that… And additionally we have soft taco with
beef or chicken`;

const NEWS_DESCRIPTION_TEXT = `Welcome to the new edition limited from 3rd June`;

const INFO_HEADING_TEXT = `True story bro`;

function home() {
  const home = document.createElement("div");
  home.className = "home";

  const homeLogo = document.createElement("div");
  homeLogo.className = "home__logo";
  home.appendChild(homeLogo);

  const homeInfo = document.createElement("div");
  homeInfo.className = "home__info";

  const homeInfoHeading = document.createElement("h1");
  homeInfoHeading.className = "home__info-heading";
  addTextToDOM(homeInfoHeading, INFO_HEADING_TEXT);
  homeInfo.appendChild(homeInfoHeading);

  const homeInfoDescription = document.createElement("p");
  homeInfoDescription.className = "home__info-description";
  addTextToDOM(homeInfoDescription, DESCRIPTION_TEXT);
  homeInfo.appendChild(homeInfoDescription);

  const homeNews = document.createElement("div");
  homeNews.className = "home__news";

  const homeNewsHeading = document.createElement("h2");
  addTextToDOM(homeNewsHeading, "News");
  homeNewsHeading.className = "home__news-heading";

  const homeNewsDescription = document.createElement("p");
  addTextToDOM(homeNewsDescription, NEWS_DESCRIPTION_TEXT);
  homeNewsDescription.className = "home__news-description";

  homeNews.appendChild(homeNewsHeading);
  homeNews.appendChild(homeNewsDescription);

  home.appendChild(homeInfo);
  home.appendChild(homeNews);

  return home;
}

export default home;

{
  /* <div class="home">
<div class="home__logo"></div>
<div class="home__info">
  <h1 class="home__info-heading">Tru story bro</h1>
  <p class="home__info-description">
    All the burgers are prepared daily, on the spot with freshly
    seasonal ground beef of the highest quality - the Charolais breed.
    Our rolls are enriched by dietary fiber. We throw our own BBQ sauce
    and coleslaw into the burgers. Steaks cut from maturing race
    Hereford. Homemade fries fried in oil – WE DO NOT FILTER – we
    exchange it. Just like that… And additionally we have soft taco with
    beef or chicken
  </p>
</div>
<div class="home__news">
  <h2 class="home__news-heading">News</h2>
  <p class="home__news-description">
    Welcome to the new edition limited from 3rd June
  </p>
</div>
</div> */
}
