function bulbOn(){
    document.getElementById("bulb").src="bulb-on.jpg"
    // document.body.style.backgroundColor="black";
    document.getElementById("on-btn").disabled=true;
    document.getElementById("off-btn").disabled=false;
}
function bulbOff(){
    document.getElementById("bulb").src="bulb-off.jpg"
    document.body.style.backgroundColor="white";
    document.getElementById("off-btn").disabled=true;
    document.getElementById("on-btn").disabled=false;
}