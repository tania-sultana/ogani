
  var swiper = new Swiper(".categorySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,

 
    autoplay: {
      delay: 2500, 
      disableOnInteraction: false, 
    },

  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

 
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      576: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 3, spaceBetween: 25 },
      992: { slidesPerView: 4, spaceBetween: 30 },
    },
  });

