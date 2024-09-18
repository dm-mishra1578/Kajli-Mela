var tl = gsap.timeline()
tl.from(".navbar .home",{
    y:-30,
    opacity:0,
    delay:0.5
})
tl.from(".navbar .nav-op",{
    y:-30,
    opacity:0,
    stagger:0.3
})

tl.from(".navbar .social-media-icon i",{
    y:-30,
    opacity:0,
    stagger:0.3
})

/* ----------------------js */
var swiper = new Swiper(".review-slider", {
    grabCursor: true,
    centeredSlides: true,  
    spaceBetween: 10,
    loop:true,
    autoplay: {
      delay: 1100,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });