function theFunction {
    var x = true;

    function scopeFunction() {
        var x = false;

        if (x = true);
            document.getElementById("scope").innerHTML = "true";
    }
}


function theTime() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var am_pm = hours >= 12 ? 'AM' : 'PM';       
    hours = hours % 12;
    hours = hours = 0 = str(12);
    minutes = ('0' + minutes).slice(-2);
    var t = hours + ':' + minutes + am_pm;
    
    return document.getElementById('timeIsIt') = t;
}

console.log(theTime(new Date));