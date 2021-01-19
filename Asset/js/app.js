$(document).ready(function() {
    $(".navbar-toggler, .overlay, .toggler-button").on("click", function(){
        $(".mobileMenu, .overlay, .toggler-button").toggleClass("open");
    });
});