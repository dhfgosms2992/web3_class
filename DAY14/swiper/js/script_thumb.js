$(function () {

    // 다양한 옵션은 API 문서를 참조하여 적용하기
    // https://swiperjs.com/swiper-api

    let thumb = new Swiper('.thumb', {
        // Optional parameters
        // 페이지 네비게이션 닷츠 위치
        direction: 'horizontal',  //horizontal ,vertical
        /*  
        사진 loop 실행여부 
        ex) 1,2,3,4 번째 사진후 1번째 사진으로 돌아올것인지
        */
        loop: false,    
        spaceBetween: 5,
        slidesPerView : 4,
        // freeMode: true,
        // watchSlidesProgress: true,

       
        

        autoplay: {                          // autoplay
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,        // 마우스 오버시 멈춤
          },
        
        mousewheel: true,       // 마우스 휠 기능 여부
        keyboard: {             // 키보드 기능 여부
            enabled: true,
        },
        
        // centeredSlides : true,

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });




    // 스와이퍼 시작!
    let swiper = new Swiper('.swiper', {
        // Optional parameters
        // 페이지 네비게이션 닷츠 위치
        direction: 'horizontal',  //horizontal ,vertical
        loop: true,
        

        autoplay: {                          // autoplay
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,        // 마우스 오버시 멈춤
          },

       

        mousewheel: true,       // 마우스 휠 기능 여부
        
        keyboard: {             // 키보드 기능 여부
            enabled: true,
        },

        //   const thumb 연결
        thumbs: {
            swiper: thumb,
          },

        
        

        // 큐브 효과
        // effect: "cube",
        // grabCursor: true,
        // cubeEffect: {
        //   shadow: true,
        //   slideShadows: true,
        //   shadowOffset: 20,
        //   shadowScale: 0.94,
        // },

        // coverflow
        // effect: "coverflow",
        // grabCursor: true,
        // centeredSlides: true,
        // slidesPerView: 3,
        // coverflowEffect: {
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        // },





        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable:true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
              },
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