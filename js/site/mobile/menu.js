
var phMenu = 0;

function menuClick() {
    $("#menu-btn").click(function () {
        if (phMenu === 0) {
            $("#menu-wrapper").animate({left: "65px"}, "1000");
            $("#cart-wrapper").animate({left: "100%"}, "1000");
            phMenu = 1;
            phCart = 0;
        }
        else if (phMenu === 1) {
            $("#menu-wrapper").animate({left: "100%"}, "1000");
            phMenu = 0;
        }
    });
}