jQuery("#stopButton").click(StopClick);
jQuery("#slowButton").click(SlowClick);
jQuery("#goButton").click(GoClick);

function StopClick (){
jQuery(".bulb").css("background","black");
jQuery("#stopLight").css("background","red");
}

//Implement the red light using jQuery. Don't forget to add the script tags.
//yellow
function SlowClick (){
jQuery(".bulb").css("background","black");
jQuery("#slowLight").css("background","yellow");
}
//green

function GoClick (){
jQuery(".bulb").css("background","black");
jQuery("#goLight").css("background","green");
}
