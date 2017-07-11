var windowWidth;

$(document).ready(function(){
    $("#main-content").load("pages/home.html");

    windowWidth = $(window).width();
    if (windowWidth > 640) {
        desktopCartClick();
    }
    else if(windowWidth <= 640) {
        menuClick();
        mobileCartClick();
    }
});