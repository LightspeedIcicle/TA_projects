"use strict";

function numitsnot() {
  document.getElementById("notanum").innerHTML = 0 / 0;
  document.getElementById("truenum").innerHTML = isNaN("a");
  document.getElementById("falsenum").innerHTML = isNaN(3);
}