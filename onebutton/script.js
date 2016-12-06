window.addEventListener("load", doAllTheStuff);

//and here is all the stuff
function doAllTheStuff(){
    var btn = document.getElementById("btn");
    //prove we ahve access to the button
    btn.innerHTML = "Yes. you have access.";
    
    btn.addEventListener("mouseover", showEvent);
    btn.addEventListener("mouseout", showEvent);
    btn.addEventListener("mousedown", showEvent);
    btn.addEventListener("mouseup", showEvent);
    
    function showEvent(evt){
        btn.innerHTML = evt.target.id + ": " + evt.type;
    }
    
}