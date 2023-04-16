let spot = "welcome"
$('#logo-btn').click(function() {
    $('#welcome-btn').fadeIn('slow');
    fadOutContent();
    spot = "welcome"
})

function fadeInContent(){
    //TODO: create navbar where logo is with sections for home (show works), commissions (assuming this is price sheet), and contact page
    $('#navdisplay').fadeIn('slow');
}

function fadOutContent(){
    $('#navdisplay').fadeOut('fast');
}




$('#welcome-btn').click(function() {
    spot = "home";
    $('#welcome-btn').fadeOut('slow');
    fadeInContent();
});



