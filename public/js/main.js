(function($) {
  'use strict';

  /*========Team Slider JS============*/
  $('.brand-slider').owlCarousel({
    nav: false,
    loop: true,
    dots: false,
    autoplay: true,
    items: 3,
    responsive: {
      0: {
        items: 3,
        margin: 25
      },
      600: {
        items: 3,
        margin: 50
      },
      1000: {
        items: 5,
        margin: 75
      }
    }
  });
})(jQuery);
