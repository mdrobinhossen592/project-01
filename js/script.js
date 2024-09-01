// type js start
document.addEventListener('DOMContentLoaded', function(){
  Typed.new('.type', {
    strings: ["Developer.", "Professional Coder.","SEO Specialist"],
    stringsElement: null,
// typing speed
typeSpeed: 60,
// time before typing starts
startDelay: 600,
// backspacing speed
backSpeed: 20,
// time before backspacing
backDelay: 500,
// loop
loop: true,
// false = infinite
// loopCount: 5,
// show cursor
showCursor: false,
// character for cursor
cursorChar: "|",
// attribute to type (null == text)
attr: null,
// either html or text
contentType: 'html',
  });
});

// type js end

// 2en type js start
document.addEventListener('DOMContentLoaded', function(){
  Typed.new('.dash', {
    strings: ["_", "", "", "_"],
    stringsElement: null,
// typing speed
typeSpeed: 20,
// time before typing starts
startDelay: 200,
// backspacing speed
backSpeed: 20,
// time before backspacing
backDelay: 300,
// loop
loop: true,
// false = infinite
// show cursor
showCursor: false,
// character for cursor
cursorChar: "_",
// attribute to type (null == text)
attr: null,
// either html or text
contentType: 'html',
  });
});
// 2en type js end


// counter js start
$('.counter').counterUp({
  delay: 20,
  time: 1000
});
// counter js end

// slick slider start
$('.sliders').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  prevArrow: '<span class="left_arrows"><i class="fa-regular fa-arrow-left"></i></span>',
  nextArrow: '<span class="right_arrow"><i class="fa-regular fa-arrow-right"></i></span>',
  
});
		
// slick slider end

// owl-carousel start
$(document).ready(function(){
  var carousel1 = $('.owl-carousel-1').owlCarousel({
    items: 6,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1500, 
    autoplayHoverPause: true, 
    smartSpeed: 3000,
  });

  var carousel2 = $('.owl-carousel-2').owlCarousel({
    items: 6,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    smartSpeed: 3000,
    slideBy: 1,
  });
});
// owl-carousel end