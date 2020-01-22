document.getElementById('stopButton').onclick = illuminateRed;
document.getElementById('slowButton').onclick = illuminateYellow;
document.getElementById('goButton').onclick = illuminateGreen;




function illuminateRed() {
document.getElementById('stopLight').style.backgroundColor="red";
document.getElementById('slowLight').style.backgroundColor="black";
document.getElementById('goLight').style.backgroundColor="black";

}




function illuminateYellow() {
  document.getElementById('stopLight').style.backgroundColor="black";
  document.getElementById('slowLight').style.backgroundColor="yellow";
  document.getElementById('goLight').style.backgroundColor="black";

}

function illuminateGreen() {
  document.getElementById('stopLight').style.backgroundColor="black";
  document.getElementById('slowLight').style.backgroundColor="black";
  document.getElementById('goLight').style.backgroundColor="green";

}

function clearLights() {

}
