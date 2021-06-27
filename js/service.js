var products = [];
var product = [];

// Get Product in Local Storage
$(function() {
    if (localStorage.products) {
        products = JSON.parse(localStorage.products);

        if (window.location.href.indexOf("home") > -1) {
            alert('a');
            showCart();
        }



    } else {
        $('#product_sum-price').text('€.0');
        $('#product_sum-item').text(0);
    }
});



// Event click add to card
function addToCard(id, title, price) {

    alert('add 1');

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
    var item = { Id: id, Title: title, Price: price, Quantity: 1 };
    products.push(item);
    showCart();
    saveCart();
}


// Event click sub to card
function subToCard(id, title, price) {

    // Find Product and add quantity
    for (var i in products) {
        if (products[i].Id == id) {

            // if quantity = 1 will delete product
            if (products[i].Quantity == 1) {
                deleteById(products[i].Id);
                return;
            }

            products[i].Quantity -= 1;
            showCart();
            saveCart();

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
            cart.splice(i, 1);
        }
    }
    showCart();
    saveCart();
}