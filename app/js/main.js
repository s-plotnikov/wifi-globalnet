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
    $('.circuit__img-cias').toggleClass('d-none');
    $('.circuit__img-no-cias').toggleClass('d-none');
});


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