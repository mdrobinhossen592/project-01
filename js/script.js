$('.counter').counterUp({
  delay: 20,
  time: 1000
});

// owl-carousel
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
    autoplayHoverPause: false,
    smartSpeed: 3000,
    slideBy: 1,
  });
});
