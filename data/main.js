const swiper1 = new Swiper('.swiper-section', {

    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        400: {
            slidesPerView: 1
        },
        700: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 1
        }
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});

/* second swiper */
