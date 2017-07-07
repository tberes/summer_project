
$(document).ready(function(){
    var ph = 0;
    $("#menu-btn").click(function(){
        if(ph == 0){
            $("#menu-wrapper").animate({left: "65px"}, "1000");
            ph = 1;
        }
        else if(ph == 1){
            $("#menu-wrapper").animate({left: "100%"}, "1000");
            ph = 0;
        }
    });
});