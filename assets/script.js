let spot = "welcome";
let homeEl = document.getElementById("home-link");
var clickEvent = new MouseEvent("click", {
    "view": window,
    "bubbles": true,
    "cancelable": false
});

$('#logo-btn').click(function() {
    $('#welcome-btn').fadeIn('slow');
    fadOutContent();
    spot = "welcome"
})

function fadeInContent(){
    //TODO: create navbar where logo is with sections for home (show works), commissions (assuming this is price sheet), and contact page
    $('#navdisplay').fadeIn('slow');
    homeEl.dispatchEvent(clickEvent);

    $('#toggle').css("position", "fixed");
    $('#toggle').css("top", "15px");
    $('#toggle').css("left", "45px");
    $('#toggle').css("height", "50px");
    $('#toggle').css("width", "50px");
    $('#toggle-label').text("");
    $('#toggle').fadeIn('slow');
}

function fadOutContent(){
    $('#navdisplay').fadeOut('fast');
}




$('#welcome-btn').click(function() {
    spot = "home";
    $('#welcome-btn').fadeOut('slow');
    // $('#toggle').fadeOut('slow');
    // $('#toggle-snow').fadeOut('slow');
    // $('#toggle-label').fadeOut('slow');
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


