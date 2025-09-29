export { createSearchForm };

const body = document.querySelector("body");
const dialogCreate = document.createElement("dialog");
const formCreate = document.createElement("form");
const fieldSetCreate = document.createElement("fieldset");
const legendCreate = document.createElement("legend");
const labelCreate = document.createElement("label");
const inputCreate = document.createElement("input");
const divCreate = document.createElement("div");
const buttonCreate = document.createElement("button");
const pCreate = document.createElement("p");

function createDialog(parentDiv) {
  let cloneDialogCreate = dialogCreate.cloneNode(true);
  parentDiv.appendChild(cloneDialogCreate);
  return { cloneDialogCreate };
}

function createForm(parentDiv) {
  let cloneFormCreate = formCreate.cloneNode(true);
  parentDiv.appendChild(cloneFormCreate);
  return { cloneFormCreate };
}

function createFieldSet(form) {
  let cloneFieldSetCreate = fieldSetCreate.cloneNode(true);

  form.appendChild(cloneFieldSetCreate);
  return { cloneFieldSetCreate };
}

function createLegend(fieldset, text) {
  let cloneLegendCreate = legendCreate.cloneNode(true);
  cloneLegendCreate.textContent = text;
  console.log(cloneLegendCreate);
  fieldset.appendChild(cloneLegendCreate);
  return { cloneLegendCreate };
}

function createLabel(div, className, text) {
  let cloneLabelCreate = labelCreate.cloneNode(true);
  cloneLabelCreate.classList.add(className);
  cloneLabelCreate.textContent = text;
  div.appendChild(cloneLabelCreate);
  return { cloneLabelCreate };
}

function createInput(div, type, name) {
  let cloneInputCreate = inputCreate.cloneNode(true);
  cloneInputCreate.classList.add(name);
  div.appendChild(cloneInputCreate);
  cloneInputCreate.type = type;
  cloneInputCreate.setAttribute("name", name);

  return { cloneInputCreate };
}

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

function createSearchForm() {
  let searchDialog = createDialog(body);
  let searchForm = createForm(searchDialog.cloneDialogCreate);
  let formContentDiv = createDivSection(
    searchForm.cloneFormCreate,
    "formContentDiv",
  );
  createLabel(formContentDiv.cloneDivCreate, "search-label", "Search a Gif");
  createInput(formContentDiv.cloneDivCreate, "text", "search-input");
  createButton(formContentDiv.cloneDivCreate, "Search", "search-button");
}
