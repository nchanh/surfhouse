var products = [];

// Get Product in Local Storage
$(function() {
    if (localStorage.products) {
        products = JSON.parse(localStorage.products);

        if (window.location.href.indexOf("cart") > -1) {
            showProductToTable();
            $('#product_table-error').css("display", "none");
        }

        if (window.location.href.indexOf("home") > -1) {
            showCart();
        }

        if (window.location.href.indexOf("checkout") > -1) {
            totalPrice();
        }

        if (window.location.href.indexOf("productpage") > -1) {
            var url = new URL(window.location.href);
            var product_id = url.searchParams.get("pid");
            getProductById(product_id);
        }

    } else {
        $('#product_table').css("display", "none");
        $('#product_table-error').text('No Products.');
        $('#product_sum-price').text('€.0');
        $('#product_sum-item').text(0);
    }
});



// Event click add to card
function addToCard(id, title, price, image) {

    $('#liveToast').toast('show')

    // Find Product and add quantity
    for (var i in products) {
        if (products[i].Id == id) {
            products[i].Quantity += 1;
            showCart();
            saveCart();
            return;
        }
    }

    // Create new item products
    var item = { Id: id, Title: title, Price: price, Image: image, Quantity: 1 };
    products.push(item);
    showCart();
    saveCart();
}


// Event click update to card
function updateCard(id) {
    var idQuantity = 'quantity' + id;
    var valInputNumber = document.getElementById(idQuantity).value;

    // Find Product and add quantity
    for (var i in products) {
        if (products[i].Id == id) {

            products[i].Quantity = valInputNumber;
            saveCart();
            showProductToTable();
            return;
        }
    }

}

// Save products in Local Storage
function saveCart() {
    if (window.localStorage) {
        localStorage.products = JSON.stringify(products);
    }
}

// Show and reload cart
function showCart() {
    if (products.length == 0) {
        $('#product_sum-item').text(0);
        return;
    }

    var price = 0;
    for (var i in products) {
        price += products[i].Price * products[i].Quantity;
    }
    price = '€.' + (price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

    $('#product_sum-price').text(price);
    $('#product_sum-item').text(products.length);
}

// Delete products by Id
function deleteById(id) {
    for (var i in products) {
        if (products[i].Id == id) {
            products.splice(i, 1);
        }
    }
    showProductToTable();
    saveCart();
}

// Show and reload table
function showProductToTable() {
    var content = '';

    if (products.length == 0) {
        $('#product_table').css("display", "none");
        $('#product_table-error').text('No Products.');
        return;
    }

    for (var i in products) {

        var price = '€.' + (parseFloat(products[i].Price)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        var subTotal = products[i].Price * products[i].Quantity;
        subTotal = '€.' + (subTotal).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

        content += '' +
            '<tr>' +
            '    <td class="section__article__body__product__table__tr" onclick="location.href = \'/productpage.html?pid=' + products[i].Id + '\';">' +
            '        <div class="row">' +
            '            <div class="col-3 px-0"><img src="images/product/' + products[i].Image + '" alt="' + products[i].Image + '" class="img-fluid" style="height: 70px !important"></div>' +
            '            <div class="col-9">' +
            '                <div class="section__acticle__body__product__table-product__info">' +
            '                    <div class="section__acticle__body__product__table-product__info__title"><span>' + products[i].Title + '</span></div>' +
            '                    <div class="section__acticle__body__product__table-product__info__content mb-2">' +
            '                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus soluta error, iste ex asperiores voluptatibus!</span>' +
            '                    </div>' +
            '                    <div class="section__article__body__product__table-product__info__linked">' +
            '                       <a href=""><i class="fab fa-facebook-f"></i></a>' +
            '                       <a href=""><i class="fab fa-twitter"></i></a>' +
            '                       <a href=""><i class="fab fa-pinterest-p"></i></a>' +
            '                   </div>' +
            '               </div>' +
            '           </div>' +
            '       </div>' +
            '   </td>' +
            '   <td class="px-0">' +
            '       <div class="section__acticle__body__product__table-product__price"><span>' + price + '</span></div>' +
            '   </td>' +
            '   <td class="px-0">' +
            '       <div class="section__acticle__body__product__table-product__quantity">' +
            '           <input type="number" name="quantity" id="quantity' + products[i].Id + '" min="1" max="100" class="pl-2" value="' + products[i].Quantity + '" onchange="updateCard(' + products[i].Id + ')">' +
            '       </div>' +
            '   </td>' +
            '   <td class="px-0">' +
            '       <div class="section__acticle__body__product__table-product__price">' +
            '           <div class="row">' +
            '               <div class="col-8"><span>' + subTotal + '</span></div>' +
            '               <div class="col-4 pl-0"><button onclick="deleteById(' + products[i].Id + ')" title="Delete"><i class="fas fa-times"></i></button></div>' +
            '               </div>' +
            '           </div>' +
            '   </td>' +
            '</tr>';
    }

    totalPrice();
    $('#product_cart').html(content);
}

// Show and reload cart
function totalPrice() {
    var priceYourCart = 0;
    var shipping = 0;
    var vat = 112.20;
    var orderTotal = 0;

    for (var i in products) {
        priceYourCart += products[i].Price * products[i].Quantity;
    }

    orderTotal = priceYourCart + 112.20;

    priceYourCart = '€.' + (priceYourCart).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    vat = '€.' + (vat).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    orderTotal = '€.' + (orderTotal).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');


    $('#product__card__price-your-cart').html(priceYourCart);
    $('#product__card__vat').html(vat);
    $('#product__card__order-total').html(orderTotal);
}


// Get Product By Id
function getProductById(id) {
    for (var i in products) {
        if (products[i].Id == id) {
            $('#product-detail-image').attr('src', 'images/product/' + products[i].Image);
            $('#product-detail-title').html(products[i].Title);
            $('#product-detail-price').html((parseFloat(products[i].Price)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
            $("#product-detail-quantity").val(products[i].Quantity);
        }
    }
}

//
function addToCardInProductDetail() {
    var url = new URL(window.location.href);
    var product_id = url.searchParams.get("pid");
    if (product_id != 0) {
        $('#liveToast').toast('show')

        // Find Product and add quantity
        for (var i in products) {
            if (products[i].Id == product_id) {
                products[i].Quantity += $('#product-detail-quantity').val();

                saveCart();
                return;
            }
        }

        // Create new item products
        var title = $('#product-detail-title').text();
        var price = $('#product-detail-price').text();
        var image = $('#product-detail-image').attr('src').replace('images/product/', '');
        var item = { Id: product_id, Title: title, Price: price, Image: image, Quantity: 1 };
        products.push(item);
        saveCart();
    }
}