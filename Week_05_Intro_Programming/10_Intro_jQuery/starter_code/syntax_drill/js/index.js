jQuery(document).ready(function(){

    
    // When purple box is clicked, set all paragraphs to be purple
$("#purpleBox").click(PurpleClick);
	function PurpleClick(){
		console.log("im here")
		$("p").css("color","purple");
	}


    // When the blue box is clicked set the hipster paragraph to have white text with a blue background.  All other paragraphs should be black
$("#blueBox").click(BlueClick);
	function BlueClick(){
		console.log("hola")
		$("p").css("color","black");
		$("p.hipsterSpeak").css("background-color","blue",)
		$("p.hipsterSpeak").css("color","white",);

	}

    // When the red box is clicked set the list items toggle red background and white text on and off

    $("#redBox").click(RedClick);
    function RedClick(){
    	console.log("herro")
    	$("ul").toggleClass("redForm");
    }

    // When any of the boxes are clicked, add a 6px solid black bottom border
$(".boxes").click(BlackBorder);
function BlackBorder(){
	console.log("hi there")
	$(".boxes").toggleClass("addBorder");
}


});