function pressedAgain() { // Creating a function called pressed again
    var x = "Yep..."; // Variable "x" will print "Yep..." when called
    x += "You definitely just touched my button. -_-" // Concantenating more words into the variable "x"
    x = x.fontcolor("purple"); //the text in variable "x" is purple
    document.getElementById("btn").innerHTML = x //Will locate element with id "btn" and will call variable "x" inside of said element
}