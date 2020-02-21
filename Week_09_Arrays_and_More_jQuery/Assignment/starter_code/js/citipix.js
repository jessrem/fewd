//wait for the DOM/HTML elements to load before executing
$(document).ready(function(){

//create an array with the city values
// var cities = ["NYC","SF","LA","ATX","SYD"];

//write a for loop to add values to the dropdown menu (or I'll just type them manually in the html)
//var = x;
//for(x=0;x<cities.length;x++){
//	$("#city-type").append("option value" + ) }

$("form").on("change","#city-type",function(){
	var city = $("#city-type").val();

	if(city == "nyc"){
		$("body").attr("class","nyc");
			console.log("hello")
	}

	else if(city == "sf"){
		$("body").attr("class","sf");
	}

	else if(city == "la"){
		$("body").attr("class","la");
	}

	else if(city == "atx"){
		$("body").attr("class","austin");
	}

	else if(city == "syd"){
		$("body").attr("class","sydney");
	}

});
});