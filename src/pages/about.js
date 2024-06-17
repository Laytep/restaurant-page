import { ABOUT_INFO } from "../data/ABOUT_INFO";
import addTextToDOM from "../helpers/addTextToDOM";

export default function about() {
  if (!ABOUT_INFO) {
    return "Error";
  }

  const about = document.createElement("div");
  about.className = "about";

  const aboutHeader = document.createElement("h1");
  aboutHeader.className = "about__header";
  addTextToDOM(aboutHeader, ABOUT_INFO.about.header);

  about.appendChild(aboutHeader);

  const aboutHours = document.createElement("div");
  aboutHours.className = "about__hours";

  ABOUT_INFO.about.hours.forEach((hours) => {
    const element = document.createElement("p");
    addTextToDOM(element, hours);

    aboutHours.appendChild(element);
  });

  about.appendChild(aboutHours);

  const aboutContactHeader = document.createElement("h1");
  aboutContactHeader.className = "about__header";
  addTextToDOM(aboutContactHeader, "Contact");
  about.appendChild(aboutContactHeader);

  const aboutContact = document.createElement("div");
  aboutContact.className = "about__contact";

  ABOUT_INFO.about.contact.forEach((contactItem) => {
    const contactElement = document.createElement("p");
    addTextToDOM(contactElement, contactItem);

    aboutContact.appendChild(contactElement);
  });

  about.appendChild(aboutContact);

  return about;
}
