$(window).on("load", function () {
  $(".loader")
    .delay(200)
    .fadeOut(2000, function () {
      $("body").css("overflow", "auto");
    });
});

$(document).ready(function () {
  "use strict";
  let isRtl = $('html[lang="ar"]').length > 0;
  // when click to responsive btn show ul and overlay
  $(".nav-btn").click(function () {
    $(this).addClass("active");
    $(".nav-links").addClass("active");
    $(".nav-overlay").addClass("show");
  });

  // when i click on overlay remove class show and remove ul

  $(".nav-overlay").click(function () {
    $(".nav-btn").removeClass("active");
    $(".nav-links").removeClass("active");
    $(".nav-overlay").removeClass("show");
  });

  $(':input[type="number"]').on("input", function () {
    var nonNumReg = /[^0-9]/g;
    $(this).val($(this).val().replace(nonNumReg, ""));
  });

  // start to brand slider
  $(".services-slider").owlCarousel({
    items: 5,
    loop: true,
    rtl: isRtl,
    margin: 10,
    nav: false,
    stagePadding: 0,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplaySpeed: 7000,
    autoplayHoverPause: true,
    dots: false,
    nav: false,
    responsive: {
      320: {
        items: 1,
      },

      768: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  });

  // fixed nav
  let isFixed = function () {
    if ($(window).scrollTop() > 0) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  };

  isFixed();

  $(window).on("scroll", function () {
    isFixed();
  });
});
