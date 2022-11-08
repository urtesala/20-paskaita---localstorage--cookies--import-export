"use strict";
console.log("edabit.js");

// Write a function redundant that takes in a string str and returns a function that returns str.

function redundant() {
  let string = "Hey There";
  function stringFunction() {
    console.log(string);
  }
  stringFunction();
}
redundant();

console.log("redundant ===", redundant);
