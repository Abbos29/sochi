// Custom Scripts
// Custom scripts

const swiperHero = new Swiper('.hero__swiper', {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,

    autoplay: {
        delay: 3000,
    },

    // Responsive breakpoints
    breakpoints: {
    720: {
        slidesPerView: 1,
        spaceBetween: 30
    },
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

const swiperTour = new Swiper('', {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,

    autoplay: {
        delay: 5000,
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

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

    autoplay: {
        delay: 5000,
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
    720: {
        slidesPerView: 1,
        spaceBetween: 30
    },
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

const swiperGid = new Swiper('.gid__swiper, .direct__swiper', {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,

    autoplay: {
        delay: 5000,
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

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
