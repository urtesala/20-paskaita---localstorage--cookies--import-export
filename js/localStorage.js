"use strict";
console.log("main.js");

const set1El = document.getElementById("set1");
const set2El = document.getElementById("set2");
const get1El = document.getElementById("get1");
const get2El = document.getElementById("get2");

const user1Id = "u1234";

set1El.addEventListener("click", () => {
  console.log("paspaudei");
  localStorage.setItem("user", user1Id);
});

get1El.addEventListener("click", () => {
  // iskonsolinti user1Id
  const userIdInLocal = localStorage.getItem("user");
  if (userIdInLocal !== null) {
    console.log("userIdInLocal ===", userIdInLocal);
  } else {
    console.log("user not found");
  }
});

const todoArr = [
  { title: "do sports", done: false },
  { title: "buy bananas", done: true },
  { title: "see birds", done: false },
];

console.log(JSON.stringify(todoArr, null, 2));

set2El.addEventListener("click", () => {
  console.log("paspaudei arr");
  // pries dedami masyva ar objekta i localstorage, turim paversi ji i texta
  const todosJson = JSON.stringify(todoArr);
  // jsonines masyvo formos duomenis dedam i localstorage
  localStorage.setItem("todos", todosJson);
  document.body.append(todosJson);
});

get2El.onclick = function () {
  const todosInJson = localStorage.getItem("todos");
  // console.log('todosInJson ===', todosInJson);
  // gauta jsonine duomenu versi pasiversti atgal i js  JSON.parse()
  const todosInJs = JSON.parse(todosInJson);
  console.log("todosInJs ===", todosInJs);
};

// localStorage.removeItem('user') // pasalina elementa
// localStorage.clear() // istrina visa localstorage info
