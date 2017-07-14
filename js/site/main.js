
$(document).ready(function(){
    var windowWidth = $(window).width();
    if (windowWidth > 640) {
        desktopCartClick();
        console.log("desktop");
    }
    else if(windowWidth <= 640) {
        menuClick();
        mobileCartClick();
        console.log("mobile");
    }
});