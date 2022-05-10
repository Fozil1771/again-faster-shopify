new Swiper('.swiper', {
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


new Swiper(".product-swiper", {
    direction: "vertical",
    allowTouchMove: true,
    draggable: true,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});