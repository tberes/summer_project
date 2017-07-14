
function desktopCartClick () {
    //var ph = 0;
    $("#cart-btn, #product-counter").click(function () {
        if (phCart == 0) {
            if (windowWidth < 800) {
                $("#cart-wrapper").animate({left: "65px"}, "1000");
                $("#cart-wrapper").css({width: "calc(100% - 65px)"});
                phCart = 1;
            }
            else if (windowWidth < 1500) {
                $("#cart-wrapper").animate({left: "25%"}, "1000");
                $("#cart-wrapper").css({width: "75%"});
                phCart = 1;
            }
            else {
                $("#cart-wrapper").animate({left: "60%"}, "1000");
                $("#cart-wrapper").css({width: "40%"});
                phCart = 1;
            }
            console.log(phCart);
        }
        else if (phCart == 1) {
            $("#cart-wrapper").animate({left: "100%"}, "1000");
            $("#cart-wrapper").css({width: "100%"});
            phCart = 0;
            console.log(phCart);
        }
    });
}