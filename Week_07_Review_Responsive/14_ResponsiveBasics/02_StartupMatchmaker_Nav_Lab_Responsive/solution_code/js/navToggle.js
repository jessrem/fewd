jQuery(document).ready(function(){

    jQuery("#nav-toggle").on('click',function(e){
        e.preventDefault();

        jQuery(".main-nav").toggleClass("main-nav-mobilehide");

    });

});