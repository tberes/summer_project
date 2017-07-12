var windowWidth;

$(document).ready(function(){
    var pageName = window.location.hash.slice(1);

    if (pageName === "") {
        pageName = "home";
    }
    $("#main-content").load("pages/" + pageName + ".html");

    windowWidth = $(window).width();
    if (windowWidth > 640) {
        desktopCartClick();
    }
    else if(windowWidth <= 640) {
        menuClick();
        mobileCartClick();
    }
});