const mySwiper = new Swiper('.swiper-container', {

    slidesPerView: 3,
    spaceBetween: 4,

    pagination: {
        el: '.swiper-pagination',
    },

    autoplay: {
        delay: 4000,
    },

    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})