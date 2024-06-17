import { MENU_ITEMS } from "../data/MENU_ITEMS";
import addTextToDOM from "../helpers/addTextToDOM";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../assets/burgers/", false, /\.(png|jpe?g|svg)$/)
);

export default function menu() {
  const menu = document.createElement("div");
  menu.className = "menu";

  const menuTitle = document.createElement("h1");
  addTextToDOM(menuTitle, "Menu");
  menuTitle.className = "menu__title";
  menu.appendChild(menuTitle);

  const menuContainer = document.createElement("div");
  menuContainer.className = "menu__container";

  MENU_ITEMS.items.map((item) => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu__item";

    const menuItemTitle = document.createElement("h2");
    menuItemTitle.className = "menu__item-title";
    addTextToDOM(menuItemTitle, item.name + " " + item.price);

    const menuItemDescription = document.createElement("p");
    menuItemDescription.className = "menu__item-description";
    addTextToDOM(menuItemDescription, item.description);

    const menuItemImg = document.createElement("img");
    menuItemImg.className = "menu__item-image";
    menuItemImg.src = images[item.id];

    menuItem.appendChild(menuItemImg);

    const menuDescritionContainer = document.createElement("div");
    menuDescritionContainer.appendChild(menuItemTitle);
    menuDescritionContainer.appendChild(menuItemDescription);
    menuItem.appendChild(menuDescritionContainer);

    menuContainer.appendChild(menuItem);
  });

  menu.appendChild(menuContainer);
  return menu;
}

{
  /* <div class="menu">
  <h2 class="menu__title">Menu</h2>
  <div class="menu__container">
    <div class="menu__item">
      <h3 class="menu__item-title">NAGI INSTYNKT (33zł)</h3>
      <p class="menu__item-description">
        200 g/0.44 lb ground beef, burger sauce, pickles, red onion, iceberg
        lettuce + BBQ sauce, Coleslaw
      </p>
    </div>
    <div class="menu__item">
      <h3 class="menu__item-title">SIR BURGER (35zł)</h3>
      <p class="menu__item-description">
        200 g/0.44 lb ground beef, burger sauce, cheese, pickles, red onion,
        iceberg lettuce + BBQ sauce, Coleslaw
      </p>
    </div>
    <div class="menu__item">
      <h3 class="menu__item-title">MUPPET BURGER (38zł)</h3>
      <p class="menu__item-description">
        200 g/0.44 lb ground beef, burger sauce, cheese, bacon, jalapeno
        peppers, pickles, red onion, iceberg lettuce + BBQ sauce, Coleslaw
      </p>
    </div>
    <div class="menu__item">
      <h3 class="menu__item-title">HEART ATTACK (40zł)</h3>
      <p class="menu__item-description">
        200 g/0.44 lb ground beef, burger sauce, double cheese, double bacon,
        pickles, crisps, red onion, iceberg lettuce + BBQ sauce, Coleslaw
      </p>
    </div>
    <div class="menu__item">
      <h3 class="menu__item-title">SEX & VIOLENCE (40zł)</h3>
      <p class="menu__item-description">
        200 g/0.44 lb ground beef, burger sauce, cheese, mascarpone with herbs,
        bacon, rocket salad, pickles, red onion, iceberg lettuce + BBQ sauce,
        Coleslaw
      </p>
    </div>
    <div class="menu__item">
      <h3 class="menu__item-title">MAMAS, PAPAS & DUPAS BLADAS (40zł)</h3>
      <p class="menu__item-description">
        200 g/0.44 lb ground beef, burger sauce, cheese, bacon, chorizo sausage,
        pickles, red onion, iceberg lettuce + guacamole, Coleslaw
      </p>
    </div>
    <div class="menu__item">
      <h3 class="menu__item-title">SEKRET ZDZICHA (40zł)</h3>
      <p class="menu__item-description">
        200 g/0.44 lb ground beef, burger sauce, spinach fried with onion,
        cheese, bacon, sunny-side up, hollandaise sauce, pickles, red onion,
        iceberg lettuce + BBQ sauce, Coleslaw
      </p>
    </div>
    <div class="menu__item">
      <h3 class="menu__item-title">SMASHOS (40zł)</h3>
      <p class="menu__item-description">
        2 x 100 g/0.22 lb ground beef, burger sauce, double Cheddar cheese,
        double Mimolette cheese, double bacon, mustard, ketchup, grilled onion,
        iceberg lettuce, pickle + BBQ sauce, Coleslaw
      </p>
    </div>
  </div>
</div>; */
}
