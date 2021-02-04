$(document).ready(function () {
  var mySwiper = new Swiper(".swiper-container", {
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  const swiper = new Swiper(".review .swiper-container", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination2",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});
