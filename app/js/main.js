'use strict';

$(function () {
  // header scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".header").addClass("__scroll");
    } else {
      $(".header").removeClass("__scroll");
    }
  });
  $(document).ready(function () {
    if ($(window).scrollTop() > 0) {
      $(".header").addClass("__scroll");
    } else {
      $(".header").removeClass("__scroll");
    }
  });

  $(".switch").on("change", function() {
    $('.switch_home').toggleClass('color-muted');
    $('.switch_business').toggleClass('color-muted');
    $('.tarif-list.__home').toggleClass('d-none');
    $('.tarif-list.__business').toggleClass('d-none');
});


});

// АККОРДИОН
$(document).ready(function () {
  if ($('.accordion').length) {
    document.querySelectorAll('.accordion').forEach((item, index) => {
      item.id = 'accordion' + (index + 1);
      new ItcAccordion('#' + item.id, {
        alwaysOpen: false,
      });
    });
  }
});

$(document).ready(function () {
  if ($(".js-mask-phone").length) {
    $(".js-mask-phone").mask("+7 (X99) 999-9999", {
      // placeholder: 'Номер телефона',
      translation: {
        X: {
          pattern: /9/,
          optional: false,
        },
      },
    });
  }
});

const swiperReviews = new Swiper(".slider-reviews", {
  loop: true,
  slidesPerView: 1,
  effect: "fade",
  mousewheel: true,
  pagination: {
    el: ".slider-reviews__pagination",
    clickable: true,
  },
});