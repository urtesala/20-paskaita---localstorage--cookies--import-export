"use strict";
console.log("practice.js");

const nameInputEl = document.getElementById("nameInput");
const nameChangeBtnEl = document.getElementById("nameChangeBtn");

initNames();

nameChangeBtnEl.addEventListener("click", () => {
  console.count("click");
  const inputElValue = nameInputEl.value.trim();
  // add to local storage as name
  localStorage.setItem("name", inputElValue);
  // add name to h1
  addNameToH1(inputElValue);
  // add name to title
  addNameToTitle(inputElValue);
});

function addNameToH1(newName) {
  document.querySelector("h1").textContent = newName;
}

function addNameToTitle(newName) {
  document.title = newName;
}

// Puslapiui is naujo uzsikrovus patikrinti ar turim reiksme localstorage, jei turim ja irasom i dokutmento title ir h1 elementa.
function initNames() {
  const foundName = localStorage.getItem("name");
  if (foundName !== null) {
    addNameToH1(foundName);
    addNameToTitle(foundName);
  }
}

//  2 uzd select colors =================================================
// =======================================================================
const selectEl = document.getElementById("colorSelect");

const colors = ["tomato", "blue", "green", "yellow"];

const makeOneOpt = (optionName, father) => {
  const optEl = document.createElement("option");
  optEl.value = optionName;
  optEl.textContent = optionName;
  // console.log('optEl ===', optEl);
  father.append(optEl);
};
// makeOneOpt('tomato', document.body);

// dinamiskai generuojam opt pasirinkimus Select elemente
colors.forEach((color) => makeOneOpt(color, selectEl));

// sekti pasirinkima, kai ivyksta pasirinkimas norim nudazyti body background pasirinkta spalva (value)
selectEl.addEventListener("change", (event) => {
  // gauti pasirinkimo reiksme
  console.log(selectEl.value);
  // console.log(event.target.value);
  document.body.style.backgroundColor = selectEl.value;
});
