"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

document.write(_typeof(6), " ", 3E409, " ", -3E409, " ", 1 > 2, " ", 1 < 2, " ", "4" + 6, " ", "| 1 == 1 is ", 1 == 1, " ", "| 1 == 2 is ", " ", 1 == 2); //Using various coercion types

function trip_a() {
  // is the same type bc num and num
  document.getElementById("aa").innerHTML = 1 === 1;
}

function trip_b() {
  //Returns false bc num and string
  document.getElementById("bb").innerHTML = 1 === "blue";
}

function trip_c() {
  document.getElementById("cc").innerHTML = 1 === "one";
}

function trip_d() {
  document.getElementById("dd").innerHTML = 1 === 2;
}

function a_n_d() {
  // True to both
  document.getElementById("and_op").innerHTML = 3 > 1 && 3 > 2;
}

function o_r() {
  // false 1 not greater than 2
  document.getElementById("or_op").innerHTML = 1 >= 1 || 1 >= 2;
}

function n_o_t() {
  // True 10 is not 100
  var a = 100;
  document.getElementById("not_op").innerHTML = a != 10;
}

console.log(1 + 1);