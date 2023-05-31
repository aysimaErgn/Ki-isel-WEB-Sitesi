$(document).ready(function() {        
    var slideIndex = 1;
    showSlides(slideIndex);
     
        //Next and previous buttons start
        $(".prev-slide").click(function() {
            plusSlides(-1);
        });
     
        $(".next-slide").click(function() {
            plusSlides(1);
        });
     
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }
        //Next and previous buttons end
     
        //dots start
        $(".dot1").click(function() {
            currentSlide(1);
        });
        $(".dot2").click(function() {
            currentSlide(2);
        });
        $(".dot3").click(function() {
            currentSlide(3);
        });
     
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }
        //dots end
    
        function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    $('.yetenekcubugu').each(function(){
        $(this).find('.yetenekcubugu-bar').animate({
            width: $(this).attr('data-percent')
        }, 6000);
    });
    });