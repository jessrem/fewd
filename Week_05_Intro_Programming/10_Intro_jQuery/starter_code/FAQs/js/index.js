$("h2 + p") .hide();


$('#question1').on('click',openOne);
function openOne(){
	$("#answer1").toggle();
}

$('#question2').click(openTwo);
function openTwo(){
	$("#answer2").toggle();
}


$('#question3').click(openThree);
function openThree(){
	$("#answer3").toggle();
}