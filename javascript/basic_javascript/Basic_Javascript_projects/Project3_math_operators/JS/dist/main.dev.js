"use strict";

function addition() {
  var a = 1 + 1;
  document.getElementById("Math").innerHTML = a;
}

function subtraction() {
  var b = 2 - 4;
  document.getElementById("Subtract").innerHTML = b;
}

function multiplication() {
  var c = -2 * 6;
  document.getElementById("Multiply").innerHTML = c;
}

function division() {
  var d = -12 / 2;
  document.getElementById("Divide").innerHTML = d;
}

function all_together() {
  var combo = (1 + 1 - 4) * 6 / 2;
  document.getElementById("together").innerHTML = combo;
}

function modJealous() {
  var mod = -6 % -5;
  document.getElementById("modSquad").innerHTML = mod;
}

function up_down(num) {
  var y = num++;
  var z = num--;
  document.getElementById("inc_dec").innerHTML = y + " | " + z;
}

function win() {
  window.alert(Math.random() * 100);
}

function power() {
  document.getElementById("exp").innerHTML = Math.pow(4, 3);
}