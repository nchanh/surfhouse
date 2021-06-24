//khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex;

//mặc định hiển thị slide đầu tiên 
showSlides(slideIndex = 1);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// KHai bào hàm hiển thị slide
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("top-bar__slide__mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" top-bar__content__btn-carousel-active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " top-bar__content__btn-carousel-active";
}