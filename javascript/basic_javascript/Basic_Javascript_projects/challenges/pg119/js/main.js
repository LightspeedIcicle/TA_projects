function your_age() {
    var age, age_Answer;
    age = document.getElementById("age").value;
    age_Answer = (18 > age) ? "You're too young to vote.":"You're old enough";
    document.getElementById("age_Answer").innerHTML = age_Answer + "to vote.";

}