"use strict";
console.log("main.js");

const set1El = document.getElementById("set1");
const get1El = document.getElementById("get1");

// const userId = 12232;

set1El.addEventListener("click", () => {
  console.log("paspaudei");
  //   localStorage.setItem("user", userId);
});

get1El.addEventListener("click", () => {
  //iskonsolinti user1id
  console.log("user id: 12235");
});
