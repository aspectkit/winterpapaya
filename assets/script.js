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



$('#home-link').click(function(){
    $('#home-link').addClass("shimmer");
    $('#home-link').css("color", "var(--white)");

    $('#comm-link').removeClass("shimmer");
    $('#comm-link').css("color", "var(--darkpink)");

    $('#contact-link').removeClass("shimmer");
    $('#contact-link').css("color", "var(--darkpink)");
});

$('#comm-link').click(function(){
    $('#comm-link').addClass("shimmer");
    $('#comm-link').css("color", "var(--white)");

    $('#home-link').removeClass("shimmer");
    $('#home-link').css("color", "var(--darkpink)");
    

    $('#contact-link').removeClass("shimmer");
    $('#contact-link').css("color", "var(--darkpink)");
});

$('#contact-link').click(function(){
    $('#contact-link').addClass("shimmer");
    $('#contact-link').css("color", "var(--white)");

    $('#home-link').removeClass("shimmer");
    $('#home-link').css("color", "var(--darkpink)");

    $('#comm-link').removeClass("shimmer");
    $('#comm-link').css("color", "var(--darkpink)");
    
});


