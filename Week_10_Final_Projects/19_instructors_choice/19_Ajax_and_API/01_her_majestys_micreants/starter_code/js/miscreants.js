// Create Global Variables
var currentNeighbourhood = null;
var endpoint = "https://data.police.uk/api/";
// Define Functions
// Get all neighborhoods in a region
function getNeighborhoods(selectedRegion) {
    // Sample url to call https://data.police.uk/api/leicestershire/neighbourhoods
    var requestURL = endpoint + selectedRegion + "/neighbourhoods";
console.log("The URL: " + requestURL);
    // Make the ajax Request
    jQuery.ajax({
        method: "GET",
        url: requestURL,
    })
        .done(function( data ) {
            // When done
            // Empty the neighborhood selector
            jQuery("#location").empty();
            // Loop through the results and populate the neighbourhood selector
            var newOption = "";
            jQuery(data).each(function(key,value){
                newOption = newOption + "<option value='" + value['id'] + "' selected>" + value['name'] +  "</option>";
            });
            jQuery("#location").append(newOption);
            // Get the first neighborhood and populate
            getOneNeighborhood(selectedRegion,data[0]['id']);
        })
        .fail(function(xhr, status, error) {
            //Ajax request failed.
        });
}
// Get the contact and location information AND the location
function getOneNeighborhood(selectedRegion,neighborhoodID){
    // Sample url to call https://data.police.uk/api/leicestershire/NC68
    // Make the ajax Request
    var requestURL = endpoint + selectedRegion + "/" + neighborhoodID;
    console.log(requestURL);
        jQuery.ajax({
            method: "GET",
            url: requestURL
        })
        .done(function(data){
            console.log(data);
            // When done
            // Set the currentNeighbourhood data
            currentNeighbourhood = data;
            // Empty the Definition List
            jQuery("#neighbourhoodInfo").empty();
            var newStuff = "";
            // Add the name
            newStuff = newStuff + "<dt>Name</dt><dd>" + data['name'] + "</dd>";
            // If url add url
            if(data['url_force'] != ""){
                newStuff = newStuff + '<dt>Force URL</dt><dd><a href="'+data['url_force'] + '" class="btn btn-primary btn-small">Force Information</a></dd>';
            }
            // If population add population
            if(data['population'] != 0){
                newStuff = newStuff + "<dt>Population</dt><dd>" + data['population'] +"</dd>";
            }
            jQuery("#neighbourhoodInfo").append(newStuff);
            // Load initial crime data
            getCrimes(currentNeighbourhood['centre']['latitude'],currentNeighbourhood['centre']['longitude'],jQuery("#year").val(),jQuery("#month").val());
            })
            .fail(function(xhr, status, error) {
            //Ajax request failed.
            });
}
// Get all crimes for a location by date
function getCrimes(lat,lng,year,month){
    // Sample URL to call https://data.police.uk/api/crimes-street/all-crime?lat=51.491082&lng=-0.111108&date=2017-01
    // Make the ajax Request
    var requestURL = endpoint + "crimes-street/all-crime?lat="+dog + "&lng=-0.111108&date=2017-01";
    //var requestURL = endpoint + selectRegion + "/" + neighborhoodID + "/" + 
    $.ajax({
        method: 'GET',
        url: requestURL
    })
            // When done
            // Empty the table body
                // Use google maps to create a link to that location
                // Add a table row
            // Append all the new rows
            //Ajax request failed.
}
jQuery(document).ready(function(){
    // Run when the page loads
    getNeighborhoods(jQuery("#region").val());
    //getCrimes(51.491082, -0.111108,2017,01);
    // Run when the forms are changed
    jQuery("#region").on("change",function(){
        getNeighborhoods(jQuery(this).val());
    });
    jQuery("#location").on("change",function(){
        getOneNeighborhood(jQuery("#region").val(),jQuery(this).val());
    });
    jQuery("#year").on("change",function(){
        var year = jQuery("#year").val();
        var month = jQuery("#month").val();
        console.log(currentNeighbourhood);
        var lat = currentNeighbourhood.centre.latitude;
        var lng = currentNeighbourhood.centre.longitude;
        getCrimes(lat,lng,year,month);
    });
    jQuery("#month").on("change",function(){
        var year = jQuery("#year").val();
        var month = jQuery("#month").val();
        var lat = currentNeighbourhood.centre.latitude;
        var lng = currentNeighbourhood.centre.longitude;
        getCrimes(lat,lng,year,month);
    });
});