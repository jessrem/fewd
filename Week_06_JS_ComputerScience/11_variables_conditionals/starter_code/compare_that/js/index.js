//On click on compare button run code that:
$("submit").click(function(){

// Create a default value
var compareMessage = "N/A";

//Get the inputs and store in variables
var a = $("#a").val();
var b = $("#b").val();

a = parseFloat(a);
b = parseFloat(b);

// Compare the variables to see which is greater and create the comparison message
if(a === b){
	compareMessage = "=";
}
else if (a < b) {
	compareMessage = "<";
}
else if (a > b) {
	compareMessage = ">";
}

// Update the comparison message in the html
$("comparison").text(compareMessage);




















});