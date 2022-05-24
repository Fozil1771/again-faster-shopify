var swiper = new Swiper('.swiper', {
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


// tabulation in account page
//
document.querySelectorAll(".menu-item input").forEach(tab => {
    tab.addEventListener('click', (e) => {
        console.log(e.target.dataset.id)
        document.querySelectorAll(".menu-item input").forEach(t => t.classList.remove('selected'));
        e.target.classList.add('selected');
        document.querySelectorAll('.tab-content').forEach(t => t.classList.add('tab-hidden'));
        console.log(document.querySelector(`#${e.target.dataset.id}`))
        document.querySelector(`#${e.target.dataset.id}`).classList.remove('tab-hidden');
    });
})


