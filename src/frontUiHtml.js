export { createFrontUi };

const body = document.querySelector("body");
const divCreate = document.createElement("div");
const buttonCreate = document.createElement("button");
const pCreate = document.createElement("p");
const imageCreate = document.createElement("IMG");

function createDivSection(parentDiv, className) {
  let cloneDivCreate = divCreate.cloneNode(true);
  cloneDivCreate.classList.add(className);
  parentDiv.appendChild(cloneDivCreate);
  return { cloneDivCreate };
}

function createButton(div, buttonText, buttonClass) {
  let cloneButtonCreate = buttonCreate.cloneNode(true);
  cloneButtonCreate.innerText = buttonText;
  cloneButtonCreate.classList.add(buttonClass);
  div.appendChild(cloneButtonCreate);
  return { cloneButtonCreate };
}

function createP(div, pText, pClass) {
  let clonePCreate = pCreate.cloneNode(true);
  clonePCreate.innerText = pText;
  clonePCreate.classList.add(pClass);
  div.appendChild(clonePCreate);
}

function createImage(div, imgClass) {
  let cloneImageCreate = imageCreate.cloneNode(true);
  cloneImageCreate.classList.add(imgClass);
  cloneImageCreate.src = "#";
  div.appendChild(cloneImageCreate);
}

function createFrontUi() {
  let parentDiv = createDivSection(body, "parent-div");
  let topSearchSection = createDivSection(
    parentDiv.cloneDivCreate,
    "top-search-section",
  );
  let randomBtn = createButton(
    topSearchSection.cloneDivCreate,
    "Random Gif",
    "random-gif-btn",
  );
  let imageDisplayDiv = createDivSection(
    parentDiv.cloneDivCreate,
    "image-display-div",
  );

  let displayImg = createImage(imageDisplayDiv.cloneDivCreate, "displayImg");
}
