function my_dictionary() {
    var Socks = {
        Color: "White",
        Material: "Cotton",
        Style: "No show",
        Pattern: "Solid"
    };
    delete Socks.Color;
    document.getElementById("Dictionary").innerHTML = Socks.Color;
}