
var phCart = 0;

function mobileCartClick () {
    $("#cart-btn, #product-counter").click(function () {
        if (phCart === 0) {
            $("#cart-wrapper").animate({left: "0"}, "1000");
            $("#menu-wrapper").animate({left: "100%"}, "1000");
            phCart = 1;
            phMenu = 0;
        }
        else if (phCart === 1) {
            $("#cart-wrapper").animate({left: "100%"}, "1000");
            phCart = 0;
        }
    });
}