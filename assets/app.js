const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: false,
    nav: false,
    dots: false,
    slidesPerView: 4,
    allowTouchMove: true,
    spaceBetween: 16,

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        dragSize: 215,
    }
});