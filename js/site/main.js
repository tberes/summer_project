
$(document).ready(function(){
    $("#main-content").load("pages/home.html");

    var windowWidth = $(window).width();
    if (windowWidth > 640) {
        desktopCartClick();
    }
    else if(windowWidth <= 640) {
        menuClick();
        mobileCartClick();
    }
});