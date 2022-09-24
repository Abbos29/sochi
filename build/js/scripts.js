// Custom Scripts
// Custom scripts

const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,

    // Responsive breakpoints
    breakpoints: {
    // when window width is >= 320px
    720: {
        slidesPerView: 3,
        spaceBetween: 30
    },
    // when window width is >= 480px
    480: {
        slidesPerView: 2,
        spaceBetween: 20
    },
    310: {
        slidesPerView: 1,
        spaceBetween: 10
    },
    }
});
