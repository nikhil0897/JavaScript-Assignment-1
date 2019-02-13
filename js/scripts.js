/*!
    I created this JavaScript file in order to get the webpage a little more functional.
    I have added some animations as well which you might have noticed while
    navigating to different sections of the web page using the navigation
    bar present at the top of the page.

    Description: This file contains all the scripts associated with the web page.
    portfolio website.
*/

(function($) {

    // Remove no-js class
    $('html').removeClass('no-js');

    // Animate to section when nav is clicked
    $('header a').click(function(e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll to first element
    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Open mobile menu
    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });

    // Load additional projects
    $('#view-more-projects').click(function(e){
        e.preventDefault();
        $(this).fadeOut(300, function() {
            $('#more-projects').fadeIn(300);
        });
    });
    
})(jQuery);

function toggleAddModal() {
    var check = document.getElementById("modalDefaultContactForm");
    console.log("Button click: " + check.style.display);
    if (check.style.display == "") {
        console.log("setting block");
        check.style.display = "block";
    } 
    else {
        check.style.display = "";
        console.log("setting none");
    }
}
function toggleEditModal() {
    var check = document.getElementById("editModal");
    if (check.style.display == "none") {
        check.style.display = "block";
    }
    else {
        check.style.display = "none";
    }
}

var galleryObject, output;
$.getJSON("galleryImages.json", function(data){
    galleryObject = data;
    galleryObject.images.forEach(function(obj) {
        addNewModel(obj.imageUrl, obj.youtubeLink);
    });
});

function addNewModel(imageUrl, youtubeLink) {
    var containerDiv = document.getElementById("galleryContainer");
    var firstDiv = document.createElement("div");
    firstDiv.setAttribute("class", "gallery-image");
    firstDiv.setAttribute("style", "width: 25%;");
    containerDiv.appendChild(firstDiv);
    var movieTrailer = document.createElement("a");
    movieTrailer.setAttribute("href", youtubeLink);
    firstDiv.appendChild(movieTrailer);
    var galleryImage = document.createElement("img");
    galleryImage.setAttribute("src", imageUrl);
    galleryImage.setAttribute("width","200");
    galleryImage.setAttribute("height","300");
    var overlayDiv = document.createElement("div");
    overlayDiv.setAttribute("class", "overlay");
    overlayDiv.innerHTML = "Click to play the trailer";
    movieTrailer.appendChild(galleryImage);
    movieTrailer.appendChild(overlayDiv);
}