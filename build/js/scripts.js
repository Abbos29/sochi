// Custom Scripts
// Custom scripts

const swiperHero = new Swiper('.hero__swiper', {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,

    // Responsive breakpoints
    breakpoints: {
    // when window width is >= 320px
    720: {
        slidesPerView: 1,
        spaceBetween: 30
    },
    // when window width is >= 480px
    480: {
        slidesPerView: 1,
        spaceBetween: 20
    },
    310: {
        slidesPerView: 1,
        spaceBetween: 10
    },
    }
});

const swiperTour = new Swiper('.tour__swiper', {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,

    // Responsive breakpoints
    breakpoints: {
    1400: {
        slidesPerView: 3,
        spaceBetween: 30
    },
    720: {
        slidesPerView: 2,
        spaceBetween: 30
    },
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

const swiperReviews = new Swiper('.reviews__swiper', {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,

    // Responsive breakpoints
    breakpoints: {
    // when window width is >= 320px
    720: {
        slidesPerView: 1,
        spaceBetween: 30
    },
    // when window width is >= 480px
    480: {
        slidesPerView: 1,
        spaceBetween: 20
    },
    310: {
        slidesPerView: 1,
        spaceBetween: 10
    },
    }
});

const swiperGid = new Swiper('.gid__swiper', {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,

    // Responsive breakpoints
    breakpoints: {
    1400: {
        slidesPerView: 3,
        spaceBetween: 30
    },
    720: {
        slidesPerView: 2,
        spaceBetween: 30
    },
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
