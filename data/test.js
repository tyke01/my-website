const swiper = new Swiper('.swiper-section', {
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
            slidesPerView: 1
        },
        1200: {
            slidesPerView: 1
        }
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    }
});

// 
const swiper2 = new Swiper ('.swiper-container-v', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: '.swiper-pagination-v',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
    },
    breakpoints: {
        400: {
            slidesPerView: 1
        },
        700: {
            slidesPerView: 1
        },
        1200: {
            slidesPerView: 1
        }
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    }
});
