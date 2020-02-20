//Create variables to store images, increment variable, and a maximum images variable.
var myImages = ["images/animal1.jpg", 
				"images/animal2.jpg",
				"images/animal3.jpg",
				"images/animal4.jpg",
				"images/animal5.jpg",
				"images/animal6.jpg",
				"images/animal7.jpg"];

var currentImage = 0;

var maxImage = myImages.length - 1;


//Event listeners.
jQuery(document).ready(function(){
    //Next image click.
    $("#back").click(function(){
    	currentImage = currentImage - 1;

	if (currentImage < 0) {
	currentImage = maxImage;
    }
    $("#image-to-vote-on").attr("src",myImages[currentImage]);

});

    //Previous image click.
 $("#next").click(function(){
    	currentImage = currentImage + 1;

    	if (currentImage > maxImage) {
	currentImage = 0;
}
$("#image-to-vote-on").attr("src",myImages[currentImage]);
    });
})