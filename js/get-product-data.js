// GET NEW PRODUCTS
$.ajax({
    type: 'GET',
    url: 'js/product.json',
    data: { get_param: 'value' },
    dataType: 'json',
    success: function(data) {
        var body = '';

        $.each(data, function(index, product) {

            var contentDiscount = '';
            var contentNewProduct = '';
            var contentHotProduct = '';

            // convert price
            var price = '€.' + (product.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');


            if (product.discount != 0) {
                var discount = '€.' + (product.discount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                contentDiscount = '' +
                    '<div class="section__article__products__price-sale">' +
                    '   <span>' + discount + '</span>' +
                    '</div>';
            }

            if (product.new_product == true) {
                contentNewProduct = '' +
                    '<div class="section__article__products__prd-new">' +
                    '   <span>NEW</span>' +
                    '</div>';
            } else if (product.hot_product) {
                contentHotProduct = '' +
                    '<div class="section__article__products__prd-hot">' +
                    '   <span>HOT</span>' +
                    '</div>';
            }

            body += '' +
                '<div class="col-12 col-lg-4 col-md-6 col-sm-12">' +
                '   <div class="section__article__products" onclick="addToCard(\'' + product.id + '\',\'' + product.title + '\',\'' + product.price + '\',\'' + product.image + '\')">' +
                '       <img src="images/product/' + product.image + '" alt="' + product.title + '" class="img-fluid">' +
                '       <div class="row">' +
                '           <div class="col-7 pr-0">' +
                '               <div class="section__article__products__name">' +
                '                   <span>' + product.title + '</span>' +
                '               </div>' +
                '           </div>' +
                '           <div class="col-5 text-right">' +
                '               <div class="section__article__products__price">' +
                '                   <span>' + price + '</span>' +
                '               </div>' +
                '               ' + contentDiscount +
                '           </div>' +
                '       </div>' +
                '       ' + contentNewProduct +
                '       ' + contentHotProduct +
                '   </div>' +
                '</div>';

        });

        $('#new-products').html(body);

    },
    error: function(error) {
        console.log("Error: " + error);
    }
});

// GET TOP PRODUCTS
$.ajax({
    type: 'GET',
    url: 'js/product.json',
    data: { get_param: 'value' },
    dataType: 'json',
    success: function(data) {
        var body = '';

        $.each(data, function(index, product) {
            if (index < 3) {
                var contentDiscount = '';
                var contentNewProduct = '';
                var contentHotProduct = '';

                // convert price
                var price = '€.' + (product.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

                var index = data.slice(0, 2);
                if (product.discount != 0) {
                    var discount = '€.' + (product.discount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                    contentDiscount = '' +
                        '<div class="section__article__products__price-sale">' +
                        '   <span>' + discount + '</span>' +
                        '</div>';
                }

                if (product.new_product == true) {
                    contentNewProduct = '' +
                        '<div class="section__article__products__prd-new">' +
                        '   <span>NEW</span>' +
                        '</div>';
                } else if (product.hot_product) {
                    contentHotProduct = '' +
                        '<div class="section__article__products__prd-hot">' +
                        '   <span>HOT</span>' +
                        '</div>';
                }

                body += '' +
                    '<div class="col-12 col-lg-4 col-md-6 col-sm-12">' +
                    '   <div class="section__article__products" onclick="addToCard(\'' + product.id + '\',\'' + product.title + '\',\'' + product.price + '\',\'' + product.image + '\')">' +
                    '       <img src="images/product/' + product.image + '" alt="' + product.title + '" class="img-fluid">' +
                    '       <div class="row">' +
                    '           <div class="col-7 pr-0">' +
                    '               <div class="section__article__products__name">' +
                    '                   <span>' + product.title + '</span>' +
                    '               </div>' +
                    '           </div>' +
                    '           <div class="col-5 text-right">' +
                    '               <div class="section__article__products__price">' +
                    '                   <span>' + price + '</span>' +
                    '               </div>' +
                    '               ' + contentDiscount +
                    '           </div>' +
                    '       </div>' +
                    '       ' + contentNewProduct +
                    '       ' + contentHotProduct +
                    '   </div>' +
                    '</div>';
            }
        });

        $('#top-products').html(body);

    },
    error: function(error) {
        console.log("Error: " + error);
    }
});

// GET SALE PRODUCTS
$.ajax({
    type: 'GET',
    url: 'js/product.json',
    data: { get_param: 'value' },
    dataType: 'json',
    success: function(data) {
        var body = '';

        $.each(data, function(index, product) {
            if (index > 2) {
                var contentDiscount = '';
                var contentNewProduct = '';
                var contentHotProduct = '';

                // convert price
                var price = '€.' + (product.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');


                if (product.discount != 0) {
                    var discount = '€.' + (product.discount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                    contentDiscount = '' +
                        '<div class="section__article__products__price-sale">' +
                        '   <span>' + discount + '</span>' +
                        '</div>';
                }

                if (product.new_product == true) {
                    contentNewProduct = '' +
                        '<div class="section__article__products__prd-new">' +
                        '   <span>NEW</span>' +
                        '</div>';
                } else if (product.hot_product) {
                    contentHotProduct = '' +
                        '<div class="section__article__products__prd-hot">' +
                        '   <span>HOT</span>' +
                        '</div>';
                }

                body += '' +
                    '<div class="col-12 col-lg-4 col-md-6 col-sm-12">' +
                    '   <div class="section__article__products" onclick="addToCard(\'' + product.id + '\',\'' + product.title + '\',\'' + product.price + '\',\'' + product.image + '\')">' +
                    '       <img src="images/product/' + product.image + '" alt="' + product.title + '" class="img-fluid">' +
                    '       <div class="row">' +
                    '           <div class="col-7 pr-0">' +
                    '               <div class="section__article__products__name">' +
                    '                   <span>' + product.title + '</span>' +
                    '               </div>' +
                    '           </div>' +
                    '           <div class="col-5 text-right">' +
                    '               <div class="section__article__products__price">' +
                    '                   <span>' + price + '</span>' +
                    '               </div>' +
                    '               ' + contentDiscount +
                    '           </div>' +
                    '       </div>' +
                    '       ' + contentNewProduct +
                    '       ' + contentHotProduct +
                    '   </div>' +
                    '</div>';
            }
        });

        $('#sale-products').html(body);

    },
    error: function(error) {
        console.log("Error: " + error);
    }
});