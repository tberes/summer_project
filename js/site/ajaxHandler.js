$(document).ready(function() {
    $(".menu-btns").click(function () {
        var temp = $(this).text();
        $("#main-content").load("/pages/" + temp + ".html");
        console.log(temp);
    });
});