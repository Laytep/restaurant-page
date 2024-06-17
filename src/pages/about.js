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

{
  /* <div class="about">
  <h1 class="about__header">Contact</h1>
  <div class="about__hours">
    <p>Mon-Fri: 12:00-21:30 (order up to 21:30)</p>
    <p>Sat: 13:00-21:30 (order up to 21:30)</p>
    <p>Sun: 13:00-20:30 (order up to 20:30)</p>
  </div>
  <div class="about__contact">
   
    <p>Warsaw st. Chmilena 9</p>
    <p>Tel: 888 111 542</p>
    <p>barneyburger@barneyburger.pl</p>
  </div>
</div>; */
}
