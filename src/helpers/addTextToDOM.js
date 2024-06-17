function addTextToDOM(element, text) {
  const newContent = document.createTextNode(text);
  return element.appendChild(newContent);
}

export default addTextToDOM;
