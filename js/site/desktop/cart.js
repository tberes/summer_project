
function desktopCartClick () {
    var ph = 0;
    $("#cart-btn").click(function () {
        if (ph == 0) {
            $("#cart-wrapper").animate({left: "75%"}, "1000");
            ph = 1;
        }
        else if (ph == 1) {
            $("#cart-wrapper").animate({left: "100%"}, "1000");
            ph = 0;
        }
    });
}