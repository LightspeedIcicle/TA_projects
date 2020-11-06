function Ride_Function() { 
    var Height, Can_ride;
    Height = document.getElementById("Height").value;    //store the value from the variable Height that was entered into the input on the page
    Can_ride = (Height < 52)?  Height + "cm is too short":Height + "cm is tall enough";  //Takes height's value and compare it to the number 52. Essentially creating an if statement.
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."
             
}

    function Rider(Gender, Age, State, City) {    //Creating a constructor for the object Rider
        this.Rider_Gender = Gender;
        this.Rider_Age = Age;
        this.Rider_State = State;
        this.Rider_City = City;
    }




var Person = new Rider("Female", 17, "Idaho", "Boise");      //Creating a new  object rider called Person

function Rider_Info() {               //Calling from the created object to concatenate a reply after hitting a button on the page
    document.getElementById("New_and_This").innerHTML = "The Rider is a " + Person.Rider_Age + " year old. They are from " + Person.Rider_City + ", " + Person.Rider_State;
    function info() {
        var x = Person.Rider_Gender;
        document.getElementById("Nested_Function").innerHTML = x;
    }
}    

