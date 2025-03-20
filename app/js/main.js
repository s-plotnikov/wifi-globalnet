"use strict";

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

  $(".switch").on("change", function () {
    $(".switch_home").toggleClass("color-muted");
    $(".switch_business").toggleClass("color-muted");
    $(".tarif-list.__home").toggleClass("d-none");
    $(".tarif-list.__business").toggleClass("d-none");
  });

  $(".js-open-menu").on("click", function () {
    $(".menu").addClass("__open");
  });
  $(".js-close-menu").on("click", function () {
    $(".menu").removeClass("__open");
  });

});

// АККОРДИОН
$(document).ready(function () {
  if ($(".accordion").length) {
    document.querySelectorAll(".accordion").forEach((item, index) => {
      item.id = "accordion" + (index + 1);
      new ItcAccordion("#" + item.id, {
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
  autoHeight: true,
  pagination: {
    el: ".slider-reviews__pagination",
    clickable: true,
  },
});

const swiperThree = new Swiper(".slider-three", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
  navigation: {
    nextEl: ".slider-three__next",
    prevEl: ".slider-three__prev",
  },
});
