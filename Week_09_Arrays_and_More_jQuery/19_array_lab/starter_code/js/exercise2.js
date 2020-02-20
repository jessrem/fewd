    // Create the overall function
function selectPet(petType){


   // Create a variable to use for the selected pet
   var currentPet = petData[petType];


    // Set the title
    $(".petDisplayName").text(currentPet["displayName"]);

    // Empty the data for the Data Specs block
    $(".petsDataSpecs").empty();

    // Create new variables for the values in the Data Specs block: size, weight, trainability
    var currentSize = currentSize + "<dt>Size</dt><dd>"+currentPet.size+"</dd>";
        $(".petsDataSpecs").append(currentSize);

    var currentWeight = currentWeight + "<dt>Weight</dt><dd>"+currentPet.weight+"</dd>";
            $(".petsDataSpecs").append(currentWeight);

    var currentSpaceReq = currentSpaceReq + "<dt>Space Required</dt><dd>"+currentPet.spaceRequired+"</dd>";
            $(".petsDataSpecs").append(currentSpaceReq);

    if(currentPet.trainability == true){
        var currentTrainability = currentTrainability("<dt>Trainable</dt><dd><img class='checkmark' src='img/200px-Gnome-emblem-default.svg.png' alt='Yes'</dd>");
    }
        else { 
            var currentTrainability = currentTrainability("<dt>Trainable</dt><dd><img class='checkmark' src='img/200px-Gnome-emblem-unreadable.svg.png' alt='No'</dd>");
        }

        $(".petsDataSpecs").append(currentTrainability);

    if(currentPet.fitsOnLap == true){
        var currentfitsOnLap = currentfitsOnLap("<dt>Fits on Lap</dt><dd><img class='checkmark' src='img/200px-Gnome-emblem-default.svg.png' alt='Yes'</dd>");
    }
        else { 
            var currentfitsOnLap = currentfitsOnLap("<dt>Fits on Lap</dt><dd><img class='checkmark' src='img/200px-Gnome-emblem-unreadable.svg.png' alt='No'</dd>");
        }

        $(".petsDataSpecs").append(currentfitsOnLap);

    
    // Create new variables for the values in the Foods
    


    // Update the images

        // Set the main image

        // Empty the thumbnails
    
        // Add the thumbnails


        // Apply the click event to thumbnails

    // Empty the ideal for

    // Insert the ideal for
 

    // Empty the Adoption Groups

    // Add the adoption groups


    // end selectPet
}