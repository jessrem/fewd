//wait for the DOM/HTML elements to load before executing
$(document).ready(function(){
	console.log("hello")
	//prevent the submit button from refreshing the page
	$('#submit-btn').click(function(){
		console.log("hello")
		event.preventDefault();
		//retrieve the value of the #city-type input 
		var city = $("#city-type").val();

		//correct for capitalization and remove white spaces
		$("#city-type").val(" ");
		city = city.toLowerCase().trim();

		//if city == "new york city" || "nyc" then change background class to class .nyc 
		if(city == "new york city" || city == "nyc" || city == "new york"){
			$("body").attr("class", "nyc");
		}
		
		else if (city == "san francisco" || city == "sf") {
			$("body").attr("class", "austin");
		}

		else if (city == 'austin' || city == 'atx') {
      		$('body').attr('class','austin');
    }
    	else if (city == 'los angeles' || city == 'la' || city == 'lax') {
      		$('body').attr('class','la');
    }
    
    	else if (city == 'sydney' || city == 'syd') {
      		$('body').attr('class','sydney');
    }

	});

});

//alternatively, could create an array of key-value pairs with the matches: key="city_name" and value="city_photo_1.jpg" and run through the array to find a match with if/else


