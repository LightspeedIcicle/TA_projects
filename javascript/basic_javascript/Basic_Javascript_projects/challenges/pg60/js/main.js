function push() {
    
    var vid = document.getElementById("video");
    
    //Status of video visibility
    var showVid = vid.style.display;

    
    var pushButton = document.getElementById("pushButton");

    if(showVid == 'none') {
        //If video is hidden make video visible
        vid.style.display = 'block';
        //change button text
        pushButton.innerHTML = "Click again to  close";  
    }
    else {
        vid.style.display = 'none';
        //change back to hidden video
        pushButton.innerHTML = 'The time has come to...' /n 'Push the button';
                                    
    }
}

