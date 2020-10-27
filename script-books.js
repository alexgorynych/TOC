const mySwiper = new Swiper('.books-swiper-container', {

    slidesPerView: 3,
    spaceBetween: 4,

    pagination: {
        el: '.swiper-pagination',
    },

    autoplay: {
        delay: 4000,
    },

    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.books-swiper-button-next',
        prevEl: '.books-swiper-button-prev',
    },

})

const masterSwiper = new Swiper('.master-swiper-container', {
    slidesPerView: 1,
    autoplay: {
        delay: 8000,
    },
    loop: true,
    centeredSlides: true,
})