$(document).ready(function () {
  $(".drawer").drawer();
});

 const mySwiper = new Swiper(".swiper-container", {
   // Optional parameters
   loop: true,
   slidesPerView: 1.28,
   spaceBetween: 25,
   breakpoints: {
     445: {
       slidesPerView: 1.7,
     },

     580: {
       slidesPerView: 2.28,
     },

     960: {
       slidesPerView: 2.6,
       spaceBetween: 40,
     },
   },

   // If we need pagination
   pagination: {
     el: ".swiper-pagination",
     type: "bullets",
     clickable: true,
   },
 });

 $(function() {
  $(".ac__inner .question").on('click', function() {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  });
 });

$(function () {
    var headerHight = 80;
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top-headerHight;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

$(function () {
  var header = $("#header");

  header_offset = header.offset();

  header_height = header.height();

  $(window).scroll(function () {
    if ($(window).scrollTop() > header_offset.top + header_height) {
      header.addClass("scroll");
    } else {
      header.removeClass("scroll");
    }
  });
});
