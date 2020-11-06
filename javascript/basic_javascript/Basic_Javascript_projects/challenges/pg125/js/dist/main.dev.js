"use strict";

function House(Style, Material, Color, Number_of_rooms) {
  this.House_Style = Style;
  this.House_Material = Material;
  this.House_Color = Color;
  this.House_Number_of_rooms = Number_of_rooms;
}

var John = new House("Open Concept", "Wood", "Blue", "4");

function Houses() {
  document.getElementById("type_home").innerHTML = "John has a " + John.House_Style + " house made of " + John.House_Material + "." + " Its painted " + John.House_Color + " and has " + John.House_Number_of_rooms + " bedrooms.";
}