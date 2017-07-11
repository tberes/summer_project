$(document).ready(function() {
    $(".menu-btns").click(function () {
        var pageName = $(this).attr("id");

        $("#main-content").load("pages/" + pageName + ".html");

        if (windowWidth <= 640) {
            $("#menu-wrapper").animate({left: "100%"}, "1000");
            phMenu = 0;
            phCart = 0;
        }
    });
});