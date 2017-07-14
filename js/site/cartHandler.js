
var productList = [];

function removeFromCart(productOrder) {
    $('#product-' + productOrder).remove();
    productList.splice(0, 1);
    updateCartIcon();
}


function addToCart() {
    $(".add-to-cart").click(function(){
        var currentProduct = $(this).parent();

        var temp = currentProduct.children().last().val();
        var imgSrc = temp.split(" ")[1];
        var name = currentProduct.children().last().attr("name");
        var price = temp.split(" ")[0];

        productList.push({imgSrc: imgSrc, name: name, price: price});
        productOrder = productList.length;
        $("#cart-wrapper").append(
            '<div class="in-cart-products" id="product-' + productOrder + '">' +
            '<div class="in-cart-product-img" style="background-image: url(' + imgSrc + ')"></div>' +
            '<div class="in-cart-product-info">' +
            '<p class="in-cart-product-name">' + name + '</p>' +
            '<p class="in-cart-product-price">' + price + '</p></div>' +
            '<div class="remove-from-cart-btn" onClick="removeFromCart(' + productOrder + ');">X</div>' +
            '</div>'
        );
        updateCartIcon();
    });
}

function updateCartIcon() {
    $("#product-counter").text(productList.length);
    if (productList.length < 1) {
        $("#product-counter").hide();
        $("#cart-wrapper").animate({left: "100%"}, "1000");
        $("#cart-wrapper").css({width: "100%"});
        phCart = 0;
    }
    else {
        $("#product-counter").show();
        $("#product-counter").text(productList.length);
    }
}