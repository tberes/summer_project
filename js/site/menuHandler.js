$(document).ready(function() {
    $(window).bind('hashchange', function () {
        var pageName = window.location.hash.slice(1);

        $("#main-content").load("pages/" + pageName + ".html");

        if (windowWidth <= 640) {
            $("#menu-wrapper").animate({left: "100%"}, "1000");
            phMenu = 0;
            phCart = 0;
        }

        $('#main-content').animate({ scrollTop: 0 }, 'slow');
    });
});