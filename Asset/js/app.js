$(document).ready(function() {
    $(".navbar-toggler, .overlay-container, .toggler-button").on("click", function(){
        $(".mobileMenu, .overlay-container, .toggler-button").toggleClass("open");
    });
});