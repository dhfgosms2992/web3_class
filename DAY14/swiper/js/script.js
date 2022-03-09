$(function () {


    // 스와이퍼 시작!
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal', // horizontal, vertical
        loop: true,


        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable : true,
            // type : 'fraction'
        },


        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },


        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });


})