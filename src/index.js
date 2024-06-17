import "./styles.css";

const { default: about } = require("./pages/about");
const { default: home } = require("./pages/home");
const { default: menu } = require("./pages/menu");

const content = document.getElementById("content");
const buttons = document.querySelectorAll(".header__navigation-button");
let currentPage;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const page = e.target.id;

    if (page !== currentPage) {
      switchPages(page);
      currentPage = page;
    }
  });
});

const homeItem = home();
const menuItem = menu();
const aboutItem = about();

function initPage() {
  content.appendChild(homeItem);
  currentPage = "home";
}

initPage();

function switchPages(pageId) {
  switch (pageId) {
    case "home":
      content.replaceChildren(homeItem);
      break;
    case "menu":
      content.replaceChildren(menuItem);
      break;
    case "about":
      content.replaceChildren(aboutItem);
      break;
    default:
      content.replaceChildren(homeItem);
  }
}
